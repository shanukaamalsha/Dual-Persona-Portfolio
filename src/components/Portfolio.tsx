import { useState, useEffect } from 'react';
import { ModeToggle } from './ModeToggle';
import { ContactSection } from './ContactSection';

// Developer Components
import { DevNavigation } from './developer/Navigation';
import { DevHeroSection } from './developer/HeroSection';
import { DevAboutSection } from './developer/AboutSection';
import { DevSkillsSection } from './developer/SkillsSection';
import { DevProjectsSection } from './developer/ProjectsSection';
import { DevExperienceSection } from './developer/ExperienceSection';

// Designer Components
import { DesignerNavigation } from './designer/Navigation';
import { DesignerHeroSection } from './designer/HeroSection';
import { DesignerAboutSection } from './designer/AboutSection';
import { DesignerGallerySection } from './designer/GallerySection';
import { DesignerTestimonialsSection } from './designer/TestimonialsSection';

export const Portfolio = () => {
  const [mode, setMode] = useState<'developer' | 'designer'>('designer');

  useEffect(() => {
    // Apply theme class to body
    document.body.className = mode === 'developer' ? 'dev-mode' : 'designer-mode';
    
    // Smooth transition
    document.body.style.transition = 'all 0.5s ease-in-out';
  }, [mode]);

  const handleModeChange = (newMode: 'developer' | 'designer') => {
    setMode(newMode);
    
    // Scroll to top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen transition-all duration-500">
      {mode === 'developer' ? <DevNavigation /> : <DesignerNavigation />}
      <ModeToggle mode={mode} onModeChange={handleModeChange} />
      
      {mode === 'developer' ? (
        <>
          <div id="home"><DevHeroSection /></div>
          <div id="about"><DevAboutSection /></div>
          <div id="skills"><DevSkillsSection /></div>
          <DevProjectsSection />
          <DevExperienceSection />
        </>
      ) : (
        <>
          <div id="home"><DesignerHeroSection /></div>
          <div id="about"><DesignerAboutSection /></div>
          <DesignerGallerySection />
          <div id="testimonials"><DesignerTestimonialsSection /></div>
        </>
      )}
      
      <div id="contact"><ContactSection mode={mode} /></div>
    </div>
  );
};