import { useState } from 'react';
import { Eye, Heart, ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FadeInUp, SlideInLeft } from '@/components/ScrollAnimations';

export const DesignerGallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Work', emoji: '🎨' },
    { id: 'branding', label: 'Branding', emoji: '🏷️' },
    { id: 'web', label: 'Web Design', emoji: '💻' },
    { id: 'graphics', label: 'Graphics', emoji: '🎭' },
    { id: 'social', label: 'Social Media', emoji: '📱' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Aurora Coffee Co.',
      category: 'branding',
      description: 'Complete brand identity for a boutique coffee shop including logo, packaging, and store design.',
      image: '/placeholder.svg',
      likes: 234,
      views: 1200,
      tags: ['Logo Design', 'Packaging', 'Brand Guidelines']
    },
    {
      id: 2,
      title: 'TechFlow Dashboard',
      category: 'web',
      description: 'Modern SaaS dashboard design with clean UI/UX and intuitive user flows.',
      image: '/placeholder.svg',
      likes: 189,
      views: 890,
      tags: ['UI/UX', 'Dashboard', 'SaaS']
    },
    {
      id: 3,
      title: 'Festival Poster Series',
      category: 'graphics',
      description: 'Vibrant poster designs for summer music festival with bold typography and colors.',
      image: '/placeholder.svg',
      likes: 156,
      views: 756,
      tags: ['Poster Design', 'Typography', 'Event']
    },
    {
      id: 4,
      title: 'EcoLife Social Campaign',
      category: 'social',
      description: 'Instagram post templates and story designs for environmental awareness campaign.',
      image: '/placeholder.svg',
      likes: 298,
      views: 1450,
      tags: ['Social Media', 'Instagram', 'Templates']
    },
    {
      id: 5,
      title: 'Bloom Skincare',
      category: 'branding',
      description: 'Elegant branding for natural skincare brand with soft, organic visual identity.',
      image: '/placeholder.svg',
      likes: 321,
      views: 1680,
      tags: ['Branding', 'Packaging', 'Beauty']
    },
    {
      id: 6,
      title: 'FoodieApp Interface',
      category: 'web',
      description: 'Mobile app design for food delivery service with seamless ordering experience.',
      image: '/placeholder.svg',
      likes: 167,
      views: 923,
      tags: ['Mobile App', 'Food Tech', 'UI Design']
    },
    {
      id: 7,
      title: 'Retro Gaming Icons',
      category: 'graphics',
      description: 'Pixel-perfect icon set inspired by classic arcade games with modern twist.',
      image: '/placeholder.svg',
      likes: 432,
      views: 2100,
      tags: ['Icon Design', 'Gaming', 'Pixel Art']
    },
    {
      id: 8,
      title: 'Mindful Moments',
      category: 'social',
      description: 'Calming social media templates for meditation and wellness brand.',
      image: '/placeholder.svg',
      likes: 245,
      views: 1340,
      tags: ['Wellness', 'Templates', 'Mindfulness']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-designer-foreground mb-4">
              <span className="gradient-text">My Creative Gallery</span>
            </h2>
            <p className="text-designer-foreground/70 max-w-2xl mx-auto text-lg">
              A collection of projects that made my heart happy and my clients even happier! 🎨✨
            </p>
          </div>
        </FadeInUp>

        {/* Filter Buttons */}
        <FadeInUp delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-creative text-white shadow-lg scale-105'
                    : 'border-designer-border text-designer-foreground hover:border-designer-primary hover:bg-designer-primary/10'
                }`}
              >
                <span className="mr-2">{filter.emoji}</span>
                {filter.label}
              </Button>
            ))}
          </div>
        </FadeInUp>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <SlideInLeft key={project.id} delay={index * 100}>
              <Card className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group border-none">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex gap-2 mb-2">
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                          <Eye className="w-4 h-4 mr-1" />
                          {project.views}
                        </Button>
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                          <Heart className="w-4 h-4 mr-1" />
                          {project.likes}
                        </Button>
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 ml-auto">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-designer-foreground mb-2 group-hover:text-designer-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-designer-foreground/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-designer-secondary rounded-full text-xs font-medium text-designer-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </SlideInLeft>
          ))}
        </div>

        {/* Call to Action */}
        <FadeInUp delay={600}>
          <div className="text-center mt-16">
            <div className="bg-gradient-creative rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-4">Love what you see? 😍</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                These are just a few highlights from my portfolio. I've got tons more creative 
                projects and would love to show you how I can bring your vision to life!
              </p>
              <Button className="bg-white text-designer-primary hover:bg-gray-100 font-semibold">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Portfolio
              </Button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};