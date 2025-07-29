import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeInUp, SlideInLeft } from '@/components/ScrollAnimations';

export const DevProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/data/developer-projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dev-foreground mb-4">
              <span className="text-dev-primary font-mono">03.</span> Projects & Work
            </h2>
            <p className="text-dev-muted-foreground max-w-2xl mx-auto">
              Here are some projects I’ve worked on that helped me grow and sharpen my skills. Each one offered valuable lessons.
            </p>
          </div>
        </FadeInUp>

        <div className="mb-12">
          <FadeInUp>
            <h3 className="text-2xl font-semibold text-dev-foreground mb-8 font-mono">
              {'// My Projects'}
            </h3>
          </FadeInUp>

          <div className="space-y-16">
            {displayedProjects.map((project, index) => (
              <SlideInLeft key={project.title} delay={index * 200}>
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-dev-primary/20 rounded-lg transform transition-transform group-hover:scale-105" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="relative rounded-lg w-full h-64 object-cover border border-dev-border"
                      />
                      <div className="absolute inset-0 bg-dev-background/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-4">
                        <Button size="sm" className="bg-dev-primary hover:bg-dev-primary/90" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="border-dev-border text-dev-foreground" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    {project.featured && (
                      <div className="inline-block">
                        <span className="text-dev-primary text-sm font-mono">Featured Project</span>
                      </div>
                    )}
                    <h4 className="text-2xl font-bold text-dev-foreground">{project.title}</h4>
                    <div className="bg-dev-card border border-dev-border rounded-lg p-4 dev-border-glow">
                      <p className="text-dev-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-dev-secondary border border-dev-border rounded text-dev-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.liveUrl} className="text-dev-primary hover:text-dev-accent transition-colors" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a href={project.githubUrl} className="text-dev-primary hover:text-dev-accent transition-colors" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </SlideInLeft>
            ))}
          </div>

          {/* See More / See Less Button */}
          {projects.length > 4 && (
            <div className="mt-12 text-center">
              <Button
                variant="ghost"
                className="text-dev-primary font-mono hover:text-dev-primary hover:bg-transparent"
                onClick={() => setShowAll(prev => !prev)}
              >
                {showAll ? 'See Less ▲' : 'See More ▼'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
