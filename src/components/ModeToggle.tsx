import { useState } from 'react';
import { Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ModeToggleProps {
  mode: 'developer' | 'designer';
  onModeChange: (mode: 'developer' | 'designer') => void;
}

export const ModeToggle = ({ mode, onModeChange }: ModeToggleProps) => {
  return (
    <div className="flex gap-2 bg-card/80 backdrop-blur-md rounded-full p-2 border shadow-lg">
      <Button
        variant={mode === 'developer' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onModeChange('developer')}
        className={`rounded-full transition-all duration-300 ${
          mode === 'developer' 
            ? 'bg-dev-primary text-dev-primary-foreground shadow-dev' 
            : 'hover:bg-secondary'
        }`}
      >
        <Code className="w-4 h-4 mr-2" />
        Developer
      </Button>
      <Button
        variant={mode === 'designer' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onModeChange('designer')}
        className={`rounded-full transition-all duration-300 ${
          mode === 'designer' 
            ? 'bg-gradient-creative text-white shadow-designer' 
            : 'hover:bg-secondary'
        }`}
      >
        <Palette className="w-4 h-4 mr-2" />
        Designer
      </Button>
    </div>
  );
};