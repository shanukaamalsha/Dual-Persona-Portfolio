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
Hey there! 👋 I'm a Computer Science student with a passion for turning ideas into digital reality. 
I live in that sweet spot where code meets creativity - building websites that actually work AND look fire 🔥

> ls skills/
frontend/ backend/ design/ problem-solving/

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
    <div className="bg-dev-card border border-dev-border rounded-lg p-6 font-mono text-sm dev-border-glow">
      <div className="flex items-center gap-2 mb-4 text-dev-primary">
        <Terminal className="w-4 h-4" />
        <span>shanuka@portfolio:~$</span>
      </div>
      <pre className="text-dev-foreground whitespace-pre-wrap leading-relaxed">
        {text}
        {showCursor && <span className="bg-dev-terminal">|</span>}
      </pre>
    </div>
  );
};