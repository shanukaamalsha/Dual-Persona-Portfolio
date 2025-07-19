import { useState, useEffect } from 'react';
import { Menu, X, Palette, User, Heart, Images, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DesignerNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Palette },
    { id: 'about', label: 'About', icon: User },
    { id: 'gallery', label: 'Gallery', icon: Images },
    { id: 'testimonials', label: 'Testimonials', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Mail }
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-designer-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-creative flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-designer-foreground">
              Creative Studio
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
                className={`transition-all duration-300 rounded-full ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-creative shadow-lg'
                    : 'text-designer-foreground hover:text-designer-primary hover:bg-designer-primary/10'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-designer-foreground rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-designer-border">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full justify-start rounded-full ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-creative'
                      : 'text-designer-foreground hover:text-designer-primary hover:bg-designer-primary/10'
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