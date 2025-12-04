import { useState, useEffect } from 'react'

const HeroTerminal = () => {
  const [text, setText] = useState('')
  const fullText = "> npm install jorge-portfolio\n> Installing dependencies...\n> Found: 1 Developer\n> Skills: React, Node, AI\n> Status: Ready to code_"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(timer)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex justify-center items-center bg-black text-green-500 font-mono p-4">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-8">
        
        <div className="w-full md:w-1/2">
          <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex gap-2 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-2 text-xs text-gray-400">bash — 80x24</div>
            </div>
            <div className="p-6 h-80 md:h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-lg md:text-xl leading-relaxed">
                {text}
                <span className="animate-pulse">_</span>
              </pre>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 blur-xl animate-pulse" />
            <img 
              src="/assets/terminal-face.png" 
              alt="ASCII Portrait" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain relative z-10 mix-blend-screen opacity-90"
            />
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-50" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroTerminal
