import { useState, useEffect } from 'react';
import { TerminalComponent } from '@/components/TerminalComponent';
import { FadeInUp, SlideInLeft, SlideInRight } from '@/components/ScrollAnimations';

export const DevAboutSection = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dev-foreground mb-4">
              <span className="text-dev-primary font-mono">01.</span> About Me
            </h2>
            <p className="text-dev-muted-foreground max-w-2xl mx-auto">
              Let me tell you my story through the terminal - the way developers communicate best
            </p>
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <SlideInLeft>
            <TerminalComponent isVisible={showTerminal} />
          </SlideInLeft>

          <SlideInRight delay={300}>
            <div className="space-y-8">
              <div className="bg-dev-card border border-dev-border rounded-lg p-6 dev-border-glow">
                <h3 className="text-xl font-semibold text-dev-primary mb-4 font-mono">
                  {'// The Journey'}
                </h3>
                <p className="text-dev-muted-foreground leading-relaxed mb-4">
                  Started as a curious kid who wondered "how does this website work?" and now I'm deep 
                  in the rabbit hole of creating digital experiences that actually make people's lives better.
                </p>
                <p className="text-dev-muted-foreground leading-relaxed">
                  Currently pursuing Computer Science while freelancing and building projects that 
                  challenge me to grow. I believe the best code is not just functional, but elegant and maintainable.
                </p>
              </div>

              <div className="bg-dev-card border border-dev-border rounded-lg p-6 dev-border-glow">
                <h3 className="text-xl font-semibold text-dev-primary mb-4 font-mono">
                  {'// Core Values'}
                </h3>
                <div className="space-y-3">
                  {[
                    'Clean, readable code is poetry',
                    'User experience > everything else',
                    'Continuous learning is non-negotiable',
                    'Collaboration makes magic happen'
                  ].map((value, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-dev-terminal rounded-full animate-pulse" />
                      <span className="text-dev-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-dev-card border border-dev-border rounded-lg p-6 dev-border-glow">
                <h3 className="text-xl font-semibold text-dev-primary mb-4 font-mono">
                  {'// When I\'m Not Coding'}
                </h3>
                <p className="text-dev-muted-foreground leading-relaxed">
                  You'll find me exploring new tech trends, contributing to open-source projects, 
                  or probably explaining to friends why I get excited about a perfectly optimized algorithm 😄
                </p>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};