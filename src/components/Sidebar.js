import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const repositories = [
  {
    title: 'Service Client',
    items: [
      { name: 'Assistant Virtuel Client', color: 'bg-blue-500', framework: 'chatbot' },
      { name: 'Implémentation RAG', color: 'bg-blue-400', framework: 'rag' },
      { name: 'Analyse de Sentiment des Retours Clients', color: 'bg-blue-300', framework: 'sentiment' },
    ],
  },
  {
    title: 'Marketing',
    items: [
      { name: 'Gestion de Campagne IA', color: 'bg-green-500', framework: 'campaign' },
      { name: 'Optimisation SEO avec NLP', color: 'bg-green-400', framework: 'seo' },
      { name: 'Génération de Contenu Personnalisé', color: 'bg-green-300', framework: 'content' },
    ],
  },
  {
    title: 'Ressources Humaines',
    items: [
      { name: 'Assistant de Recrutement IA', color: 'bg-purple-500', framework: 'recruitment' },
      { name: 'Automatisation de l\'Intégration des Employés', color: 'bg-purple-400', framework: 'onboarding' },
      { name: 'Analyse des Évaluations de Performance', color: 'bg-purple-300', framework: 'performance' },
    ],
  },
  {
    title: 'Finance et Opérations',
    items: [
      { name: 'Prévisions Financières Intelligentes', color: 'bg-yellow-500', framework: 'forecasting' },
      { name: 'Optimisation de la Chaîne d\'Approvisionnement', color: 'bg-yellow-400', framework: 'supply-chain' },
      { name: 'Système de Détection de Fraude', color: 'bg-yellow-300', framework: 'fraud' },
    ],
  },
  {
    title: 'Juridique et Conformité',
    items: [
      { name: 'Automatisation de l\'Analyse des Contrats', color: 'bg-red-500', framework: 'contract' },
      { name: 'Surveillance de la Conformité Réglementaire', color: 'bg-red-400', framework: 'compliance' },
    ],
  },
  {
    title: 'Développement de Produits',
    items: [
      { name: 'Conception de Produits Assistée par IA', color: 'bg-indigo-500', framework: 'product-design' },
      { name: 'Analyse des Retours Clients pour la R&D', color: 'bg-indigo-400', framework: 'feedback-analysis' },
    ],
  },
];

const Sidebar = () => {
  const [expandedCategories, setExpandedCategories] = useState(
    repositories.reduce((acc, repo) => ({ ...acc, [repo.title]: false }), {})
  );

  const toggleCategory = (title) => {
    setExpandedCategories(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside className="w-1/4 overflow-y-auto h-[calc(100vh-64px)] bg-github-dark-secondary border-r border-github-border">
      <h2 className="text-xl font-semibold mb-4 p-4">Référentiel par Thème</h2>
      <ul className="space-y-2">
        {repositories.map((repo, index) => (
          <li key={index} className="px-4">
            <button
              onClick={() => toggleCategory(repo.title)}
              className="w-full flex items-center justify-between text-left font-semibold text-lg py-2 hover:bg-github-dark rounded transition duration-150 ease-in-out"
            >
              {repo.title}
              {expandedCategories[repo.title] ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
            {expandedCategories[repo.title] && (
              <ul className="space-y-2 ml-4 mt-2">
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
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;