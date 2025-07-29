import { useState } from 'react';
import { Send, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
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
    message: '',
    honeypot: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isDev = mode === 'developer';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Simple email regex for validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check all required fields
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setSuccessMessage('');
      return;
    }

    // Email format validation
    if (!isValidEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setSuccessMessage('');
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    const payload = {
      access_key: '516c9c5b-f497-486b-868e-885f782dc96c', // <-- Replace with your actual API key
      name: formData.name,
      email: formData.email,
      projectType: formData.projectType,
      message: formData.message,
      subject: `New message from ${formData.name} via Portfolio Contact Form`,
      honeypot: formData.honeypot, // should be empty for humans
      sender: formData.email,
      replyTo: formData.email,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setErrorMessage(`Server error: ${response.status} - ${errorText}`);
        setIsSubmitting(false);
        return;
      }

      const json = await response.json();

      if (json.success) {
        setSuccessMessage('🎉 Message sent successfully! Thank you for reaching out.');
        setFormData({
          name: '',
          email: '',
          projectType: '',
          message: '',
          honeypot: ''
        });
      } else {
        setErrorMessage(`Failed to send message: ${json.message || 'Please try again later.'}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(`An error occurred: ${error.message}`);
      } else {
        setErrorMessage('An unexpected error occurred');
      }
    }

    setIsSubmitting(false);

    // Clear messages after 5 seconds
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 5000);
  };

  return (
    <section
      id="contact"
      className={`py-20 relative ${isDev ? '' : 'bg-gradient-to-br from-designer-secondary to-white'}`}
    >
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDev ? 'text-dev-foreground' : 'text-designer-foreground'
              }`}
            >
              {isDev ? (
                <>
                  <span className="text-dev-primary font-mono">05.</span> Let's Connect
                </>
              ) : (
                <span className="gradient-text">Let's Create Magic Together</span>
              )}
            </h2>
            <p
              className={`max-w-3xl mx-auto text-lg ${
                isDev ? 'text-dev-muted-foreground' : 'text-designer-foreground/70'
              }`}
            >
              {isDev
                ? "Got a project idea? Let's turn it into reality with clean code and great UX!"
                : "Ready to turn your ideas into stunning visuals? Let’s chat and make it happen! ✨"}
            </p>
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <SlideInLeft>
            <Card
              className={`p-8 ${
                isDev ? 'bg-dev-card border-dev-border dev-border-glow' : 'bg-white shadow-xl border-none rounded-3xl'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Hidden honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  autoComplete="off"
                  tabIndex={-1}
                />

                {/* Success message */}
                {successMessage && (
                  <div className="p-4 mb-4 text-green-800 bg-green-100 rounded-lg border border-green-200 animate-fade-in">
                    {successMessage}
                  </div>
                )}

                {/* Error message */}
                {errorMessage && (
                  <div className="p-4 mb-4 text-red-800 bg-red-100 rounded-lg border border-red-200 animate-fade-in">
                    {errorMessage}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isDev ? 'text-dev-foreground' : 'text-designer-foreground'
                      }`}
                    >
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your awesome name"
                      required
                      className={isDev ? 'bg-dev-secondary border-dev-border text-dev-foreground' : ''}
                      disabled={isSubmitting}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isDev ? 'text-dev-foreground' : 'text-designer-foreground'
                      }`}
                    >
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
                      disabled={isSubmitting}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isDev ? 'text-dev-foreground' : 'text-designer-foreground'
                      }`}
                    >
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        isDev
                          ? 'bg-dev-secondary border-dev-border text-dev-foreground focus:ring-dev-primary'
                          : 'bg-white border-designer-border text-designer-foreground focus:ring-designer-primary'
                      }`}
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
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
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDev ? 'text-dev-foreground' : 'text-designer-foreground'
                    }`}
                  >
                    Tell me about your project *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      isDev
                        ? 'Describe your project, goals, and any technical requirements...'
                        : 'Tell me about your vision, brand personality, and what makes you unique...'
                    }
                    rows={5}
                    required
                    className={isDev ? 'bg-dev-secondary border-dev-border text-dev-foreground' : ''}
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full font-semibold group ${
                    isDev
                      ? 'bg-dev-primary hover:bg-dev-primary/90 text-dev-primary-foreground'
                      : 'bg-gradient-creative text-white hover:scale-105 transition-transform'
                  }`}
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  {isSubmitting ? 'Sending...' : isDev ? 'Send Message' : "Let's Make Magic ✨"}
                </Button>
              </form>
            </Card>
          </SlideInLeft>

          {/* Contact Info */}
          <SlideInRight delay={300}>
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card
                className={`p-6 ${
                  isDev ? 'bg-dev-card border-dev-border dev-border-glow' : 'bg-white shadow-xl border-none rounded-3xl'
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    isDev ? 'text-dev-foreground font-mono' : 'text-designer-foreground'
                  }`}
                >
                  {isDev ? '// Quick Contact' : 'Quick Contact 📞'}
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@shanuka.dev', href: 'mailto:hello@shanuka.dev' },
                    { icon: Phone, label: 'Phone', value: '+94 70 123 4567', href: 'tel:+94701234567' },
                    { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka' },
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
                      <Icon
                        className={`w-5 h-5 ${isDev ? 'text-dev-primary' : 'text-designer-primary'}`}
                      />
                      <div>
                        <div className="text-sm font-medium">{label}</div>
                        <div className="text-sm">{value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card
                className={`p-6 ${
                  isDev ? 'bg-dev-card border-dev-border dev-border-glow' : 'bg-white shadow-xl border-none rounded-3xl'
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    isDev ? 'text-dev-foreground font-mono' : 'text-designer-foreground'
                  }`}
                >
                  {isDev ? '// Find Me Online' : 'Find Me Online 🌐'}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {(isDev
                    ? [
                        { name: 'GitHub', url: 'https://github.com/shanukaamalsha', color: 'hover:text-green-600' },
                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shanuka-amalsha/', color: 'hover:text-blue-600' },
                        { name: 'YouTube', url: 'https://www.youtube.com/@infosphere_nexus', color: 'hover:text-red-400' },
                        { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61564203497701&mibextid=ZbWKwL', color: 'hover:text-purple-600' },
                      ]
                    : [
                        { name: 'Dribbble', url: 'https://dribbble.com/opulent_', color: 'hover:text-pink-500' },
                        { name: 'Instagram', url: 'https://www.instagram.com/infospherenexus?igsh=MWV4M3hmY2FzenZ3bw==', color: 'hover:text-purple-500' },
                        { name: 'Pinterest', url: 'https://pin.it/xZ1ddiu9X', color: 'hover:text-red-500' },
                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shanuka-amalsha/', color: 'hover:text-blue-600' },
                      ]
                  ).map(social => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
              <Card
                className={`p-6 text-center ${
                  isDev ? 'bg-dev-card border-dev-border dev-border-glow' : 'bg-gradient-creative text-white shadow-xl border-none rounded-3xl'
                }`}
              >
                {isDev ? (
                  <div>
                    <MessageCircle className="w-8 h-8 text-dev-primary mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-dev-foreground mb-2 font-mono">
                      {"// Let's Build Something Cool"}
                    </h3>
                    <p className="text-dev-muted-foreground text-sm">
                      Reach out anytime — I typically get back within a day!
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="text-4xl mb-3">💕</div>
                    <h3 className="text-lg font-bold mb-2">Can't wait to hear from you!</h3>
                    <p className="text-sm opacity-90">
                      I'm always excited about new projects and love meeting creative people! Let's make something beautiful together! ✨
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
