import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Dummy data for charts
const barData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
];

const lineData = [
  { name: 'Week 1', value: 4000 },
  { name: 'Week 2', value: 3000 },
  { name: 'Week 3', value: 5000 },
  { name: 'Week 4', value: 2780 },
  { name: 'Week 5', value: 1890 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const ChatbotDemo = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-lg font-semibold mb-4">Démonstration du Chatbot</h3>
    <div className="flex-grow border border-gray-700 rounded-lg p-4 overflow-y-auto mb-4">
      <p className="mb-2"><strong>User:</strong> Bonjour, j'ai une question sur votre produit.</p>
      <p className="mb-2"><strong>Bot:</strong> Bonjour! Je serai ravi de vous aider. Quelle est votre question?</p>
      <p className="mb-2"><strong>User:</strong> Quelles sont les options de livraison disponibles?</p>
      <p className="mb-2"><strong>Bot:</strong> Nous proposons plusieurs options de livraison : standard (3-5 jours ouvrables), express (1-2 jours ouvrables), et le retrait en magasin. Quelle option vous intéresse le plus?</p>
    </div>
    <input type="text" placeholder="Tapez votre message ici..." className="w-full p-2 rounded bg-github-dark border border-gray-700" />
  </div>
);

export const RAGDemo = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-lg font-semibold mb-4">Démonstration RAG</h3>
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border border-gray-700 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Documents Pertinents</h4>
        <ul className="list-disc list-inside">
          <li>Manuel d'utilisation (Score: 0.95)</li>
          <li>FAQ produit (Score: 0.87)</li>
          <li>Guide de dépannage (Score: 0.82)</li>
        </ul>
      </div>
      <div className="border border-gray-700 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Réponse Générée</h4>
        <p>Basé sur les documents pertinents, voici une réponse synthétisée à votre question...</p>
      </div>
    </div>
  </div>
);

export const SentimentDemo = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-lg font-semibold mb-4">Analyse de Sentiment</h3>
    <div className="flex-grow">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const CampaignDemo = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-lg font-semibold mb-4">Gestion de Campagne</h3>
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="bg-github-dark p-4 rounded">
        <h4 className="font-semibold">Campagnes Actives</h4>
        <p className="text-2xl">5</p>
      </div>
      <div className="bg-github-dark p-4 rounded">
        <h4 className="font-semibold">Taux d'Engagement</h4>
        <p className="text-2xl">23.5%</p>
      </div>
      <div className="bg-github-dark p-4 rounded">
        <h4 className="font-semibold">ROI</h4>
        <p className="text-2xl">2.7x</p>
      </div>
    </div>
    <div className="flex-grow">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const SEODemo = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-lg font-semibold mb-4">Optimisation SEO</h3>
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border border-gray-700 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Analyse de Page</h4>
        <ul className="list-disc list-inside">
          <li>Score SEO: 85/100</li>
          <li>Mots-clés manquants: 2</li>
          <li>Liens internes: 7</li>
        </ul>
      </div>
      <div className="border border-gray-700 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Suggestions d'Amélioration</h4>
        <ul className="list-disc list-inside">
          <li>Optimiser le titre de la page</li>
          <li>Ajouter des balises alt aux images</li>
          <li>Améliorer la densité des mots-clés</li>
        </ul>
      </div>
    </div>
  </div>
);

export const ContentDemo = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-lg font-semibold mb-4">Génération de Contenu</h3>
    <div className="flex-grow border border-gray-700 rounded-lg p-4 mb-4 overflow-y-auto">
      <h4 className="font-semibold mb-2">Contenu Généré</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Régénérer
      </button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Appliquer des Ajustements
      </button>
    </div>
  </div>
);

export const RecruitmentDemo = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-lg font-semibold mb-4">Assistant de Recrutement</h3>
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border border-gray-700 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Analyse de CV</h4>
        <ul className="list-disc list-inside">
          <li>Correspondance au poste: 85%</li>
          <li>Compétences clés identifiées: 7/10</li>
          <li>Expérience pertinente: 4 ans</li>
        </ul>
      </div>
      <div className="border border-gray-700 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Suggestions d'Entretien</h4>
        <ul className="list-disc list-inside">
          <li>Approfondir l'expérience en gestion de projet</li>
          <li>Vérifier les connaissances en JavaScript</li>
          <li>Évaluer les compétences en communication</li>
        </ul>
      </div>
    </div>
  </div>
);

export const ForecastingDemo = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-lg font-semibold mb-4">Prévisions Financières</h3>
    <div className="flex-grow">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const ComplianceDemo = () => (
  <div className="h-full flex flex-col">
    <h3 className="text-lg font-semibold mb-4">Surveillance de Conformité</h3>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="bg-github-dark p-4 rounded">
        <h4 className="font-semibold">Score de Conformité</h4>
        <p className="text-2xl">92%</p>
      </div>
      <div className="bg-github-dark p-4 rounded">
        <h4 className="font-semibold">Alertes Actives</h4>
        <p className="text-2xl">3</p>
      </div>
    </div>
    <div className="flex-grow">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);