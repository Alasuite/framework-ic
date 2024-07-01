import React, { useState, useEffect, useRef } from 'react';
import { Send, Zap, Search } from 'lucide-react';

// Mock LLM function (replace with actual API call in production)
const mockLLM = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        answer: `Here are some frameworks that might be relevant to "${query}":`,
        frameworks: [
          { name: "AI-Powered Customer Service", relevance: 0.95 },
          { name: "Agile Framework for ML Projects", relevance: 0.87 },
          { name: "Ethical AI Development Process", relevance: 0.82 },
          { name: "Data-Driven Decision Making", relevance: 0.78 },
          { name: "Continuous Learning AI Systems", relevance: 0.75 },
        ]
      });
    }, 1000);
  });
};

const ExplorePage = () => {
  const [query, setQuery] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setConversation(prev => [...prev, { type: 'user', content: query }]);
    setIsLoading(true);

    try {
      const result = await mockLLM(query);
      setConversation(prev => [
        ...prev,
        { type: 'assistant', content: result.answer, frameworks: result.frameworks }
      ]);
    } catch (error) {
      console.error('Error:', error);
      setConversation(prev => [...prev, { type: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
      setQuery('');
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  return (
    <div className="flex-grow flex flex-col p-8 bg-github-dark text-gray-300">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Frameworks</h1>
      
      <div className="flex-grow flex space-x-8">
        {/* Chat Interface */}
        <div className="w-1/2 flex flex-col bg-github-dark-secondary rounded-lg p-6">
          <div className="flex-grow overflow-y-auto mb-4 space-y-4">
            {conversation.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-3/4 p-3 rounded-lg ${message.type === 'user' ? 'bg-blue-600' : 'bg-gray-700'}`}>
                  <p>{message.content}</p>
                  {message.frameworks && (
                    <ul className="mt-2 space-y-1">
                      {message.frameworks.map((fw, idx) => (
                        <li key={idx} className="flex items-center">
                          <Zap size={16} className="mr-2 text-yellow-400" />
                          {fw.name} - Relevance: {(fw.relevance * 100).toFixed(0)}%
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 p-3 rounded-lg">
                  <p>Thinking...</p>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about frameworks..."
              className="flex-grow bg-github-dark text-gray-300 rounded-l p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 transition duration-200"
              disabled={isLoading}
            >
              <Send size={20} />
            </button>
          </form>
        </div>
        
        {/* Visual Framework Explorer */}
        <div className="w-1/2 bg-github-dark-secondary rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Framework Explorer</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search frameworks..."
              className="w-full bg-github-dark text-gray-300 rounded p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          </div>
          <div className="mt-6 space-y-4">
            {conversation.length > 0 && conversation[conversation.length - 1].frameworks && (
              conversation[conversation.length - 1].frameworks.map((fw, idx) => (
                <div key={idx} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-200 cursor-pointer">
                  <h3 className="text-lg font-semibold">{fw.name}</h3>
                  <div className="mt-2 bg-gray-900 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${fw.relevance * 100}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-sm text-gray-400">Relevance: {(fw.relevance * 100).toFixed(0)}%</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;