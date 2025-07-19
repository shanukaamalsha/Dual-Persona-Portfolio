import { useState } from 'react';
import { Send, Mail, Phone, MapPin, MessageCircle, Coffee, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { FadeInUp, SlideInLeft, SlideInRight } from '@/components/ScrollAnimations';

interface ContactSectionProps {
  mode: 'developer' | 'designer';
}

export const ContactSection = ({ mode }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isDev = mode === 'developer';

  return (
    <section className={`py-20 relative ${isDev ? '' : 'bg-gradient-to-br from-designer-secondary to-white'}`}>
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDev 
                ? 'text-dev-foreground' 
                : 'text-designer-foreground'
            }`}>
              {isDev ? (
                <>
                  <span className="text-dev-primary font-mono">05.</span> Let's Connect
                </>
              ) : (
                <span className="gradient-text">Let's Create Magic Together</span>
              )}
            </h2>
            <p className={`max-w-2xl mx-auto text-lg ${
              isDev 
                ? 'text-dev-muted-foreground' 
                : 'text-designer-foreground/70'
            }`}>
              {isDev 
                ? "Got a project idea? Let's turn it into reality with clean code and great UX!"
                : "Ready to make your brand absolutely stunning? Let's chat and bring your vision to life! ✨"
              }
            </p>
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <SlideInLeft>
            <Card className={`p-8 ${
              isDev 
                ? 'bg-dev-card border-dev-border dev-border-glow' 
                : 'bg-white shadow-xl border-none rounded-3xl'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDev ? 'text-dev-foreground' : 'text-designer-foreground'
                    }`}>
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your awesome name"
                      required
                      className={isDev ? 'bg-dev-secondary border-dev-border text-dev-foreground' : ''}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDev ? 'text-dev-foreground' : 'text-designer-foreground'
                    }`}>
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className={isDev ? 'bg-dev-secondary border-dev-border text-dev-foreground' : ''}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDev ? 'text-dev-foreground' : 'text-designer-foreground'
                    }`}>
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        isDev 
                          ? 'bg-dev-secondary border-dev-border text-dev-foreground focus:ring-dev-primary' 
                          : 'bg-white border-designer-border text-designer-foreground focus:ring-designer-primary'
                      }`}
                    >
                      <option value="">Select project type</option>
                      {isDev ? (
                        <>
                          <option value="website">Website Development</option>
                          <option value="webapp">Web Application</option>
                          <option value="mobile">Mobile App</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="other">Other</option>
                        </>
                      ) : (
                        <>
                          <option value="branding">Brand Identity</option>
                          <option value="webdesign">Web Design</option>
                          <option value="graphics">Graphic Design</option>
                          <option value="social">Social Media</option>
                          <option value="packaging">Packaging Design</option>
                          <option value="other">Other</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDev ? 'text-dev-foreground' : 'text-designer-foreground'
                    }`}>
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        isDev 
                          ? 'bg-dev-secondary border-dev-border text-dev-foreground focus:ring-dev-primary' 
                          : 'bg-white border-designer-border text-designer-foreground focus:ring-designer-primary'
                      }`}
                    >
                      <option value="">Select budget</option>
                      <option value="<1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDev ? 'text-dev-foreground' : 'text-designer-foreground'
                  }`}>
                    Tell me about your project *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={isDev 
                      ? "Describe your project, goals, and any technical requirements..."
                      : "Tell me about your vision, brand personality, and what makes you unique..."
                    }
                    rows={5}
                    required
                    className={isDev ? 'bg-dev-secondary border-dev-border text-dev-foreground' : ''}
                  />
                </div>

                <Button 
                  type="submit" 
                  className={`w-full font-semibold group ${
                    isDev 
                      ? 'bg-dev-primary hover:bg-dev-primary/90 text-dev-primary-foreground' 
                      : 'bg-gradient-creative text-white hover:scale-105 transition-transform'
                  }`}
                >
                  <Send className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  {isDev ? "Send Message" : "Let's Make Magic ✨"}
                </Button>
              </form>
            </Card>
          </SlideInLeft>

          {/* Contact Info */}
          <SlideInRight delay={300}>
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className={`p-6 ${
                isDev 
                  ? 'bg-dev-card border-dev-border dev-border-glow' 
                  : 'bg-white shadow-xl border-none rounded-3xl'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDev ? 'text-dev-foreground font-mono' : 'text-designer-foreground'
                }`}>
                  {isDev ? '// Quick Contact' : 'Quick Contact 📞'}
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@shanuka.dev', href: 'mailto:hello@shanuka.dev' },
                    { icon: Phone, label: 'Phone', value: '+94 70 123 4567', href: 'tel:+94701234567' },
                    { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka', href: '#' }
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                        isDev 
                          ? 'hover:bg-dev-secondary text-dev-muted-foreground hover:text-dev-foreground' 
                          : 'hover:bg-designer-secondary text-designer-foreground/70 hover:text-designer-foreground'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${
                        isDev ? 'text-dev-primary' : 'text-designer-primary'
                      }`} />
                      <div>
                        <div className="text-sm font-medium">{label}</div>
                        <div className="text-sm">{value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className={`p-6 ${
                isDev 
                  ? 'bg-dev-card border-dev-border dev-border-glow' 
                  : 'bg-white shadow-xl border-none rounded-3xl'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDev ? 'text-dev-foreground font-mono' : 'text-designer-foreground'
                }`}>
                  {isDev ? '// Find Me Online' : 'Find Me Online 🌐'}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {(isDev ? [
                    { name: 'GitHub', color: 'hover:text-gray-600' },
                    { name: 'LinkedIn', color: 'hover:text-blue-600' },
                    { name: 'Twitter', color: 'hover:text-blue-400' },
                    { name: 'Portfolio', color: 'hover:text-purple-600' }
                  ] : [
                    { name: 'Dribbble', color: 'hover:text-pink-500' },
                    { name: 'Behance', color: 'hover:text-blue-500' },
                    { name: 'Instagram', color: 'hover:text-purple-500' },
                    { name: 'Pinterest', color: 'hover:text-red-500' }
                  ]).map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className={`p-3 text-center rounded-lg transition-all duration-300 ${
                        isDev 
                          ? 'border border-dev-border hover:border-dev-primary text-dev-muted-foreground hover:text-dev-foreground' 
                          : 'border border-designer-border hover:border-designer-primary text-designer-foreground/70 hover:text-designer-foreground'
                      } ${social.color}`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </Card>

              {/* Fun Message */}
              <Card className={`p-6 text-center ${
                isDev 
                  ? 'bg-dev-card border-dev-border dev-border-glow' 
                  : 'bg-gradient-creative text-white shadow-xl border-none rounded-3xl'
              }`}>
                {isDev ? (
                  <div>
                    <MessageCircle className="w-8 h-8 text-dev-primary mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-dev-foreground mb-2 font-mono">
                      {"// Let's Build Something Cool"}
                    </h3>
                    <p className="text-dev-muted-foreground text-sm">
                      I typically respond within 24 hours. Coffee-fueled responses may come faster! ☕
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="text-4xl mb-3">💕</div>
                    <h3 className="text-lg font-bold mb-2">
                      Can't wait to hear from you!
                    </h3>
                    <p className="text-sm opacity-90">
                      I'm always excited about new projects and love meeting creative people! 
                      Let's make something beautiful together! ✨
                    </p>
                  </div>
                )}
              </Card>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};