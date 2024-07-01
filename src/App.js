import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import VisionPage from './components/VisionPage';
import CreatePage from './components/CreatePage';
import ExplorePage from './components/ExplorePage';
import Footer from './components/Footer';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Router>
      <div className="bg-github-dark text-gray-300 min-h-screen flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-grow flex">
          {showSidebar && <Sidebar />}
          <div className={`flex-grow ${showSidebar ? 'w-3/4' : 'w-full'}`}>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/framework/:framework" element={<MainContent />} />
              <Route path="/vision" element={<VisionPage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/explore" element={<ExplorePage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;