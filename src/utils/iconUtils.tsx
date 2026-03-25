import React from 'react';
import { 
  Video, FileText, Code, ExternalLink, Download, Play, Github, 
  Target, ArrowUpRight, Sparkles, Binary, Brain, Microscope, MessageSquare,
  Camera, Smartphone, Terminal, Database, Globe, ArrowRight, BookOpen, Layers
} from 'lucide-react';

export const getIcon = (name: string, size: number = 20) => {
  switch (name) {
    case 'Video': return <Video size={size} />;
    case 'FileText': return <FileText size={size} />;
    case 'Code': return <Code size={size} />;
    case 'Play': return <Play size={size} />;
    case 'Download': return <Download size={size} />;
    case 'Github': return <Github size={size} />;
    case 'Target': return <Target size={size} />;
    case 'ArrowUpRight': return <ArrowUpRight size={size} />;
    case 'Sparkles': return <Sparkles size={size} />;
    case 'Binary': return <Binary size={size} />;
    case 'Brain': return <Brain size={size} />;
    case 'Microscope': return <Microscope size={size} />;
    case 'MessageSquare': return <MessageSquare size={size} />;
    case 'Camera': return <Camera size={size} />;
    case 'Smartphone': return <Smartphone size={size} />;
    case 'Terminal': return <Terminal size={size} />;
    case 'Database': return <Database size={size} />;
    case 'Globe': return <Globe size={size} />;
    case 'ArrowRight': return <ArrowRight size={size} />;
    case 'BookOpen': return <BookOpen size={size} />;
    case 'Layers': return <Layers size={size} />;
    default: return <ExternalLink size={size} />;
  }
};
