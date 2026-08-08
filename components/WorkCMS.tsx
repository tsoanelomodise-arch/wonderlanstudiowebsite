import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Plus, Trash2, Edit2, ChevronUp, ChevronDown, 
  RotateCcw, Sliders, Eye, Sparkles, CheckCircle, 
  Tag as TagIcon, Layers, FileImage, ClipboardList, HelpCircle
} from 'lucide-react';
import { useProjects } from '../hooks/useProjects';
import { Project } from '../types';

interface WorkCMSProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_CATEGORIES = ['Web Design', 'Brand Design', 'Campaign', 'Systems & Software', 'Mobile Apps'];

const DEMO_PRESETS = [
  {
    title: 'Aether Cryptographic Hub',
    category: 'Systems & Software',
    image: 'https://donotdelete.wonderlandstudio.co.za/wswebsite/gsmwebsite.png', // using valid links
    images: [
      'https://donotdelete.wonderlandstudio.co.za/wswebsite/gsmwebsite.png',
      'https://donotdelete.wonderlandstudio.co.za/wswebsite/gsmipad.png'
    ],
    description: 'A cutting-edge client analytics platform featuring institutional grade metrics and interactive real-time telemetry rendering.',
    client: 'Aether Labs Corp',
    year: '2026',
    tags: ['Cybersecurity', 'Web3', 'High Performance'],
    results: [
      'Decentralized balance monitoring integrated',
      'Sub-50ms visual telemetry refresh rate',
      'Engineered with full accessibility criteria compliance'
    ]
  },
  {
    title: 'Lumina Creative Summit',
    category: 'Brand Design',
    image: 'https://donotdelete.wonderlandstudio.co.za/wswebsite/TF_Website_0.png',
    images: [
      'https://donotdelete.wonderlandstudio.co.za/wswebsite/TF_Website_0.png',
      'https://donotdelete.wonderlandstudio.co.za/wswebsite/TF_Ipad_Mobile.png'
    ],
    description: 'A minimal Swiss-style luxury brand identity designed for the southern hemisphere cultural design conference.',
    client: 'Lumina Alliance',
    year: '2025',
    tags: ['Typography', 'Editorial', 'Visual Overhaul'],
    results: [
      '35% increase in seasonal tickets registrations',
      'Complete typography system configured across 10 asset classes',
      'High-contrast digital brand alignment standard realized'
    ]
  }
];

const WorkCMS: React.FC<WorkCMSProps> = ({ isOpen, onClose }) => {
  const { 
    projects, 
    addProject, 
    updateProject, 
    deleteProject, 
    reorderProjects, 
    resetToDefault 
  } = useProjects();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Form States
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(PRESET_CATEGORIES[0]);
  const [customCategory, setCustomCategory] = useState('');
  const [useCustomCategory, setUseCustomCategory] = useState(false);
  const [coverImage, setCoverImage] = useState('');
  const [secImageUrl, setSecImageUrl] = useState('');
  const [secondaryImages, setSecondaryImages] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [tagsInput, setTagsInput] = useState('');
  const [resultInput, setResultInput] = useState('');
  const [results, setResults] = useState<string[]>([]);

  // Feedback State
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'info' | 'error'} | null>(null);

  const showNotification = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3500);
  };

  const handleStartEdit = (project: Project) => {
    setEditingId(project.id);
    setTitle(project.title);
    
    if (PRESET_CATEGORIES.includes(project.category)) {
      setCategory(project.category);
      setUseCustomCategory(false);
    } else {
      setCustomCategory(project.category);
      setUseCustomCategory(true);
    }
    
    setCoverImage(project.image);
    setSecondaryImages(project.images || []);
    setDescription(project.description);
    setClient(project.client || '');
    setYear(project.year || '');
    setTagsInput((project.tags || []).join(', '));
    setResults(project.results || []);
    setSecImageUrl('');
    setResultInput('');

    showNotification(`Loaded "${project.title}" for editing`, 'info');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setCategory(PRESET_CATEGORIES[0]);
    setCustomCategory('');
    setUseCustomCategory(false);
    setCoverImage('');
    setSecImageUrl('');
    setSecondaryImages([]);
    setDescription('');
    setClient('');
    setYear(new Date().getFullYear().toString());
    setTagsInput('');
    setResultInput('');
    setResults([]);
  };

  const addSecondaryImage = () => {
    if (!secImageUrl.trim()) return;
    if (secondaryImages.includes(secImageUrl.trim())) {
      showNotification('Image URL is already added.', 'error');
      return;
    }
    setSecondaryImages([...secondaryImages, secImageUrl.trim()]);
    setSecImageUrl('');
  };

  const removeSecondaryImage = (idx: number) => {
    setSecondaryImages(secondaryImages.filter((_, i) => i !== idx));
  };

  const addResultBullet = () => {
    if (!resultInput.trim()) return;
    setResults([...results, resultInput.trim()]);
    setResultInput('');
  };

  const removeResultBullet = (idx: number) => {
    setResults(results.filter((_, i) => i !== idx));
  };

  const handleApplyPreset = (idx: number) => {
    const preset = DEMO_PRESETS[idx];
    setTitle(preset.title);
    setCategory(preset.category);
    setUseCustomCategory(false);
    setCoverImage(preset.image);
    setSecondaryImages(preset.images);
    setDescription(preset.description);
    setClient(preset.client);
    setYear(preset.year);
    setTagsInput(preset.tags.join(', '));
    setResults(preset.results);
    showNotification(`Prefilled form with "${preset.title}" preset!`, 'success');
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      showNotification('Please provide a project title.', 'error');
      return;
    }
    if (!coverImage.trim()) {
      showNotification('Please specify a cover image URL.', 'error');
      return;
    }
    if (!description.trim()) {
      showNotification('Please complete the project description.', 'error');
      return;
    }

    const finalCategory = useCustomCategory ? customCategory.trim() : category;
    if (!finalCategory.trim()) {
      showNotification('Please choose or write a category.', 'error');
      return;
    }

    const parsedTags = tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const projectData = {
      title: title.trim(),
      category: finalCategory,
      image: coverImage.trim(),
      images: secondaryImages.length > 0 ? secondaryImages : [coverImage.trim()],
      description: description.trim(),
      client: client.trim() || 'Internal Project',
      year: year.trim() || new Date().getFullYear().toString(),
      tags: parsedTags,
      results: results.length > 0 ? results : ['Project design standard met successfully'],
    };

    if (editingId) {
      updateProject(editingId, projectData);
      showNotification(`Saved changes for "${title.trim()}"!`, 'success');
      setEditingId(null);
    } else {
      addProject(projectData);
      showNotification(`Successfully added "${title.trim()}"!`, 'success');
    }

    resetForm();
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteProject(id);
      showNotification(`Deleted "${name}"`, 'info');
      if (editingId === id) {
        setEditingId(null);
        resetForm();
      }
    }
  };

  const handleReset = () => {
    if (window.confirm('Restore system defaults? This will erase any customized projects.')) {
      resetToDefault();
      showNotification('Restored to default projects!', 'info');
      setEditingId(null);
      resetForm();
    }
  };

  const filteredList = projects.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-2 sm:p-4 md:p-8">
          {/* Overlay background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />

          {/* Interactive panel container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-7xl h-[92vh] bg-white border border-neutral-200 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-black"
          >
            {/* Header Area */}
            <div className="p-4 sm:p-6 md:p-8 border-b border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 bg-neutral-50 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white shadow-md">
                  <Sliders size={20} />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-black font-display text-black tracking-tight uppercase flex items-center gap-2">
                    Studio Works CMS
                  </h1>
                  <p className="text-neutral-500 text-xs tracking-wider uppercase font-bold mt-0.5">Configure, edit & expand site portfolio archives</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={handleReset}
                  className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full hover:bg-red-50 hover:border-red-300 text-neutral-600 hover:text-red-600 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                  title="Reset portfolio to baseline default systems state"
                >
                  <RotateCcw size={13} />
                  <span>Restore Baseline</span>
                </button>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 bg-neutral-100 hover:bg-black hover:text-white border border-neutral-200 rounded-full flex items-center justify-center text-black transition-all shadow-sm active:scale-95"
                  title="Close operations dashboard"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Notification Bar */}
            <AnimatePresence>
              {notification && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`p-4 text-center text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 border-b transition-colors ${
                    notification.type === 'success' 
                      ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/20' 
                      : notification.type === 'info'
                      ? 'bg-blue-950/40 text-blue-400 border-blue-500/20' 
                      : 'bg-red-950/40 text-red-400 border-red-500/20'
                  }`}
                >
                  <Sparkles size={14} className="animate-pulse" />
                  <span>{notification.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Interactive Dual Workspace Panels */}
            <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Workspace: Form Management Panel */}
              <div className="lg:col-span-7 p-6 md:p-8 overflow-y-auto border-r border-neutral-200 flex flex-col gap-8 bg-white">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-bold font-display text-black flex items-center gap-2 uppercase tracking-tight">
                      {editingId ? <Edit2 size={16} className="text-black" /> : <Plus size={16} className="text-black" />}
                      <span>{editingId ? 'Modify Selected Workspace Project' : 'Publish New Project Asset'}</span>
                    </h2>
                    {!editingId && (
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider flex items-center gap-1">
                          <Sparkles size={10} /> Fast Fill Demo:
                        </span>
                        <div className="flex gap-1.5">
                          <button 
                            onClick={() => handleApplyPreset(0)} 
                            className="px-2.5 py-1 bg-neutral-100 hover:bg-black hover:text-white text-[10px] font-bold text-neutral-700 rounded border border-neutral-200 transition-all uppercase"
                          >
                            Hub
                          </button>
                          <button 
                            onClick={() => handleApplyPreset(1)} 
                            className="px-2.5 py-1 bg-neutral-100 hover:bg-black hover:text-white text-[10px] font-bold text-neutral-700 rounded border border-neutral-200 transition-all uppercase"
                          >
                            Summit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-neutral-500 text-xs">Fill the fields underneath with proper digital parameters. Starred parameters are strictly essential.</p>
                </div>

                <form onSubmit={handleSave} className="space-y-6">
                  {/* Basic Data fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Project Title *
                      </label>
                      <input 
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="e.g. Greenside Sport Med"
                        className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-xl text-sm focus:border-black focus:bg-white transition-colors text-black outline-none font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Client Identity
                      </label>
                      <input 
                        type="text"
                        value={client}
                        onChange={e => setClient(e.target.value)}
                        placeholder="e.g. Greenside Clinic"
                        className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-xl text-sm focus:border-black focus:bg-white transition-colors text-black outline-none font-medium"
                      />
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-[10px] font-bold text-neutral-700 uppercase tracking-wider">
                        Project Category *
                      </label>
                      <button 
                        type="button"
                        onClick={() => setUseCustomCategory(!useCustomCategory)}
                        className="text-[10px] text-black hover:underline font-bold tracking-wider uppercase"
                      >
                        {useCustomCategory ? 'Use Preset List' : 'Write Custom Category'}
                      </button>
                    </div>

                    {useCustomCategory ? (
                      <input 
                        type="text"
                        value={customCategory}
                        onChange={e => setCustomCategory(e.target.value)}
                        placeholder="e.g. Packaging & Branding, Strategy Audit"
                        className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-xl text-sm focus:border-black focus:bg-white transition-colors text-black outline-none font-medium"
                      />
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {PRESET_CATEGORIES.map(cat => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                              category === cat && !useCustomCategory
                                ? 'bg-black text-white border-black'
                                : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:border-black'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Year & Tags */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <label className="block text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Launch Year
                      </label>
                      <input 
                        type="text"
                        value={year}
                        onChange={e => setYear(e.target.value)}
                        placeholder="e.g. 2026"
                        className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-xl text-sm focus:border-black focus:bg-white transition-colors text-black outline-none font-medium"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Technical Tags (separated with commas)
                      </label>
                      <div className="relative">
                        <TagIcon size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                        <input 
                          type="text"
                          value={tagsInput}
                          onChange={e => setTagsInput(e.target.value)}
                          placeholder="e.g. UI/UX, Development, Portals"
                          className="w-full bg-neutral-50 border border-neutral-200 pl-11 pr-4 py-3 rounded-xl text-sm focus:border-black focus:bg-white transition-colors text-black outline-none font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Images Workspace */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Cover Image URL * (Must be high quality)
                      </label>
                      <div className="relative">
                        <FileImage size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                        <input 
                          type="url"
                          value={coverImage}
                          onChange={e => setCoverImage(e.target.value)}
                          placeholder="e.g. https://donotdelete.wonderlandstudio.co.za/wswebsite/gsmwebsite.png"
                          className="w-full bg-neutral-50 border border-neutral-200 pl-11 pr-4 py-3 rounded-xl text-sm focus:border-black focus:bg-white transition-colors text-black outline-none font-medium"
                        />
                      </div>
                    </div>

                    <div className="border border-neutral-200 rounded-2xl p-4 bg-neutral-50 space-y-4">
                      <div>
                        <span className="block text-[10px] font-bold text-black uppercase tracking-wider mb-1">
                          Applet Image Slider Gallery
                        </span>
                        <p className="text-neutral-500 text-[10px]">Provide multiple screenshot URLs to enable user carousel sliders within work modal overlays.</p>
                      </div>

                      <div className="flex gap-2">
                        <input 
                          type="url"
                          value={secImageUrl}
                          onChange={e => setSecImageUrl(e.target.value)}
                          placeholder="Image URL to append"
                          className="flex-1 bg-white border border-neutral-200 px-4 py-2.5 rounded-xl text-xs text-black outline-none focus:border-black font-medium"
                        />
                        <button
                          type="button"
                          onClick={addSecondaryImage}
                          className="px-4 bg-black text-white hover:bg-neutral-800 transition-all rounded-xl flex items-center justify-center font-bold"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {secondaryImages.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                          {secondaryImages.map((img, idx) => (
                            <div key={idx} className="group relative aspect-[16/10] rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
                              <img src={img} alt="Thumbnail preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                              <button
                                type="button"
                                onClick={() => removeSecondaryImage(idx)}
                                className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-white font-bold text-[10px]"
                              >
                                <Trash2 size={14} className="mr-1" /> Remove
                              </button>
                              <div className="absolute bottom-1 right-2 px-1.5 py-0.5 bg-black/75 rounded text-[8px] text-white font-mono">
                                Slide {idx + 1}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-[10px] text-neutral-500 italic">No secondary image sliders registered. Single cover image will be displayed.</p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Brief Case Description *
                    </label>
                    <textarea 
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      placeholder="e.g. High-performance portal system configured for community-driven tracking standard..."
                      rows={4}
                      className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-xl text-sm focus:border-black focus:bg-white transition-colors text-black outline-none resize-none font-medium"
                    />
                  </div>

                  {/* Key Outcomes Box / bullets */}
                  <div className="border border-neutral-200 rounded-2xl p-4 bg-neutral-50 space-y-4">
                    <div className="flex items-center gap-2">
                      <ClipboardList size={14} className="text-black" />
                      <span className="block text-[10px] font-bold text-black uppercase tracking-wider">
                        Concrete Project Deliverables & Key Results
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <input 
                        type="text"
                        value={resultInput}
                        onChange={e => setResultInput(e.target.value)}
                        placeholder="e.g. Sub-1s page metric loading times achieved"
                        className="flex-1 bg-white border border-neutral-200 px-4 py-2.5 rounded-xl text-xs text-black outline-none focus:border-black font-medium"
                        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addResultBullet(); }}}
                      />
                      <button
                        type="button"
                        onClick={addResultBullet}
                        className="px-4 bg-black text-white hover:bg-neutral-800 transition-all rounded-xl flex items-center justify-center font-bold"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {results.length > 0 ? (
                      <ul className="space-y-2">
                        {results.map((res, idx) => (
                          <li key={idx} className="flex items-center justify-between gap-3 text-xs bg-white border border-neutral-200 px-3 py-2 rounded-xl text-neutral-800 font-medium">
                            <div className="flex items-start gap-2 max-w-[85%]">
                              <CheckCircle size={12} className="text-black shrink-0 mt-0.5" />
                              <span className="line-clamp-2 leading-relaxed">{res}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeResultBullet(idx)}
                              className="text-neutral-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 size={12} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[10px] text-neutral-500 italic">No custom outcomes added. Default system message will be generated on save.</p>
                    )}
                  </div>

                  {/* Actions Bar inside form */}
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 bg-black text-white hover:bg-neutral-800 transition-all font-bold uppercase tracking-wider text-[11px] rounded-full shadow-md"
                    >
                      {editingId ? 'Apply Saved Corrections' : 'Commit & Publish Project'}
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="px-6 py-3.5 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-black transition-all font-bold uppercase tracking-wider text-[11px] rounded-full"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Right Workspace: Live Catalog Explorer Panel */}
              <div className="lg:col-span-12 xl:col-span-5 p-6 md:p-8 bg-neutral-50 border-t lg:border-t-0 border-neutral-200 overflow-y-auto flex flex-col gap-6">
                <div>
                  <h2 className="text-lg font-bold font-display text-black flex items-center gap-2 uppercase tracking-tight">
                    <Layers size={16} className="text-black" />
                    <span>Archive Catalog Explorer</span>
                  </h2>
                  <p className="text-neutral-500 text-xs">Currently active archive projects on the live site grid. Re-order standard priorities or delete items.</p>
                </div>

                {/* Filter / Search input */}
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Filter by title or category..."
                  className="w-full bg-white border border-neutral-200 px-4 py-3 rounded-xl text-xs text-black outline-none focus:border-black font-medium"
                />

                {/* Grid listing */}
                <div className="space-y-3 flex-1">
                  {filteredList.length > 0 ? (
                    filteredList.map((p, idx) => {
                      const originIdx = projects.findIndex(pr => pr.id === p.id);
                      return (
                        <div 
                          key={p.id}
                          className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                            editingId === p.id 
                              ? 'bg-black text-white border-black' 
                              : 'bg-white border-neutral-200 hover:border-black'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="relative w-12 h-16 rounded-lg bg-neutral-100 overflow-hidden shrink-0 border border-neutral-200">
                              <img src={p.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                              <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-black/80 flex items-center justify-center text-[8px] font-bold text-white">
                                {originIdx + 1}
                              </div>
                            </div>
                            <div className="min-w-0">
                              <h3 className={`text-xs font-bold truncate ${editingId === p.id ? 'text-white' : 'text-black'}`} title={p.title}>{p.title}</h3>
                              <p className={`text-[10px] tracking-wider font-bold uppercase mt-1 truncate ${editingId === p.id ? 'text-neutral-300' : 'text-neutral-500'}`}>{p.category}</p>
                              <div className={`flex items-center gap-2 text-[9px] mt-1 ${editingId === p.id ? 'text-neutral-400' : 'text-neutral-400'}`}>
                                <span>{p.year || '2026'}</span>
                                <span>•</span>
                                <span>{p.images?.length || 1} slide(s)</span>
                              </div>
                            </div>
                          </div>

                          <div className={`flex items-center gap-1 px-2 py-1.5 rounded-xl border shrink-0 ${editingId === p.id ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                            {/* Re-order arrows */}
                            <button
                              onClick={() => { reorderProjects(originIdx, originIdx - 1); showNotification('Moved project prioritization up', 'info'); }}
                              disabled={originIdx === 0}
                              className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors disabled:opacity-20 disabled:pointer-events-none ${
                                editingId === p.id ? 'hover:bg-neutral-800 text-neutral-300 hover:text-white' : 'hover:bg-neutral-200 text-neutral-600 hover:text-black'
                              }`}
                              title="Prioritize upwards"
                            >
                              <ChevronUp size={14} />
                            </button>
                            <button
                              onClick={() => { reorderProjects(originIdx, originIdx + 1); showNotification('Moved project prioritization down', 'info'); }}
                              disabled={originIdx === projects.length - 1}
                              className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors disabled:opacity-20 disabled:pointer-events-none ${
                                editingId === p.id ? 'hover:bg-neutral-800 text-neutral-300 hover:text-white' : 'hover:bg-neutral-200 text-neutral-600 hover:text-black'
                              }`}
                              title="Prioritize downwards"
                            >
                              <ChevronDown size={14} />
                            </button>
                            
                            {/* Edit/Trash Actions */}
                            <button
                              onClick={() => handleStartEdit(p)}
                              className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                                editingId === p.id ? 'bg-white text-black' : 'hover:bg-black hover:text-white text-neutral-700'
                              }`}
                              title="Modify aspects of work item"
                            >
                              <Edit2 size={13} />
                            </button>
                            <button
                              onClick={() => handleDelete(p.id, p.title)}
                              className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                                editingId === p.id ? 'hover:bg-red-900/50 text-red-300' : 'hover:bg-red-50 text-neutral-500 hover:text-red-600'
                              }`}
                              title="Delete from site database"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-10 border border-dashed border-neutral-300 rounded-2xl bg-neutral-100">
                      <HelpCircle size={32} className="mx-auto text-neutral-400 mb-2" />
                      <p className="text-xs text-neutral-500 font-medium">No projects match the filtering criteria.</p>
                    </div>
                  )}
                </div>

                {/* Helpful tips */}
                <div className="p-4 bg-white border border-neutral-200 rounded-2xl text-[10px] text-neutral-600 space-y-2 leading-relaxed shrink-0 shadow-sm">
                  <span className="font-bold text-black flex items-center gap-1 uppercase tracking-wider">
                    <Sparkles size={11} /> Studio Directives:
                  </span>
                  <p>All updates are processed live and written securely using client sandbox caching. Reorder files to immediately shift slider placement across desktop and mobile screens.</p>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WorkCMS;
