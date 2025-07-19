import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { FadeInUp, SlideInLeft } from '@/components/ScrollAnimations';

export const DesignerTestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, EcoLife Brands',
      image: '/placeholder.svg',
      rating: 5,
      text: "Shanuka totally transformed our brand! The designs were not just beautiful but told our story perfectly. Our sales increased by 40% after the rebrand. She's not just a designer, she's a brand magician! ✨",
      project: 'Complete Brand Identity'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, TechFlow',
      image: '/placeholder.svg',
      rating: 5,
      text: "Working with Shanuka was incredible. She understood our vision immediately and created a dashboard design that our users absolutely love. The UI is clean, intuitive, and modern. 10/10 would recommend!",
      project: 'SaaS Dashboard Design'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Marketing Director, Aurora Coffee',
      image: '/placeholder.svg',
      rating: 5,
      text: "Shanuka brought our coffee shop to life through her designs! From our logo to packaging, everything feels cohesive and premium. Customers constantly compliment our branding. She's amazing! ☕️",
      project: 'Cafe Branding & Packaging'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Event Organizer, Summer Beats',
      image: '/placeholder.svg',
      rating: 5,
      text: "The festival posters Shanuka designed were absolutely fire! They perfectly captured the energy and vibe we wanted. Ticket sales went through the roof. Her creativity is next level! 🎵",
      project: 'Festival Marketing Materials'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Founder, Bloom Skincare',
      image: '/placeholder.svg',
      rating: 5,
      text: "Shanuka created the most beautiful, elegant branding for our skincare line. The packaging is so gorgeous that customers buy products just for the aesthetic! She truly gets beauty branding. 🌸",
      project: 'Beauty Brand Package'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'App Developer, FoodieApp',
      image: '/placeholder.svg',
      rating: 5,
      text: "The mobile app design Shanuka created is stunning and user-friendly. Our app store ratings improved significantly after implementing her designs. She knows how to make apps that people love to use!",
      project: 'Mobile App UI/UX'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          >
            <Star className="w-4 h-4 text-designer-primary" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-designer-foreground mb-4">
              <span className="gradient-text">What People Say</span>
            </h2>
            <p className="text-designer-foreground/70 max-w-2xl mx-auto text-lg">
              Don't just take my word for it - here's what my amazing clients have to say! 💕
            </p>
          </div>
        </FadeInUp>

        {/* Stats Row */}
        <FadeInUp delay={200}>
          <div className="grid grid-cols-3 gap-8 mb-16">
            {[
              { number: '50+', label: 'Happy Clients', emoji: '😊' },
              { number: '4.9/5', label: 'Average Rating', emoji: '⭐' },
              { number: '98%', label: 'Client Satisfaction', emoji: '💯' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div className="text-3xl md:text-4xl font-bold text-designer-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-designer-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SlideInLeft key={testimonial.id} delay={index * 100}>
              <Card className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-none h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-designer-primary opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-designer-accent text-designer-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-designer-foreground/80 leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Project Tag */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-gradient-creative text-white text-xs font-medium rounded-full">
                    {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-designer-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-designer-secondary"
                  />
                  <div>
                    <h4 className="font-semibold text-designer-foreground text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-designer-foreground/60 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </SlideInLeft>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeInUp delay={600}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-designer-primary via-designer-accent to-designer-creative rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Join the Happy Client Club? 🎉</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Let's create something amazing together! I promise to put the same love and 
                creativity into your project that made all these clients fall in love with their designs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-designer-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition-all hover:scale-105">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-designer-primary font-semibold px-6 py-3 rounded-full transition-all hover:scale-105">
                  View More Reviews
                </button>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};