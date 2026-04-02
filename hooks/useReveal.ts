
import { useEffect, useRef, useState } from 'react';

// Define an interface for the hook's options to include the custom 'once' property
interface RevealOptions extends IntersectionObserverInit {
  once?: boolean;
}

export const useReveal = (options: RevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Fix: Accessing 'once' property on a properly typed options object
        if (options.once !== false) {
          observer.unobserve(entry.target);
        }
      } else if (options.once === false) {
        // Fix: Accessing 'once' property on a properly typed options object
        setIsVisible(false);
      }
    }, {
      threshold: 0.1,
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isVisible, className: isVisible ? 'active' : '' };
};
