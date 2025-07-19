import { useState, useEffect } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FadeInUp, SlideInLeft } from '@/components/ScrollAnimations';

export const DevProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/developer-projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects;

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dev-foreground mb-4">
              <span className="text-dev-primary font-mono">03.</span> Projects & Work
            </h2>
            <p className="text-dev-muted-foreground max-w-2xl mx-auto">
              Some things I've built that I'm actually proud of. Each project taught me something new.
            </p>
          </div>
        </FadeInUp>

        {/* Featured Projects */}
        <div className="mb-20">
          <FadeInUp>
            <h3 className="text-2xl font-semibold text-dev-foreground mb-8 font-mono">
              {'// Featured Projects'}
            </h3>
          </FadeInUp>
          
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
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
                        <Button size="sm" className="bg-dev-primary hover:bg-dev-primary/90">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="border-dev-border text-dev-foreground">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="inline-block">
                      <span className="text-dev-primary text-sm font-mono">Featured Project</span>
                    </div>
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
                      <a href={project.liveUrl} className="text-dev-primary hover:text-dev-accent transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a href={project.githubUrl} className="text-dev-primary hover:text-dev-accent transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </SlideInLeft>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <FadeInUp>
            <h3 className="text-2xl font-semibold text-dev-foreground mb-8 font-mono">
              {'// All Projects'}
            </h3>
          </FadeInUp>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.filter(project => !project.featured).map((project, index) => (
              <SlideInLeft key={project.title} delay={index * 100}>
                <Card className="bg-dev-card border-dev-border p-6 dev-border-glow h-full flex flex-col group hover:border-dev-primary transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <Code className="w-8 h-8 text-dev-primary" />
                    <div className="flex gap-2">
                      <a href={project.githubUrl} className="text-dev-muted-foreground hover:text-dev-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.liveUrl} className="text-dev-muted-foreground hover:text-dev-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-dev-foreground mb-3 group-hover:text-dev-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-dev-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-dev-secondary rounded text-dev-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-mono text-dev-primary">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </Card>
              </SlideInLeft>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
