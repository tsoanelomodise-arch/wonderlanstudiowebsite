import React, { useEffect, useRef, useState, useCallback } from 'react';
import { RotateCcw, Volume2, VolumeX, Smartphone } from 'lucide-react';

interface DinoGameProps {
  className?: string;
}

export const DinoGame: React.FC<DinoGameProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [gameState, setGameState] = useState<'START' | 'RUNNING' | 'GAMEOVER'>('RUNNING');
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(() => {
    try {
      return parseInt(localStorage.getItem('wonderland_dino_highscore') || '0', 10);
    } catch {
      return 0;
    }
  });
  const [muted, setMuted] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  // Sound generator using Web Audio API (no external asset files needed!)
  const playSound = useCallback((type: 'jump' | 'score' | 'hit') => {
    if (muted) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      if (type === 'jump') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'square';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'score') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'square';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08); // A5
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } else if (type === 'hit') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(120, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch {
      // Audio context might be restricted before user interaction
    }
  }, [muted]);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Game Engine state refs to avoid state lag inside requestAnimationFrame
  const engineRef = useRef({
    state: 'RUNNING' as 'START' | 'RUNNING' | 'GAMEOVER',
    score: 0,
    highScore: highScore,
    speed: 6.5,
    frameCount: 0,
    dino: {
      x: 50,
      y: 146, // groundY (190) - dinoHeight (44)
      width: 40,
      height: 44,
      vy: 0,
      isGrounded: true,
      isDucking: false,
      legState: 0,
    },
    obstacles: [] as Array<{
      x: number;
      y: number;
      width: number;
      height: number;
      type: 'cactus_small' | 'cactus_large' | 'pterodactyl';
      pterodactylFrame?: number;
    }>,
    clouds: [] as Array<{ x: number; y: number; speed: number; scale: number }>,
    groundBumps: [] as Array<{ x: number; length: number }>,
    nextObstacleTimer: 60,
    animationFrameId: 0,
  });

  // Keep highScore ref up to date
  useEffect(() => {
    engineRef.current.highScore = highScore;
  }, [highScore]);

  // Handle jump & duck logic
  const handleJump = useCallback(() => {
    const engine = engineRef.current;
    if (engine.state === 'START' || engine.state === 'GAMEOVER') {
      // Start or restart game
      engine.state = 'RUNNING';
      engine.score = 0;
      engine.speed = 6.5;
      engine.frameCount = 0;
      engine.dino = {
        x: 50,
        y: 146,
        width: 40,
        height: 44,
        vy: 0,
        isGrounded: true,
        isDucking: false,
        legState: 0,
      };
      engine.obstacles = [];
      engine.nextObstacleTimer = 50;
      setGameState('RUNNING');
      setScore(0);
      playSound('jump');
    } else if (engine.state === 'RUNNING' && engine.dino.isGrounded) {
      engine.dino.vy = -12.5;
      engine.dino.isGrounded = false;
      playSound('jump');
    }
  }, [playSound]);

  const handleDuck = useCallback((isDucking: boolean) => {
    const engine = engineRef.current;
    if (engine.state !== 'RUNNING') return;
    
    engine.dino.isDucking = isDucking;
    if (isDucking) {
      if (!engine.dino.isGrounded) {
        // Fast drop when in air and ducking
        engine.dino.vy += 4;
      } else {
        engine.dino.height = 26;
        engine.dino.width = 54;
        engine.dino.y = 190 - 26;
      }
    } else {
      engine.dino.height = 44;
      engine.dino.width = 40;
      if (engine.dino.isGrounded) {
        engine.dino.y = 190 - 44;
      }
    }
  }, []);

  // Keyboard Event Listeners
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
        e.preventDefault();
        handleJump();
      } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        e.preventDefault();
        handleDuck(true);
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        e.preventDefault();
        handleDuck(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [handleJump, handleDuck]);

  // Main Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fixed virtual resolution
    const VIRTUAL_WIDTH = 800;
    const VIRTUAL_HEIGHT = 240;
    const GROUND_Y = 190;

    canvas.width = VIRTUAL_WIDTH;
    canvas.height = VIRTUAL_HEIGHT;

    // Seed initial clouds & ground bumps
    const engine = engineRef.current;
    engine.clouds = [
      { x: 200, y: 40, speed: 1.2, scale: 1 },
      { x: 500, y: 65, speed: 0.8, scale: 0.8 },
      { x: 750, y: 30, speed: 1.0, scale: 1.1 },
    ];
    engine.groundBumps = [
      { x: 100, length: 15 },
      { x: 280, length: 8 },
      { x: 450, length: 22 },
      { x: 620, length: 12 },
      { x: 780, length: 18 },
    ];

    let lastScoreBeep = 0;

    // Drawing Helpers
    const drawDino = (
      x: number,
      y: number,
      width: number,
      height: number,
      isDucking: boolean,
      legState: number,
      isGameOver: boolean
    ) => {
      ctx.fillStyle = '#111111';

      if (isDucking) {
        // Ducking Dino Pixel Path
        // Body / Head stretched horizontally
        ctx.fillRect(x + 10, y + 6, 38, 12);
        ctx.fillRect(x + 36, y, 18, 10); // Head
        ctx.fillRect(x + 50, y + 2, 4, 3); // Snout
        // Eye
        ctx.fillStyle = isGameOver ? '#111111' : '#FFFFFF';
        ctx.fillRect(x + 42, y + 2, 3, 3);
        ctx.fillStyle = '#111111';

        // Tail
        ctx.fillRect(x, y + 10, 10, 6);
        ctx.fillRect(x - 4, y + 8, 6, 4);

        // Legs
        if (legState === 0) {
          ctx.fillRect(x + 18, y + 18, 4, 8);
          ctx.fillRect(x + 32, y + 18, 6, 4);
        } else {
          ctx.fillRect(x + 18, y + 18, 6, 4);
          ctx.fillRect(x + 32, y + 18, 4, 8);
        }
      } else {
        // Standing / Running Dino
        // Head
        ctx.fillRect(x + 18, y, 22, 14);
        ctx.fillRect(x + 22, y + 14, 14, 4);
        // Eye
        if (isGameOver) {
          // Dead eyes X
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(x + 24, y + 3, 5, 5);
          ctx.fillStyle = '#111111';
          ctx.fillRect(x + 24, y + 3, 2, 2);
          ctx.fillRect(x + 27, y + 6, 2, 2);
          ctx.fillRect(x + 27, y + 3, 2, 2);
          ctx.fillRect(x + 24, y + 6, 2, 2);
        } else {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(x + 26, y + 3, 4, 4);
          ctx.fillStyle = '#111111';
        }

        // Snout detail / Mouth
        ctx.fillRect(x + 36, y + 8, 4, 2);

        // Body
        ctx.fillRect(x + 10, y + 16, 20, 16);
        ctx.fillRect(x + 6, y + 20, 4, 10);
        // Arms
        ctx.fillRect(x + 26, y + 20, 6, 2);
        ctx.fillRect(x + 30, y + 22, 2, 4);

        // Tail
        ctx.fillRect(x + 2, y + 20, 6, 6);
        ctx.fillRect(x, y + 18, 4, 4);

        // Legs
        if (engine.dino.isGrounded) {
          if (legState === 0) {
            ctx.fillRect(x + 12, y + 32, 4, 12);
            ctx.fillRect(x + 22, y + 32, 4, 6);
            ctx.fillRect(x + 26, y + 38, 4, 6);
          } else {
            ctx.fillRect(x + 12, y + 32, 4, 6);
            ctx.fillRect(x + 8, y + 38, 4, 6);
            ctx.fillRect(x + 22, y + 32, 4, 12);
          }
        } else {
          // In air - both legs slightly bent
          ctx.fillRect(x + 12, y + 32, 4, 8);
          ctx.fillRect(x + 22, y + 32, 4, 8);
        }
      }
    };

    const drawCactus = (x: number, y: number, width: number, height: number, isLarge: boolean) => {
      ctx.fillStyle = '#111111';
      // Main trunk
      ctx.fillRect(x + width * 0.35, y, width * 0.3, height);
      // Left arm
      ctx.fillRect(x, y + height * 0.25, width * 0.35, height * 0.15);
      ctx.fillRect(x, y + height * 0.1, width * 0.15, height * 0.25);
      // Right arm
      ctx.fillRect(x + width * 0.65, y + height * 0.35, width * 0.35, height * 0.15);
      ctx.fillRect(x + width * 0.85, y + height * 0.2, width * 0.15, height * 0.25);
    };

    const drawPterodactyl = (x: number, y: number, frame: number) => {
      ctx.fillStyle = '#111111';
      // Body & Head
      ctx.fillRect(x + 12, y + 10, 18, 8);
      ctx.fillRect(x + 28, y + 6, 10, 6);
      ctx.fillRect(x + 36, y + 8, 8, 2); // Beak
      // Eye
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(x + 32, y + 7, 2, 2);
      ctx.fillStyle = '#111111';
      // Tail
      ctx.fillRect(x, y + 12, 12, 3);

      // Wings flap
      if (frame === 0) {
        // Wing Up
        ctx.fillRect(x + 16, y, 6, 10);
        ctx.fillRect(x + 14, y - 4, 4, 6);
      } else {
        // Wing Down
        ctx.fillRect(x + 16, y + 18, 6, 10);
        ctx.fillRect(x + 14, y + 26, 4, 4);
      }
    };

    const render = () => {
      // CLEAR CANVAS (Maintain transparency for underlying pixelated halftone overlay!)
      ctx.clearRect(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);

      const state = engine.state;

      // 1. UPDATE LOGIC (If running)
      if (state === 'RUNNING') {
        engine.frameCount++;
        engine.score = Math.floor(engine.frameCount / 5);

        // Gradually increase speed
        if (engine.speed < 13) {
          engine.speed += 0.0015;
        }

        // Play beep on score multiples of 100
        if (engine.score > 0 && engine.score % 100 === 0 && engine.score !== lastScoreBeep) {
          lastScoreBeep = engine.score;
          playSound('score');
        }

        // Dino Physics
        const dino = engine.dino;
        dino.vy += 0.65; // gravity
        dino.y += dino.vy;

        const currentDinoHeight = dino.isDucking ? 26 : 44;
        const targetGroundY = GROUND_Y - currentDinoHeight;

        if (dino.y >= targetGroundY) {
          dino.y = targetGroundY;
          dino.vy = 0;
          dino.isGrounded = true;
        }

        // Legs animation cycle
        if (engine.frameCount % 5 === 0) {
          dino.legState = dino.legState === 0 ? 1 : 0;
        }

        // Update Clouds
        engine.clouds.forEach(cloud => {
          cloud.x -= cloud.speed * (engine.speed / 6);
          if (cloud.x < -60) {
            cloud.x = VIRTUAL_WIDTH + Math.random() * 100;
            cloud.y = 20 + Math.random() * 60;
          }
        });

        // Update Ground Bumps
        engine.groundBumps.forEach(bump => {
          bump.x -= engine.speed;
          if (bump.x < -30) {
            bump.x = VIRTUAL_WIDTH + Math.random() * 50;
            bump.length = 6 + Math.random() * 16;
          }
        });

        // Spawn Obstacles
        engine.nextObstacleTimer--;
        if (engine.nextObstacleTimer <= 0) {
          const spawnBird = engine.score > 150 && Math.random() < 0.35;
          
          if (spawnBird) {
            const birdYHeights = [GROUND_Y - 58, GROUND_Y - 40, GROUND_Y - 22]; // high, mid, low
            const birdY = birdYHeights[Math.floor(Math.random() * birdYHeights.length)];
            engine.obstacles.push({
              x: VIRTUAL_WIDTH + 20,
              y: birdY,
              width: 42,
              height: 28,
              type: 'pterodactyl',
              pterodactylFrame: 0,
            });
          } else {
            const isLarge = Math.random() > 0.5;
            const obstacleWidth = isLarge ? 24 : 18;
            const obstacleHeight = isLarge ? 46 : 36;
            const groupCount = Math.floor(Math.random() * 2) + 1;

            for (let i = 0; i < groupCount; i++) {
              engine.obstacles.push({
                x: VIRTUAL_WIDTH + 20 + i * (obstacleWidth + 2),
                y: GROUND_Y - obstacleHeight,
                width: obstacleWidth,
                height: obstacleHeight,
                type: isLarge ? 'cactus_large' : 'cactus_small',
              });
            }
          }

          // Randomize next spawn interval based on current speed
          engine.nextObstacleTimer = Math.floor(45 + Math.random() * 50 - engine.speed * 2);
          if (engine.nextObstacleTimer < 28) engine.nextObstacleTimer = 28;
        }

        // Move & Check Collision on Obstacles
        for (let i = engine.obstacles.length - 1; i >= 0; i--) {
          const obs = engine.obstacles[i];
          obs.x -= engine.speed;

          if (obs.type === 'pterodactyl' && engine.frameCount % 12 === 0) {
            obs.pterodactylFrame = obs.pterodactylFrame === 0 ? 1 : 0;
          }

          // Remove offscreen
          if (obs.x < -60) {
            engine.obstacles.splice(i, 1);
            continue;
          }

          // Collision Detection (Hitbox slightly smaller than visual bounds for fairness)
          const hitMargin = 5;
          const dinoBox = {
            left: dino.x + hitMargin,
            right: dino.x + dino.width - hitMargin,
            top: dino.y + hitMargin,
            bottom: dino.y + dino.height - hitMargin,
          };

          const obsBox = {
            left: obs.x + hitMargin,
            right: obs.x + obs.width - hitMargin,
            top: obs.y + hitMargin,
            bottom: obs.y + obs.height - hitMargin,
          };

          if (
            dinoBox.left < obsBox.right &&
            dinoBox.right > obsBox.left &&
            dinoBox.top < obsBox.bottom &&
            dinoBox.bottom > obsBox.top
          ) {
            // GAME OVER TRIGGERED!
            engine.state = 'GAMEOVER';
            playSound('hit');
            setGameState('GAMEOVER');

            if (engine.score > engine.highScore) {
              engine.highScore = engine.score;
              setHighScore(engine.score);
              try {
                localStorage.setItem('wonderland_dino_highscore', engine.score.toString());
              } catch {
                // ignore
              }
            }
          }
        }

        // Sync score state periodically for UI display
        if (engine.frameCount % 3 === 0) {
          setScore(engine.score);
        }
      }

      // 2. DRAW GRAPHICS

      // Clouds
      ctx.fillStyle = '#555555';
      engine.clouds.forEach(cloud => {
        const cx = cloud.x;
        const cy = cloud.y;
        ctx.fillRect(cx, cy, 32 * cloud.scale, 8 * cloud.scale);
        ctx.fillRect(cx + 6 * cloud.scale, cy - 6 * cloud.scale, 20 * cloud.scale, 6 * cloud.scale);
      });

      // Ground Line
      ctx.strokeStyle = '#111111';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(VIRTUAL_WIDTH, GROUND_Y);
      ctx.stroke();

      // Ground pebbles/bumps
      ctx.fillStyle = '#111111';
      engine.groundBumps.forEach(bump => {
        ctx.fillRect(bump.x, GROUND_Y + 4, bump.length, 2);
      });

      // Obstacles
      engine.obstacles.forEach(obs => {
        if (obs.type === 'pterodactyl') {
          drawPterodactyl(obs.x, obs.y, obs.pterodactylFrame || 0);
        } else {
          drawCactus(obs.x, obs.y, obs.width, obs.height, obs.type === 'cactus_large');
        }
      });

      // Dino
      drawDino(
        engine.dino.x,
        engine.dino.y,
        engine.dino.width,
        engine.dino.height,
        engine.dino.isDucking,
        engine.dino.legState,
        engine.state === 'GAMEOVER'
      );

      // Score Display in Retro Style (Top Right)
      ctx.fillStyle = '#111111';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'right';
      const padNum = (num: number) => num.toString().padStart(5, '0');
      const scoreStr = `HI ${padNum(engine.highScore)}  ${padNum(engine.score)}`;
      ctx.fillText(scoreStr, VIRTUAL_WIDTH - 20, 30);

      engine.animationFrameId = requestAnimationFrame(render);
    };

    engine.animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(engine.animationFrameId);
    };
  }, [playSound]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[380px] sm:max-h-[440px] rounded-none overflow-hidden bg-transparent group select-none touch-none ${className}`}
      onClick={() => {
        handleJump();
      }}
      onTouchStart={(e) => {
        // Prevent default touch behaviors like pull-to-refresh or double tap zoom when tapping the game
        if (e.target instanceof HTMLElement && e.target.tagName !== 'BUTTON') {
          handleJump();
        }
      }}
    >
      {/* Transparent Game Canvas */}
      <canvas 
        ref={canvasRef}
        className="w-full h-full object-contain relative z-10 cursor-pointer"
      />

      {/* Sound Mute/Unmute Toggle */}
      <button 
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setMuted(!muted);
        }}
        className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-black hover:text-white text-neutral-800 backdrop-blur border border-neutral-300/80 flex items-center justify-center transition-all shadow-sm"
        title={muted ? 'Unmute game audio' : 'Mute game audio'}
      >
        {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      </button>

      {/* Game Over UI Overlay (Play Again button only) */}
      {gameState === 'GAMEOVER' && (
        <div className="absolute inset-0 z-30 bg-black/10 backdrop-blur-[2px] flex flex-col items-center justify-end pb-4 sm:pb-6">
          <div className="bg-white/95 border border-neutral-300 rounded-2xl p-4 shadow-2xl text-center animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleJump();
              }}
              className="py-2.5 px-6 bg-black hover:bg-neutral-800 text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <RotateCcw size={14} />
              <span>Play Again</span>
            </button>
          </div>
        </div>
      )}



      {/* Mobile Touch Controls Overlay */}
      {isTouchDevice && gameState === 'RUNNING' && (
        <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-between px-6 pointer-events-auto">
          <button
            type="button"
            onTouchStart={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleDuck(true);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleDuck(false);
            }}
            className="px-5 py-2.5 rounded-full bg-black/80 active:bg-black text-white text-xs font-black uppercase tracking-wider backdrop-blur shadow-lg border border-white/20"
          >
            DUCK
          </button>

          <button
            type="button"
            onTouchStart={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleJump();
            }}
            className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-black uppercase tracking-wider backdrop-blur shadow-lg border border-white/20"
          >
            JUMP
          </button>
        </div>
      )}

      {/* Bottom Hint Bar */}
      <div className="absolute bottom-2 right-4 z-20 hidden md:flex items-center gap-2 text-[10px] text-neutral-500 font-mono tracking-wider pointer-events-none">
        <span>[SPACE] Jump</span>
        <span>•</span>
        <span>[DOWN] Duck</span>
      </div>
    </div>
  );
};

export default DinoGame;
