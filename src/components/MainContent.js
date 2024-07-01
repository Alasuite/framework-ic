import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FrameworkSteps from './FrameworkSteps';
import {
  ChatbotDemo,
  RAGDemo,
  SentimentDemo,
  CampaignDemo,
  SEODemo,
  ContentDemo,
  RecruitmentDemo,
  ForecastingDemo,
  ComplianceDemo
} from './DemoComponents';

const MainContent = () => {
  const { framework } = useParams();
  const currentFramework = framework || 'chatbot';
  const [showDemo, setShowDemo] = useState(false);

  console.log('MainContent rendering for framework:', currentFramework);

  const renderDemo = () => {
    switch (currentFramework) {
      case 'chatbot':
        return <ChatbotDemo />;
      case 'rag':
        return <RAGDemo />;
      case 'sentiment':
        return <SentimentDemo />;
      case 'campaign':
        return <CampaignDemo />;
      case 'seo':
        return <SEODemo />;
      case 'content':
        return <ContentDemo />;
      case 'recruitment':
        return <RecruitmentDemo />;
      case 'forecasting':
        return <ForecastingDemo />;
      case 'compliance':
        return <ComplianceDemo />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-grow flex flex-col p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Customer Service</h1>
        <button
          onClick={() => setShowDemo(!showDemo)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showDemo ? 'Hide Demo' : 'Show Demo'}
        </button>
      </div>
      
      {showDemo && (
        <div className="bg-github-dark-secondary border border-github-border rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Demo</h2>
          <div className="h-[300px]">
            {renderDemo()}
          </div>
        </div>
      )}
      
      <div className="bg-github-dark-secondary border border-github-border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Framework : {currentFramework}</h2>
        <h3 className="text-l font-semibold mb-4">Durée estimée : 10h</h3>
        <FrameworkSteps framework={currentFramework} />
      </div>
    </div>
  );
};

export default MainContent;