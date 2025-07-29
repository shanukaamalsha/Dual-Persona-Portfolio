import { Sparkles, Heart, Star, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeInUp, SlideInLeft, SlideInRight } from '@/components/ScrollAnimations';
import designerImage from '../../assets/designerPP.png'; 



export const DesignerHeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20 lg:pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating shapes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          >
            {i % 4 === 0 && <Heart className="w-8 h-8 text-designer-primary" />}
            {i % 4 === 1 && <Star className="w-6 h-6 text-designer-accent" />}
            {i % 4 === 2 && <Sparkles className="w-7 h-7 text-designer-creative" />}
            {i % 4 === 3 && <div className="w-4 h-4 rounded-full bg-designer-warm animate-bounce-creative" />}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <SlideInLeft>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-creative rounded-full text-white text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  Creative Designer
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-designer-foreground leading-tight">
                  Hey, I'm{' '}
                  <span className="gradient-text font-display">
                    Shanuka
                  </span>
                </h1>
                
                <p className="text-2xl md:text-3xl text-designer-foreground/80 font-light">
                  I create{' '}
                  <span className="font-semibold text-designer-primary">visual magic</span>
                  <br />
                  that tells your story ✨
                </p>
              </div>

              <p className="text-lg text-designer-foreground/70 max-w-xl leading-relaxed">
                From brand identities that pop to graphics that make people stop scrolling - 
                I bring ideas to life with creativity that hits different 🎨
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#gallery">
                  <Button className="bg-gradient-creative text-white font-semibold group hover:scale-105 transition-transform">
                    <Palette className="w-4 h-4 mr-2 group-hover:animate-bounce-creative" />
                    View My Work
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="border-designer-primary text-designer-primary hover:bg-designer-primary hover:text-white">
                    <Heart className="w-4 h-4 mr-2" />
                    Let's Collaborate
                  </Button>
                </a>
              </div>

              <div className="flex gap-6 pt-4">
                {[
                  { label: 'Dribbble', url: 'https://dribbble.com/opulent_', color: 'text-pink-500' },
                  { label: 'Pinterest', url: 'https://pin.it/xZ1ddiu9X', color: 'text-blue-500' },
                  { label: 'Instagram', url: 'https://www.instagram.com/infospherenexus?igsh=MWV4M3hmY2FzenZ3bw==',  color: 'text-purple-500' },
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target='_blank'
                    className={`${social.color} hover:scale-110 transition-transform font-medium`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </SlideInLeft>

          {/* Visual Element */}
          <SlideInRight delay={300}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                {/* Colorful orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 w-6 h-6 bg-designer-primary rounded-full -translate-x-1/2 animate-bounce-creative shadow-lg" />
                </div>
                <div className="absolute inset-8 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-designer-accent rounded-full -translate-x-1/2 animate-pulse" />
                  <div className="absolute bottom-0 left-1/2 w-5 h-5 bg-designer-warm rounded-full -translate-x-1/2" />
                  <div className="absolute left-0 top-1/2 w-3 h-3 bg-designer-creative rounded-full -translate-y-1/2" />
                  <div className="absolute right-0 top-1/2 w-4 h-4 bg-designer-primary rounded-full -translate-y-1/2" />
                </div>
                
                {/* Central avatar */}
                <div className="absolute inset-16 shadow-designer flex items-center justify-center creative-float">
                  <img
                    src={designerImage}
                    alt="Designer"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Creative elements floating around */}
                <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-lg rotate-12 border-l-4 border-designer-primary">
                  <div className="text-2xl">💡</div>
                  <p className="text-xs font-semibold text-designer-foreground mt-1">Ideas</p>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-lg -rotate-12 border-l-4 border-designer-accent">
                  <div className="text-2xl">🌈</div>
                  <p className="text-xs font-semibold text-designer-foreground mt-1">Colors</p>
                </div>
                <div className="absolute top-8 -left-12 bg-white rounded-2xl p-3 shadow-lg rotate-6 border-l-4 border-designer-warm">
                  <div className="text-xl">✨</div>
                </div>
                <div className="absolute bottom-8 -right-12 bg-white rounded-2xl p-3 shadow-lg -rotate-6 border-l-4 border-designer-creative">
                  <div className="text-xl">🚀</div>
                </div>
              </div>
            </div>
          </SlideInRight>
        </div>

        {/* Creative Stats */}
        <FadeInUp delay={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-designer-border">
            {[
              { value: '12+', label: 'Happy Clients', icon: '😊' },
              { value: '50+', label: 'Designs Created', icon: '🎨' },
              { value: '2.44%', label: 'Conversion Rate', icon: '📈' },
              { value: '∞', label: 'Creative Ideas', icon: '💡' },
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-designer-primary mb-2 group-hover:animate-bounce-creative">
                  {stat.value}
                </div>
                <div className="text-designer-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};