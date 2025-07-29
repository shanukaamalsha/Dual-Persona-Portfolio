import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

interface TerminalComponentProps {
  isVisible: boolean;
}

export const TerminalComponent = ({ isVisible }: TerminalComponentProps) => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = `> whoami
Shanuka - Frontend Developer & Digital Creative

> cat about.txt
Hello! 👋 I’m Shanuka, a Computer Science student passionate about combining analytical thinking with creative problem-solving.
I design and develop responsive, user-centric websites that go beyond functionality to deliver exceptional user experiences.
With a focus on clean, maintainable code and attention to detail, I strive to transform innovative ideas into impactful digital solutions.

> ls skills/
frontend/ backend/ ui-ux/ problem-solving/ teamwork/

> echo "Let's build something amazing together!"
Let's build something amazing together!

> _`;

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-dev-card border border-dev-border rounded-lg p-6 font-mono text-sm dev-border-glow min-h-[320px]">
      {/* Terminal window control dots */}
      <div className="absolute top-4 left-4 flex gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500 shadow-md"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-md"></span>
        <span className="w-3 h-3 rounded-full bg-green-500 shadow-md"></span>
      </div>

      {/* Terminal prompt line */}
      <div className="flex items-center gap-2 mb-4 text-dev-primary pt-6">
        <Terminal className="w-4 h-4" />
        <span>shanuka@portfolio:~$</span>
      </div>

      {/* Animated terminal text */}
      <pre className="text-dev-foreground whitespace-pre-wrap leading-relaxed">
        {text}
        {showCursor && <span className="bg-dev-terminal">|</span>}
      </pre>
    </div>
  );
};
