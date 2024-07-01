import React from 'react';
import { Link } from 'react-router-dom';

const repositories = [
  {
    title: 'Customer Service',
    items: [
      { name: 'Chatbot Service Client', color: 'bg-blue-500', framework: 'chatbot' },
      { name: 'RAG Implementation', color: 'bg-blue-400', framework: 'rag' },
      { name: 'Sentiment Analysis for Customer Feedback', color: 'bg-blue-300', framework: 'sentiment' },
    ],
  },
  {
    title: 'Marketing',
    items: [
      { name: 'Campaign Management AI', color: 'bg-green-500', framework: 'campaign' },
      { name: 'SEO Optimization with NLP', color: 'bg-green-400', framework: 'seo' },
      { name: 'Personalized Content Generation', color: 'bg-green-300', framework: 'content' },
    ],
  },
  {
    title: 'Human Resources',
    items: [
      { name: 'AI-Powered Recruitment Assistant', color: 'bg-purple-500', framework: 'recruitment' },
      { name: 'Employee Onboarding Automation', color: 'bg-purple-400', framework: 'onboarding' },
      { name: 'Performance Review Analysis', color: 'bg-purple-300', framework: 'performance' },
    ],
  },
  {
    title: 'Finance & Operations',
    items: [
      { name: 'Intelligent Financial Forecasting', color: 'bg-yellow-500', framework: 'forecasting' },
      { name: 'Supply Chain Optimization', color: 'bg-yellow-400', framework: 'supply-chain' },
      { name: 'Fraud Detection System', color: 'bg-yellow-300', framework: 'fraud' },
    ],
  },
  {
    title: 'Legal & Compliance',
    items: [
      { name: 'Contract Analysis Automation', color: 'bg-red-500', framework: 'contract' },
      { name: 'Regulatory Compliance Monitor', color: 'bg-red-400', framework: 'compliance' },
    ],
  },
  {
    title: 'Product Development',
    items: [
      { name: 'AI-Assisted Product Design', color: 'bg-indigo-500', framework: 'product-design' },
      { name: 'Customer Feedback Analysis for R&D', color: 'bg-indigo-400', framework: 'feedback-analysis' },
    ],
  },
];

const Sidebar = () => {
    return (
      <aside className="w-1/4 overflow-y-auto h-[calc(100vh-64px)] bg-github-dark-secondary border-r border-github-border">
        <h2 className="text-xl font-semibold mb-4 p-4">Repositories by Theme</h2>
        <ul className="space-y-4">
          {repositories.map((repo, index) => (
            <li key={index} className="px-4">
              <h3 className="font-semibold text-lg mb-2">{repo.title}</h3>
              <ul className="space-y-2">
                {repo.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={`/framework/${item.framework}`}
                      className="flex items-center text-sm hover:bg-github-dark p-2 rounded transition duration-150 ease-in-out"
                    >
                      <span className={`w-3 h-3 rounded-full ${item.color} mr-2`}></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;