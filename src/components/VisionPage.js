import React from 'react';
import { Lightbulb, Users, Zap, Brain, Sparkles } from 'lucide-react';

const VisionPage = () => {
  return (
    <div className="flex-grow flex flex-col p-8 overflow-y-auto bg-github-dark text-gray-300">
      <h1 className="text-4xl font-bold mb-8 text-center">Notre Vision</h1>
      
      <div className="max-w-3xl mx-auto space-y-12">
        <section className="bg-github-dark-secondary rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Lightbulb className="mr-2" /> Appel aux Créateurs et Inventeurs
          </h2>
          <p className="mb-4">
            Nous lançons un appel à tous les inventeurs, créateurs et génies pour venir contribuer à nos frameworks et résoudre ensemble les problèmes les plus urgents de notre époque.
          </p>
          <p>
            Notre plateforme est conçue pour catalyser l'innovation collective et transformer les idées en solutions concrètes.
          </p>
        </section>

        <section className="bg-github-dark-secondary rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Zap className="mr-2" /> La Puissance des Frameworks
          </h2>
          <p className="mb-4">
            "You can prompt the execution. You can't prompt the thinking."
          </p>
          <p>
            Nos frameworks sont conçus pour faciliter l'exécution d'idées déjà mûries. Cette approche permet une mise en œuvre rapide et efficace des innovations.
          </p>
        </section>

        <section className="bg-github-dark-secondary rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Users className="mr-2" /> Synergie Homme-Machine
          </h2>
          <p className="mb-4">
            Plutôt que de transformer les humains en simples orchestrateurs d'agents IA, notre vision est de concevoir le bon séquençage entre l'humain et la machine pour tirer le meilleur parti de leurs synergies.
          </p>
          <p>
            Nous croyons en la préservation de l'expertise humaine et en la propagation de la singularité humaine dans le système, tout en gardant le dernier mot.
          </p>
        </section>

        <section className="bg-github-dark-secondary rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Brain className="mr-2" /> Approche Humaniste et Pragmatique
          </h2>
          <p>
            Notre philosophie repose sur une approche humaniste et pragmatique de la technologie. Nous visons à développer des solutions qui augmentent les capacités humaines plutôt que de les remplacer, en mettant l'accent sur l'éthique et le progrès social.
          </p>
        </section>

        <section className="bg-github-dark-secondary rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Sparkles className="mr-2" /> Rejoignez-nous
          </h2>
          <p>
            Ensemble, nous pouvons façonner un avenir où la technologie amplifie notre créativité, notre empathie et notre intelligence collective. Rejoignez-nous dans cette aventure pour construire un monde meilleur, une innovation à la fois.
          </p>
        </section>
      </div>
    </div>
  );
};

export default VisionPage;