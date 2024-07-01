import React, { useState, useEffect } from 'react';
import { Plus, Minus, Send } from 'lucide-react';

const CreatePage = () => {
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [sequences, setSequences] = useState([{ type: 'human', content: '' }]);
  const [demoScript, setDemoScript] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    // Fetch IP address
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip));
  }, []);

  const addSequence = () => {
    setSequences([...sequences, { type: 'human', content: '' }]);
  };

  const removeSequence = (index) => {
    const newSequences = sequences.filter((_, i) => i !== index);
    setSequences(newSequences);
  };

  const updateSequence = (index, field, value) => {
    const newSequences = [...sequences];
    newSequences[index][field] = value;
    setSequences(newSequences);
  };

  const handleSubmit = () => {
    const framework = {
      authorName,
      authorEmail,
      sequences,
      demoScript,
      ipAddress,
      createdAt: new Date().toISOString()
    };

    // Store locally
    const storedFrameworks = JSON.parse(localStorage.getItem('frameworks') || '[]');
    storedFrameworks.push(framework);
    localStorage.setItem('frameworks', JSON.stringify(storedFrameworks));

    // Reset form
    setAuthorName('');
    setAuthorEmail('');
    setSequences([{ type: 'human', content: '' }]);
    setDemoScript('');

    alert('Framework created and stored successfully!');
  };

  return (
    <div className="flex-grow flex flex-col p-8 overflow-y-auto bg-github-dark text-gray-300">
      <h1 className="text-4xl font-bold mb-8 text-center">Create New Framework</h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-github-dark-secondary rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Author Information</h2>
          <input
            type="text"
            placeholder="Author Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full bg-github-dark text-gray-300 rounded p-2 mb-4"
          />
          <input
            type="email"
            placeholder="Author Email"
            value={authorEmail}
            onChange={(e) => setAuthorEmail(e.target.value)}
            className="w-full bg-github-dark text-gray-300 rounded p-2"
          />
        </div>

        <div className="bg-github-dark-secondary rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Framework Sequences</h2>
          {sequences.map((sequence, index) => (
            <div key={index} className="mb-4 flex items-center">
              <select
                value={sequence.type}
                onChange={(e) => updateSequence(index, 'type', e.target.value)}
                className="bg-github-dark text-gray-300 rounded p-2 mr-2"
              >
                <option value="human">Human</option>
                <option value="ai">AI</option>
              </select>
              <textarea
                value={sequence.content}
                onChange={(e) => updateSequence(index, 'content', e.target.value)}
                placeholder="Sequence content"
                className="flex-grow bg-github-dark text-gray-300 rounded p-2 mr-2"
                rows="3"
              />
              <button onClick={() => removeSequence(index)} className="bg-red-500 text-white p-2 rounded">
                <Minus size={20} />
              </button>
            </div>
          ))}
          <button onClick={addSequence} className="bg-green-500 text-white p-2 rounded mt-2">
            <Plus size={20} />
          </button>
        </div>

        <div className="bg-github-dark-secondary rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Demo Script</h2>
          <textarea
            value={demoScript}
            onChange={(e) => setDemoScript(e.target.value)}
            placeholder="Enter demo script here..."
            className="w-full bg-github-dark text-gray-300 rounded p-2"
            rows="6"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        >
          <Send size={20} className="mr-2" /> Submit Framework
        </button>
      </div>
    </div>
  );
};

export default CreatePage;