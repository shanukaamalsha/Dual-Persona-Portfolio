import { useState, useEffect } from 'react';
import { Eye, Heart, ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FadeInUp, SlideInLeft } from '@/components/ScrollAnimations';

export const DesignerGallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState([]);

  const filters = [
    { id: 'all', label: 'All Work', emoji: '🎨' },
    { id: 'branding', label: 'Branding', emoji: '🏷️' },
    { id: 'web', label: 'Web Design', emoji: '💻' },
    { id: 'graphics', label: 'Graphics', emoji: '🎭' },
    { id: 'social', label: 'Social Media', emoji: '📱' },
    { id: 'ui', label: 'UI/UX', emoji: '🖌️' }
  ];

  useEffect(() => {
    fetch('/data/designer-projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading designer projects:', error));
  }, []);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project =>
  activeFilter === 'all' || (project.categories && project.categories.includes(activeFilter))
);

  return (
    <section id="gallery" className="py-20 relative" >
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
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-auto">
                          <Button className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
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
                These are just a few highlights from my portfolio. I’ve got tons more creative projects. Check out my Fiverr to see what I can do for your next big idea!
              </p>
              <a href="https://www.fiverr.com/silkowip" target='blank'>
                <Button className="bg-white text-designer-primary hover:bg-gray-100 font-semibold">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Work With Me
                </Button>
              </a>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};