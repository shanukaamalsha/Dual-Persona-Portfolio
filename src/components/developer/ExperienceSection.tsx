import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { FadeInUp, SlideInLeft } from '@/components/ScrollAnimations';

export const DevExperienceSection = () => {
  const experiences = [
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: '2024 - Present',
      location: 'Remote',
      description: [
        'Building custom web applications for local businesses and startups',
        'Delivered 12+ projects with 100% client satisfaction rate',
        'Specialized in modern React applications with responsive designs',
        'Managed full project lifecycle from requirements to deployment'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
      current: true
    },
    {
      title: 'Frontend Developer Intern',
      company: 'TechStart Solutions',
      period: 'Summer 2024',
      location: 'Colombo, Sri Lanka',
      description: [
        'Developed responsive web components using React and Tailwind CSS',
        'Collaborated with UX team to implement pixel-perfect designs',
        'Optimized application performance resulting in 40% faster load times',
        'Participated in code reviews and agile development practices'
      ],
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Git'],
      current: false
    }
  ];

  const education = [
    {
      degree: 'BSc Computer Science',
      institution: 'University of Colombo',
      period: '2023 - 2027',
      location: 'Colombo, Sri Lanka',
      description: [
        'Currently pursuing degree with focus on Software Engineering',
        'Relevant coursework: Data Structures, Algorithms, Database Systems',
        'Active member of the Computer Science Society',
        'GPA: 3.8/4.0 (Current)'
      ],
      current: true
    },
    {
      degree: 'Advanced Level',
      institution: 'Royal College',
      period: '2021 - 2022',
      location: 'Colombo, Sri Lanka',
      description: [
        'Completed A/L in Mathematics, Physics, and Chemistry',
        'Achieved 3A passes with distinction in Mathematics',
        'Led the school\'s computer club and organized coding workshops',
        'Won inter-school programming competition'
      ],
      current: false
    }
  ];

  const certifications = [
    {
      title: 'AI for Beginners',
      issuer: 'HP LIFE',
      date: 'April 2025',
      credentialUrl: '#'
    },
    {
      title: 'Business Email Essentials',
      issuer: 'HP LIFE',
      date: 'March 2025',
      credentialUrl: '#'
    },
    {
      title: 'React Developer Certification',
      issuer: 'freeCodeCamp',
      date: 'January 2025',
      credentialUrl: '#'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'December 2024',
      credentialUrl: '#'
    }
  ];

  return (
    <section className="py-20 relative">
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
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <SlideInLeft key={cert.title} delay={index * 100}>
                <Card className="bg-dev-card border-dev-border p-4 dev-border-glow group hover:border-dev-primary transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-dev-foreground group-hover:text-dev-primary transition-colors">
                      {cert.title}
                    </h4>
                    <a href={cert.credentialUrl} className="text-dev-muted-foreground hover:text-dev-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-dev-primary text-sm font-medium mb-1">{cert.issuer}</p>
                  <p className="text-dev-muted-foreground text-sm">{cert.date}</p>
                </Card>
              </SlideInLeft>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};