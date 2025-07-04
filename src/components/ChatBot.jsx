import React, { useState, useEffect } from 'react';
import { Bot, User, Sparkles } from 'lucide-react';
import axios from 'axios';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatHistory');
    return saved
      ? JSON.parse(saved)
      : [
          { from: 'bot', text: '✨ Hello! I’m your personal assistant NickBot.\nWelcome to BuiltByNick 💙' },
          { from: 'bot', text: 'Ask me anything or try one of the quick options below.' }
        ];
  });
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes('contact') || text.includes('phone') || text.includes('number')) {
      return '📞 Contact me at: +91-9131329675';
    } else if (text.includes('email')) {
      return '📧 My email is: nickshaychouhan2701@gmail.com';
    } else if (text.includes('whatsapp')) {
      return '💬 Chat on WhatsApp: https://wa.me/9131329675';
    } else if (text.includes('instagram') || text.includes('insta')) {
      return '📸 Instagram: https://www.instagram.com/nickshay__01';
    } else if (text.includes('linkedin')) {
      return '💼 LinkedIn: https://linkedin.com/in/nickshay';
    } else {
      return "🤖 Thanks for asking! I’ll get back to you soon 😊";
    }
  };

  const handleQuickOption = (text) => {
    const userMsg = { from: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);
    setTimeout(() => {
      const botMsg = { from: 'bot', text: getBotReply(text) };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 1200);
  };

  const sendMessage = async () => {
  if (!input.trim()) return;

  const userMsg = { from: 'user', text: input };
  setMessages((prev) => [...prev, userMsg]);
  setInput('');
  setTyping(true);

  try {
    // const res = await axios.post(
    //   'https://api.openai.com/v1/chat/completions',
    //   {
    //     model: 'gpt-3.5-turbo',
    //     messages: [
    //       { role: 'system', content: 'You are a helpful portfolio assistant for a web developer named Nickshay Chouhan.' },
    //       { role: 'user', content: input }
    //     ]
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    //   }
    // );

    const reply = res.data.choices[0].message.content.trim();
    const botMsg = { from: 'bot', text: reply };
    setMessages((prev) => [...prev, botMsg]);
  } catch (err) {
    console.error('OpenAI API Error:', err);
    setMessages((prev) => [...prev, { from: 'bot', text: "❌ Sorry, something went wrong. Please try again later." }]);
  } finally {
    setTyping(false);
  }
};


  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  const showOptions = () => (
    <div className="flex flex-wrap justify-center gap-2 px-3 py-3 border-t border-cyan-700 bg-[#1b222d]">
      {['Email', 'Contact Number', 'WhatsApp', 'Instagram', 'LinkedIn'].map((option, i) => (
        <button
          key={i}
          onClick={() => handleQuickOption(option)}
          className="text-xs bg-gradient-to-r from-[#00D8FF] to-cyan-400 text-black rounded-full px-4 py-1 font-semibold shadow hover:scale-105 transition"
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 text-white">
      {open ? (
        <div className="w-[370px] h-[500px] bg-[#232b38] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#00D8FF]/30 backdrop-blur-md">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00D8FF] to-cyan-400 text-black font-bold flex justify-between items-center px-4 py-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 animate-bounce" />
              <span>NickBot Assistant</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-lg font-bold">✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm custom-scroll">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.from === 'bot' && <Bot className="w-5 h-5 text-[#00D8FF] mt-1" />}
                <div
                  className={`p-3 rounded-xl max-w-[75%] whitespace-pre-line ${
                    msg.from === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Bot className="w-4 h-4 text-[#00D8FF]" />
                <span className="italic animate-pulse">Typing...</span>
              </div>
            )}
          </div>

          {/* Quick options */}
          {showOptions()}

          {/* Input area */}
          <div className="flex border-t border-cyan-700 p-2 bg-[#1e2530]">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 bg-[#1e2530] border border-cyan-700 rounded-l-md px-3 text-sm outline-none text-white placeholder-gray-400"
              placeholder="Ask me something..."
            />
            <button
              onClick={sendMessage}
              className="bg-[#00D8FF] text-black px-4 rounded-r-md font-semibold hover:brightness-110"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-16 h-16 bg-gradient-to-r from-[#00D8FF] to-cyan-400 text-black rounded-full text-2xl shadow-lg hover:scale-110 transition-all"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default ChatBot;
