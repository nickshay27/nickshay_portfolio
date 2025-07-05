import React, { useState, useEffect, useRef } from 'react';
import { Bot, Sparkles } from 'lucide-react';
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
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

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
      const res = await axios.post('https://portfolio-backend-zcyu.onrender.com/api/chat', {
        message: input,
      });

      const reply = res.data.reply || "🤖 Sorry, I couldn't understand that.";
      const botMsg = { from: 'bot', text: reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("API Error:", err);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: '❌ Sorry, something went wrong. Please try again later.' },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const showOptions = () => (
    <div className="flex flex-wrap justify-center gap-3 px-4 py-3 border-t border-cyan-700 bg-[#1b222d]">
      {['Email', 'Contact Number', 'WhatsApp', 'Instagram', 'LinkedIn'].map((option, i) => (
        <button
          key={i}
          onClick={() => handleQuickOption(option)}
          className="text-sm bg-cyan-400 text-black rounded-full px-5 py-2 font-semibold shadow hover:scale-105 transition-all hover:shadow-lg"
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 text-white">
      {open ? (
        <div className="w-[420px] h-[580px] bg-[#232b38] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-cyan-500 backdrop-blur-md animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00D8FF] to-cyan-400 text-black font-bold flex justify-between items-center px-5 py-4 text-lg">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 animate-bounce" />
              <span>NickBot Assistant</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-lg font-bold hover:text-red-600">✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 px-5 py-4 overflow-y-auto space-y-4 text-base custom-scroll">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.from === 'bot' && <Bot className="w-5 h-5 text-[#00D8FF] mt-1" />}
                <div
                  className={`p-4 rounded-2xl max-w-[75%] whitespace-pre-line ${
                    msg.from === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-700 text-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Bot className="w-4 h-4 text-[#00D8FF]" />
                <span className="italic animate-pulse">Typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick options */}
          {showOptions()}

          {/* Input area */}
          <div className="flex border-t border-cyan-700 p-3 bg-[#1e2530]">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 bg-[#1e2530] border border-cyan-700 rounded-l-xl px-4 py-2 text-base text-white placeholder-gray-400 outline-none"
              placeholder="Ask me something..."
            />
            <button
              onClick={sendMessage}
              className="bg-[#00D8FF] text-black px-6 rounded-r-xl font-semibold hover:brightness-110 transition-all"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-16 h-16 bg-gradient-to-r from-[#00D8FF] to-cyan-400 text-black rounded-full text-3xl shadow-lg hover:scale-110 transition-all animate-pop"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default ChatBot;
