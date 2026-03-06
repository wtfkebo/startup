import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m Lumina\'s AI assistant. How can I help you with your web project today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: `You are a helpful assistant for Lumina Web Studio. 
            Lumina builds premium websites for local businesses.
            Pricing tiers: Basic ($3,999), Professional ($7,999), Enterprise ($11,999).
            Services: Custom Web Design, SEO, E-commerce, Branding.
            Current user message: ${userMessage}` }]
          }
        ],
        config: {
          systemInstruction: "Keep responses professional, concise, and focused on Lumina Web Studio's services. Encourage users to book a consultation."
        }
      });

      const botText = response.text || "I'm sorry, I'm having trouble connecting. Please try again later.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having a technical moment. Feel free to email us directly at hello@lumina.studio!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="chat-window"
          >
            <div className="chat-header">
              <div className="flex items-center gap-2">
                <Bot size={20} className="text-studio-gold" />
                <span className="font-serif font-bold">Lumina Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-studio-gold transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="chat-messages" ref={scrollRef}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`message-bubble ${msg.role === 'user' ? 'message-user' : 'message-bot'}`}>
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="message-bubble message-bot flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  <span>Thinking...</span>
                </div>
              )}
            </div>

            <div className="chat-input-area">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-grow bg-studio-ink/5 dark:bg-white/5 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-studio-gold outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-studio-ink text-white rounded-xl hover:bg-studio-gold transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-studio-ink text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-studio-gold transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
