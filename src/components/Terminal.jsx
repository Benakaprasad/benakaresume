import { useState, useRef, useEffect } from 'react';

const Terminal = ({ onComplete }) => {
  const [input, setInput] = useState('');
  const [lines, setLines] = useState([
    '╔══════════════════════════════════════════════════════════╗',
    '║         🦉 OWL MAIL DELIVERY SYSTEM v2.0.0               ║',
    '║         A letter has arrived for you...                  ║',
    '╚══════════════════════════════════════════════════════════╝',
    '',
    '> You have received a sealed envelope.',
    '> To open and view the contents, type "start" and press Enter.',
    '',
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;

    const command = input.trim().toLowerCase();
    setLines(prev => [...prev, `> ${input}`]);
    setInput('');

    if (command === 'start') {
      setIsLoading(true);
      const loadingMessages = [
        { text: '📜 Breaking the wax seal...', delay: 400 },
        { text: '📂 Unfolding the parchment...', delay: 800 },
        { text: '🔍 Connecting to resume database...', delay: 1200 },
        { text: '📥 Fetching resume.scroll...', delay: 1600 },
        { text: '✨ Decrypting professional data...', delay: 2000 },
        { text: '📖 Rendering portfolio contents...', delay: 2400 },
        { text: '', delay: 2600 },
        { text: '═══════════════════════════════════════', delay: 2800 },
        { text: '✅ SUCCESS! Opening portfolio...', delay: 3000 },
        { text: '═══════════════════════════════════════', delay: 3200 },
      ];

      loadingMessages.forEach(({ text, delay }) => {
        setTimeout(() => {
          setLines(prev => [...prev, text]);
        }, delay);
      });

      setTimeout(() => {
        onComplete();
      }, 3800);
    } else if (command === 'help') {
      setLines(prev => [
        ...prev,
        '',
        '📖 Available commands:',
        '   start  - Open the portfolio',
        '   help   - Show this help message',
        '   clear  - Clear the terminal',
        '',
      ]);
    } else if (command === 'clear') {
      setLines([]);
    } else {
      setLines(prev => [
        ...prev,
        `❌ Command not recognized: "${input}"`,
        '💡 Type "start" to open the portfolio or "help" for more commands.',
        '',
      ]);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="bg-terminal-bg rounded-2xl overflow-hidden shadow-2xl terminal-glow border border-terminal-border/30">
        {/* Terminal header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-4 text-slate-400 text-sm font-mono">owl-mail-terminal</span>
        </div>

        {/* Terminal content */}
        <div 
          ref={containerRef}
          className="p-4 md:p-6 h-80 md:h-96 overflow-y-auto font-mono text-xs md:text-sm leading-relaxed"
        >
          {lines.map((line, index) => (
            <div 
              key={index} 
              className={`text-terminal-text ${line.startsWith('❌') ? 'text-red-400' : ''} ${line.startsWith('✅') ? 'text-green-400' : ''}`}
            >
              {line || '\u00A0'}
            </div>
          ))}
          
          {!isLoading && (
            <form onSubmit={handleSubmit} className="flex items-center mt-2">
              <span className="text-terminal-text mr-2">{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-terminal-text outline-none caret-terminal-text font-mono"
                disabled={isLoading}
                autoComplete="off"
                spellCheck={false}
              />
              <span className="text-terminal-text animate-pulse">█</span>
            </form>
          )}
        </div>
      </div>
      
      <p className="text-center mt-4 text-muted-foreground text-sm">
        Type <code className="bg-muted px-2 py-1 rounded text-primary font-mono">start</code> to begin
      </p>
    </div>
  );
};

export default Terminal;
