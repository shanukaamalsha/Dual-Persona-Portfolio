import { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, BookOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';

interface NavigationProps {
  mode: 'developer' | 'designer';
  onModeChange: (mode: 'developer' | 'designer') => void;
}

export const DevNavigation = ({ mode, onModeChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Code },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: BookOpen },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dev-background/80 backdrop-blur-md border-b border-dev-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-dev-primary font-mono">
              {'<dev />'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`font-mono transition-all duration-300 rounded-full ${
                  activeSection === item.id
                    ? 'text-dev-primary bg-dev-primary/10 border border-dev-primary/20 shadow'
                    : 'text-dev-muted-foreground hover:text-dev-primary hover:bg-dev-primary/5'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Right side: ModeToggle + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <ModeToggle mode={mode} onModeChange={onModeChange} />
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-dev-foreground rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-dev-border">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full justify-start font-mono rounded-full ${
                    activeSection === item.id
                      ? 'text-dev-primary bg-dev-primary/10 shadow'
                      : 'text-dev-muted-foreground hover:text-dev-primary hover:bg-dev-primary/5'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
