import { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { FadeInUp, SlideInLeft } from '@/components/ScrollAnimations';

export const DevExperienceSection = () => {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // Load experience data
    fetch('/data/experience.json')
      .then(response => response.json())
      .then(data => setExperiences(data))
      .catch(error => console.error('Error loading experience:', error));

    // Load education data
    fetch('/data/education.json')
      .then(response => response.json())
      .then(data => setEducation(data))
      .catch(error => console.error('Error loading education:', error));

    // Load certifications data
    fetch('/data/certifications.json')
      .then(response => response.json())
      .then(data => setCertifications(data))
      .catch(error => console.error('Error loading certifications:', error));
  }, []);

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dev-foreground mb-4">
              <span className="text-dev-primary font-mono">04.</span> Experience & Education
            </h2>
            <p className="text-dev-muted-foreground max-w-2xl mx-auto">
              My journey through code, learning, and real-world experience
            </p>
          </div>
        </FadeInUp>

        {/* Experience Section */}
        <div className="mb-16">
          <FadeInUp>
            <h3 className="text-2xl font-semibold text-dev-foreground mb-8 font-mono">
              {'// Work Experience'}
            </h3>
          </FadeInUp>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <SlideInLeft key={exp.title} delay={index * 200}>
                <Card className="bg-dev-card border-dev-border p-6 dev-border-glow relative overflow-hidden">
                  {exp.current && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-dev-primary text-dev-primary-foreground text-xs font-semibold rounded-full">
                        Current
                      </span>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <h4 className="text-xl font-semibold text-dev-foreground mb-2">{exp.title}</h4>
                      <p className="text-dev-primary font-semibold mb-2">{exp.company}</p>
                      
                      <div className="space-y-2 text-sm text-dev-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-dev-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-dev-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono bg-dev-secondary border border-dev-border rounded text-dev-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </SlideInLeft>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <FadeInUp>
            <h3 className="text-2xl font-semibold text-dev-foreground mb-8 font-mono">
              {'// Education'}
            </h3>
          </FadeInUp>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <SlideInLeft key={edu.degree} delay={index * 200}>
                <Card className="bg-dev-card border-dev-border p-6 dev-border-glow relative overflow-hidden">
                  {edu.current && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-dev-accent text-dev-accent-foreground text-xs font-semibold rounded-full">
                        In Progress
                      </span>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <h4 className="text-xl font-semibold text-dev-foreground mb-2">{edu.degree}</h4>
                      <p className="text-dev-primary font-semibold mb-2">{edu.institution}</p>
                      
                      <div className="space-y-2 text-sm text-dev-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <ul className="space-y-2">
                        {edu.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-dev-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-dev-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </SlideInLeft>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <FadeInUp>
            <h3 className="text-2xl font-semibold text-dev-foreground mb-8 font-mono">
              {'// Certifications & Achievements'}
            </h3>
          </FadeInUp>

          <div
            className="grid md:grid-cols-3 gap-6"
            style={{ gridTemplateColumns: 'repeat(3, minmax(320px, 1fr))' }}
          >
            {certifications.map((cert, index) => (
              <SlideInLeft key={cert.title} delay={index * 100}>
                <Card
                  className="bg-dev-card border-dev-border p-6 dev-border-glow group hover:border-dev-primary transition-all duration-300 flex items-center space-x-6"
                  style={{ minHeight: '240px' }}
                >
                  {/* Text */}
                  <div className="flex-1 flex flex-col justify-center h-full">
                    <h4 className="font-semibold text-dev-foreground group-hover:text-dev-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-dev-primary text-sm font-medium mb-1">{cert.issuer}</p>
                    <p className="text-dev-muted-foreground text-sm">{cert.date}</p>
                  </div>

                  {/* Certificate Image with rounded corners */}
                  <div className="w-48 h-40 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={cert.imageUrl}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>

                  {/* External Link */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dev-muted-foreground hover:text-dev-primary transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </Card>
              </SlideInLeft>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};