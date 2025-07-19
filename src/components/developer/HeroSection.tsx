import { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeInUp, SlideInLeft } from '@/components/ScrollAnimations';

export const DevHeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Frontend Developer', 'Problem Solver', 'Code Enthusiast', 'Tech Explorer'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeTimer = setInterval(() => {
      if (!isDeleting && charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else if (isDeleting && charIndex >= 0) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex--;
      }

      if (charIndex === currentRole.length + 1 && !isDeleting) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      }

      if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        clearInterval(typeTimer);
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeTimer);
  }, [roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dev-background via-dev-secondary to-dev-background">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-dev-primary rounded-full animate-pulse-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <SlideInLeft>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-dev-primary font-mono text-sm tracking-wider">
                  {"<hello_world>"}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-dev-foreground">
                  Hey, I'm{' '}
                  <span className="bg-gradient-dev bg-clip-text text-transparent">
                    Shanuka
                  </span>
                </h1>
                <div className="h-16 flex items-center">
                  <span className="text-2xl md:text-3xl text-dev-muted-foreground mr-2">
                    I'm a{' '}
                  </span>
                  <span className="text-2xl md:text-3xl font-semibold text-dev-primary font-mono">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
                <p className="text-dev-muted-foreground font-mono text-xs">
                  {"</hello_world>"}
                </p>
              </div>

              <p className="text-lg text-dev-muted-foreground max-w-xl leading-relaxed">
                CS student who's totally obsessed with turning wild ideas into reality through code. 
                I live for that moment when everything clicks and the code just works perfectly ✨
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-dev-primary hover:bg-dev-primary/90 text-dev-primary-foreground font-semibold group">
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download CV
                </Button>
                <Button variant="outline" className="border-dev-border text-dev-foreground hover:bg-dev-secondary">
                  <Mail className="w-4 h-4 mr-2" />
                  Let's Connect
                </Button>
              </div>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: Github, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Globe, href: '#' },
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="p-3 rounded-full border border-dev-border hover:border-dev-primary 
                             hover:bg-dev-primary/10 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-dev-foreground group-hover:text-dev-primary" />
                  </a>
                ))}
              </div>
            </div>
          </SlideInLeft>

          {/* Visual Element */}
          <FadeInUp delay={300}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-dev-primary rounded-full -translate-x-1/2 animate-pulse" />
                </div>
                <div className="absolute inset-4 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-dev-accent rounded-full -translate-x-1/2" />
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-dev-accent rounded-full -translate-x-1/2" />
                </div>
                
                {/* Central avatar placeholder */}
                <div className="absolute inset-12 rounded-full bg-gradient-dev dev-glow flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                
                {/* Code snippets floating around */}
                <div className="absolute -top-4 -right-4 bg-dev-card border border-dev-border rounded-lg p-3 dev-border-glow">
                  <code className="text-dev-primary text-xs font-mono">const awesome = true;</code>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-dev-card border border-dev-border rounded-lg p-3 dev-border-glow">
                  <code className="text-dev-terminal text-xs font-mono">{'</>code'}</code>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Stats */}
        <FadeInUp delay={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-dev-border">
            {[
              { value: '1+', label: 'Years Experience' },
              { value: '10+', label: 'Projects Built' },
              { value: '12+', label: 'Happy Clients' },
              { value: '∞', label: 'Lines of Code' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-dev-primary mb-2 group-hover:animate-pulse">
                  {stat.value}
                </div>
                <div className="text-dev-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};