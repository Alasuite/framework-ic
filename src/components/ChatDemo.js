import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

const initialConversation = [
  { role: 'user', content: "Bonjour, je cherche des informations sur vos modèles de machines à laver." },
  { role: 'bot', content: "Bonjour ! Je serai ravi de vous aider à trouver des informations sur nos machines à laver. Nous avons plusieurs modèles disponibles. Pouvez-vous me dire si vous recherchez un modèle particulier ou si vous avez des besoins spécifiques ?" },
  { role: 'user', content: "Je cherche un modèle économe en énergie avec une grande capacité." },
  { role: 'bot', content: "Excellent choix ! D'après notre catalogue interne (réf. CAT2023-ML), je peux vous recommander le modèle EcoWash Pro 9000. Il a une capacité de 9 kg et une classification énergétique A+++. Selon nos données techniques (réf. TECH-EW9000), il consomme seulement 49 kWh/100 cycles, ce qui en fait l'un de nos modèles les plus économes." },
  { role: 'user', content: "Ça a l'air intéressant. Quelles sont ses fonctionnalités principales ?" },
  { role: 'bot', content: "Le EcoWash Pro 9000 est effectivement un excellent choix. Voici ses principales fonctionnalités, listées dans notre fiche produit (réf. FP-EW9000-2023) :\n\n1. Technologie InverterDrive pour une efficacité énergétique maximale\n2. 14 programmes de lavage, dont un cycle rapide de 15 minutes\n3. Fonction vapeur pour éliminer les allergènes et rafraîchir les vêtements\n4. Connectivité Wi-Fi pour contrôle à distance via smartphone\n5. Système anti-vibrations pour un fonctionnement silencieux (max 72 dB)\n\nDe plus, notre guide d'utilisation (réf. GU-EW9000-FR) mentionne une garantie de 10 ans sur le moteur." },
  { role: 'user', content: "C'est vraiment complet. Quel est son prix et est-ce qu'il y a des promotions en cours ?" },
  { role: 'bot', content: "Je suis ravi que ce modèle vous intéresse. Selon notre liste de prix actuelle (réf. PRIX-2023-T2), le EcoWash Pro 9000 est normalement vendu à 899€. Cependant, je vois dans notre catalogue de promotions en cours (réf. PROMO-ETE2023) qu'il y a actuellement une offre spéciale : une réduction de 15% sur ce modèle, ce qui ramène son prix à 764,15€. Cette promotion est valable jusqu'à la fin du mois." },
  { role: 'user', content: "Super ! Est-ce que la livraison est incluse ?" },
  { role: 'bot', content: "Absolument ! Selon notre politique de livraison (réf. LIV-POL-2023), la livraison est gratuite pour tous les gros électroménagers, y compris le EcoWash Pro 9000. De plus, notre service client (réf. SC-INFO-2023) propose également une installation gratuite et une reprise de votre ancien appareil si vous le souhaitez. Voulez-vous que je vous donne plus d'informations sur ces services ?" },
  { role: 'user', content: "Non merci, c'est parfait. Je vais réfléchir à tout ça." },
  { role: 'bot', content: "Je comprends tout à fait. Merci d'avoir pris le temps de vous renseigner sur notre EcoWash Pro 9000. N'hésitez pas à revenir vers nous si vous avez d'autres questions. Vous pouvez également consulter notre catalogue en ligne (réf. CAT-EN-LIGNE-2023) pour plus de détails sur ce modèle et d'autres options. Bonne journée et au plaisir de vous aider à nouveau !" }
];

const ChatDemo = () => {
  const [messages, setMessages] = useState(initialConversation);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }]);
      setInput('');
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', content: "Je suis désolé, mais je suis une démonstration limitée. Pour une vraie conversation, veuillez implémenter le framework complet." }]);
      }, 1000);
    }
  };

  return (
    <div>
      <div ref={chatRef} className="bg-github-dark border border-github-border rounded-lg p-4 h-80 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : ''}`}>
            <span className={`inline-block px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-600' : 'bg-github-border'}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-grow bg-github-dark border border-github-border rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Posez votre question..."
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white px-4 py-2 rounded-r hover:bg-green-700 transition flex items-center"
        >
          <Send size={20} className="mr-2" /> Envoyer
        </button>
      </div>
    </div>
  );
};

export default ChatDemo;