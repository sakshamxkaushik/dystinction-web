import React, { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, X, HelpCircle, Building, Users, Code, Shield } from "lucide-react";
import { knowledgeBase } from "../knowledgeBase";

// Enhanced answer matching function
function findAnswer(question: string) {
  const q = question.toLowerCase().trim();
  // Direct question match
  let bestMatch = knowledgeBase.find(kb => kb.question.toLowerCase() === q);
  if (bestMatch) return bestMatch;
  // Keyword-based matching with scoring
  const matches = knowledgeBase.map(kb => {
    let score = 0;
    const questionWords = q.split(/\s+/);
    // Check keywords
    kb.keywords.forEach(keyword => {
      if (q.includes(keyword)) {
        score += 3;
      }
    });
    // Check individual words
    questionWords.forEach(word => {
      if (word.length > 2) {
        if (kb.question.toLowerCase().includes(word)) {
          score += 2;
        }
        if (kb.answer.toLowerCase().includes(word)) {
          score += 1;
        }
      }
    });
    return { ...kb, score };
  });
  // Return best match above threshold
  const sorted = matches.sort((a, b) => b.score - a.score);
  if (sorted[0] && sorted[0].score >= 2) {
    return sorted[0];
  }
  // Fallback responses
  const fallbackResponses = [
    "I'd be happy to help! Could you please rephrase your question or ask about our services, technology, location, or company information?",
    "I don't have specific information about that yet. You can ask me about Dystinction Technologies' services, location, team, or any other company-related questions.",
    "That's a great question! While I don't have that exact information, I can tell you about our services, company background, or help you get in touch with our team."
  ];
  return {
    answer: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
    category: "Fallback"
  };
}

type Message = {
  from: "user" | "bot";
  text: string;
  timestamp: Date;
  category?: string;
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "👋 Hi! I'm the Dystinction Technologies assistant. I can help you with questions about our services, company information, technology expertise, and more. What would you like to know?",
      timestamp: new Date(),
      category: "Intro"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      from: "user",
      text: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const response = findAnswer(input);
      const botMsg: Message = {
        from: "bot",
        text: response.answer,
        category: response.category,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const quickActions = [
    { icon: Building, text: "Our Services", query: "What services do you offer?" },
    { icon: Users, text: "About Us", query: "What does Dystinction Technologies do?" },
    { icon: Code, text: "Technology", query: "What technologies do you work with?" },
    { icon: Shield, text: "Security", query: "Do you offer cybersecurity services?" }
  ];

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        aria-label="Open chatbot"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 w-full sm:bottom-6 sm:right-6 sm:w-96 bg-white rounded-none sm:rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden animate-fade-in-up transition-all duration-500">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-fade-in">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Dystinction Bot</h3>
            <p className="text-xs opacity-90">Always here to help</p>
          </div>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
          aria-label="Close chatbot"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 bg-gray-50">
        {messages.length === 1 && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInput(action.query);
                    setTimeout(() => sendMessage(), 100);
                  }}
                  className="flex items-center space-x-2 p-2 bg-white rounded-lg border hover:bg-blue-50 hover:border-blue-200 transition-colors text-xs"
                >
                  <action.icon className="w-3 h-3 text-blue-600" />
                  <span className="text-gray-700">{action.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex mb-3 ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs px-4 py-2 rounded-2xl ${
              msg.from === "user"
                ? "bg-blue-600 text-white rounded-br-sm"
                : "bg-white text-gray-800 shadow-sm border rounded-bl-sm"
            }`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
              {msg.category && msg.category !== "Fallback" && (
                <p className="text-xs opacity-70 mt-1">#{msg.category}</p>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start mb-3">
            <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm border">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <div className="p-4 bg-white border-t">
        <div className="flex space-x-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            placeholder="Ask about our services, technology, or company..."
            disabled={isTyping}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isTyping}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Powered by Dystinction Technologies
        </p>
      </div>
    </div>
  );
};

export default Chatbot;

