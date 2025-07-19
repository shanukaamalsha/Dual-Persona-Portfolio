import { FadeInUp, SlideInLeft } from '@/components/ScrollAnimations';
import { Card } from '@/components/ui/card';

export const DevSkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML5', level: 95, color: 'bg-orange-500' },
        { name: 'CSS3/Sass', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'React', level: 80, color: 'bg-blue-400' },
        { name: 'TypeScript', level: 75, color: 'bg-blue-600' },
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Python', level: 85, color: 'bg-green-500' },
        { name: 'Java', level: 80, color: 'bg-red-500' },
        { name: 'C++', level: 75, color: 'bg-blue-700' },
        { name: 'Git/GitHub', level: 90, color: 'bg-gray-600' },
        { name: 'VS Code', level: 95, color: 'bg-blue-500' },
      ]
    },
    {
      title: 'Design & Creative',
      skills: [
        { name: 'Photoshop', level: 90, color: 'bg-blue-800' },
        { name: 'UI/UX Design', level: 80, color: 'bg-purple-500' },
        { name: 'Figma', level: 85, color: 'bg-pink-500' },
        { name: 'Adobe Creative Suite', level: 75, color: 'bg-red-600' },
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dev-foreground mb-4">
              <span className="text-dev-primary font-mono">02.</span> Skills & Technologies
            </h2>
            <p className="text-dev-muted-foreground max-w-2xl mx-auto">
              Here's my current tech stack and the tools I use to bring ideas to life
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <SlideInLeft key={category.title} delay={categoryIndex * 200}>
              <Card className="bg-dev-card border-dev-border p-6 dev-border-glow h-full">
                <h3 className="text-xl font-semibold text-dev-primary mb-6 font-mono">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-dev-foreground font-medium">{skill.name}</span>
                        <span className="text-dev-primary text-sm font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-dev-secondary rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${skill.color} relative`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </SlideInLeft>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <FadeInUp delay={600}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-dev-foreground mb-8 font-mono">
              {'// Also Familiar With'}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs', 'GraphQL',
                'Docker', 'AWS', 'Firebase', 'Vercel', 'Netlify', 'Linux',
                'Responsive Design', 'Mobile-First', 'Performance Optimization',
                'SEO', 'Accessibility', 'Testing', 'Agile', 'Scrum'
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-dev-secondary border border-dev-border rounded-full 
                           text-dev-foreground text-sm hover:border-dev-primary hover:bg-dev-primary/10 
                           transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};