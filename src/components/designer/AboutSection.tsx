import { Heart, Sparkles, Zap, Coffee } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { FadeInUp, SlideInLeft, SlideInRight } from '@/components/ScrollAnimations';

export const DesignerAboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-designer-foreground mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-designer-foreground/70 max-w-2xl mx-auto text-lg">
              The creative mind turning your vision into stunning visuals ✨
            </p>
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <SlideInLeft>
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-designer border-l-6 border-designer-primary">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-designer-primary" />
                  <h3 className="text-2xl font-bold text-designer-foreground">My Design Philosophy</h3>
                </div>
                <p className="text-designer-foreground/80 leading-relaxed mb-4">
                  Design isn't just about making things look pretty. 
                  It's about creating emotional connections, telling stories, and making people feel something special.
                </p>
                <p className="text-designer-foreground/80 leading-relaxed">
                  Every color, every curve, every pixel has a purpose. I believe great design should be 
                  intuitive, accessible, and most importantly - it should make people smile! 😊
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-designer border-l-6 border-designer-accent">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-designer-accent" />
                  <h3 className="text-2xl font-bold text-designer-foreground">What Drives Me</h3>
                </div>
                <div className="space-y-3">
                  {[
                    'Creating designs that make people stop and stare',
                    'Turning complex ideas into simple, beautiful visuals',
                    'Making brands feel authentic and relatable',
                    'Constantly learning and experimenting with new styles'
                  ].map((drive, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-designer-accent rounded-full animate-pulse" />
                      <span className="text-designer-foreground/80">{drive}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SlideInLeft>

          <SlideInRight delay={300}>
            <div className="relative">
              {/* Creative illustration */}
              <div className="bg-gradient-creative rounded-3xl p-8 text-white text-center shadow-designer">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-4">Design is my superpower!</h3>
                <p className="opacity-90 leading-relaxed">
                  When I'm not creating amazing designs, you'll find me hunting for inspiration 
                  in art galleries, nature walks, or trying to recreate that perfect gradient I saw on Instagram! ✨
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg rotate-12 border-4 border-designer-warm">
                <Coffee className="w-8 h-8 text-designer-warm" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg -rotate-12 border-4 border-designer-creative">
                <Zap className="w-8 h-8 text-designer-creative" />
              </div>
            </div>
          </SlideInRight>
        </div>

        {/* Fun Facts Section */}
        <FadeInUp delay={600}>
          <div className="bg-white rounded-3xl p-8 shadow-designer">
            <h3 className="text-2xl font-bold text-designer-foreground mb-8 text-center">
              Fun Facts About Me 🎉
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '🎮',
                  title: 'Gamer Mode On',
                  description: 'Design breaks = intense gaming sessions (my creative cooldown)'
                },
                {
                  icon: '☕',
                  title: 'Coffee Powered',
                  description: 'Average 2 cups per design session (yes, I counted!)'
                },
                {
                  icon: '🎬',
                  title: 'Video Editing',
                  description: 'Cuts, transitions, motion – I love storytelling through frames'
                },
                {
                  icon: '🌙',
                  title: 'Night Owl',
                  description: 'Best creative ideas hit at 2 AM (brain goes brrr)'
                }
              ].map((fact, index) => (
                <Card key={index} className="p-6 text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-designer-secondary to-white">
                  <div className="text-3xl mb-3">{fact.icon}</div>
                  <h4 className="font-bold text-designer-foreground mb-2">{fact.title}</h4>
                  <p className="text-designer-foreground/70 text-sm leading-relaxed">{fact.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Creative Process */}
        <FadeInUp delay={800}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-designer-foreground mb-8">
              My Creative Process 🎨
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Listen & Dream', description: 'Understanding your vision and getting excited about possibilities' },
                { step: '02', title: 'Research & Explore', description: 'Diving deep into inspiration and competitor analysis' },
                { step: '03', title: 'Create & Iterate', description: 'Bringing ideas to life through sketches and digital magic' },
                { step: '04', title: 'Polish & Perfect', description: 'Fine-tuning every detail until it\'s absolutely perfect' }
              ].map((process, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-designer-primary hover:shadow-xl transition-all duration-300">
                    <div className="text-3xl font-bold text-designer-primary mb-3">{process.step}</div>
                    <h4 className="font-bold text-designer-foreground mb-2">{process.title}</h4>
                    <p className="text-designer-foreground/70 text-sm leading-relaxed">{process.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-designer-accent rounded-full animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};