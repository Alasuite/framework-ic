import React from 'react';
import { Clipboard } from 'lucide-react';

const frameworkSteps = {
  chatbot: [
    {
      title: "Configuration (IA)",
      type: "ai",
      content: `"En tant qu'assistant IA spécialisé dans le traitement du langage naturel, générez le code Python nécessaire pour configurer un environnement de travail pour un chatbot utilisant RAG. Incluez l'importation des bibliothèques nécessaires, la configuration de l'API OpenAI, et le chargement d'un ensemble de documents à partir d'un fichier CSV. Assurez-vous que le code soit efficace et suive les meilleures pratiques de programmation Python."`
    },
    {
      title: "Préparation (Humain)",
      type: "human",
      content: `1. Nettoyage des documents :
   - Utilisez votre jugement critique pour identifier et supprimer les informations non pertinentes ou obsolètes.
   - Reformulez les passages ambigus pour améliorer la clarté, en vous basant sur votre compréhension du contexte de l'entreprise.

2. Préparation du dataset Q&A :
   - Faites appel à votre empathie et votre expérience client pour anticiper les questions les plus pertinentes.
   - Créez des paires question-réponse qui reflètent le langage naturel et les préoccupations réelles des clients.

3. Structuration pour le RAG :
   - Utilisez votre capacité d'organisation pour créer une structure logique et intuitive des documents.
   - Ajoutez des métadonnées pertinentes basées sur votre connaissance approfondie du domaine.

Conseil : Votre compréhension nuancée du contexte de l'entreprise et des besoins des clients est cruciale pour créer une base de connaissances vraiment utile et pertinente.`
    },
    {
      title: "Implémentation du RAG (IA)",
      type: "ai",
      content: `"En tant qu'expert en IA spécialisé dans les systèmes RAG, générez une fonction Python 'rag_response' qui prend en entrée une requête utilisateur et un ensemble de documents. Cette fonction doit :
1. Récupérer les documents pertinents en fonction de la requête.
2. Utiliser l'API OpenAI pour générer une réponse basée sur le contexte fourni par ces documents.
3. Inclure des commentaires expliquant chaque étape du processus.
Assurez-vous que le code soit efficace, robuste et facilement adaptable."`
    },
    {
      title: "Fine-tuning (Humain)",
      type: "human",
      content: `1. Préparation des données de fine-tuning :
   - Utilisez votre expertise métier pour sélectionner les exemples les plus représentatifs et instructifs.
   - Assurez-vous que les données couvrent une large gamme de scénarios, en vous basant sur votre connaissance des cas d'utilisation réels.

2. Division des données :
   - Appliquez votre compréhension statistique pour créer des ensembles d'entraînement et de validation équilibrés et représentatifs.
   - Utilisez votre intuition pour inclure des cas particuliers ou des scénarios complexes dans l'ensemble de validation.

3. Ajustement des hyperparamètres :
   - Faites appel à votre expérience et à votre intuition pour choisir les hyperparamètres initiaux.
   - Analysez les résultats des tests avec un œil critique, en cherchant des modèles subtils que l'IA pourrait manquer.

Conseil : Votre capacité à interpréter les nuances du langage et à comprendre les subtilités des interactions client-entreprise est essentielle pour un fine-tuning efficace.`
    },
    {
      title: "Déploiement du chatbot (IA)",
      type: "ai",
      content: `"En tant qu'ingénieur IA spécialisé dans le déploiement de chatbots, générez un code Python pour un chatbot qui :
1. Utilise la fonction rag_response pour les requêtes générales.
2. Utilise une fonction fine_tuned_response pour les requêtes spécifiques.
3. Inclut une boucle principale pour interagir avec l'utilisateur.
4. Gère gracieusement les erreurs et les cas limites.
5. Inclut des commentaires détaillés expliquant la logique et le flux du programme.
Assurez-vous que le code soit modulaire, efficace et facile à maintenir."`
    }
  ],
  rag: [
    {
      title: "Collecte de données (Humain)",
      type: "human",
      content: `1. Identifiez les sources de données pertinentes pour votre domaine d'application.
2. Collectez et organisez les documents, articles, FAQ, et autres ressources textuelles.
3. Assurez-vous de la qualité et de la pertinence des données collectées.
4. Respectez les droits d'auteur et les licences des contenus utilisés.`
    },
    {
      title: "Prétraitement des données (IA)",
      type: "ai",
      content: `"Générez un script Python pour le prétraitement des données textuelles :
1. Nettoyage du texte (suppression des caractères spéciaux, normalisation)
2. Tokenisation et lemmatisation
3. Suppression des mots vides (stop words)
4. Création d'embeddings pour chaque document ou passage
Assurez-vous que le script soit efficace pour traiter de grands volumes de données."`
    },
    {
      title: "Conception de l'index (Humain)",
      type: "human",
      content: `1. Choisissez une structure d'index appropriée (par exemple, FAISS, Elasticsearch).
2. Définissez la granularité des passages (paragraphes, phrases, etc.).
3. Déterminez les métadonnées à inclure pour chaque passage.
4. Concevez une stratégie de mise à jour de l'index pour maintenir les informations à jour.`
    },
    {
      title: "Implémentation du moteur de recherche (IA)",
      type: "ai",
      content: `"Créez une fonction Python 'search_engine' qui :
1. Prend une requête utilisateur en entrée.
2. Convertit la requête en embedding.
3. Effectue une recherche de similarité dans l'index.
4. Retourne les passages les plus pertinents avec leurs scores de similarité.
Optimisez la fonction pour la rapidité et la précision."`
    },
    {
      title: "Intégration avec le modèle de langage (Humain)",
      type: "human",
      content: `1. Choisissez un modèle de langage approprié (par exemple, GPT-3, GPT-4).
2. Concevez un prompt template qui inclut la requête et les passages récupérés.
3. Implémentez une logique pour filtrer et ordonner les réponses du modèle.
4. Mettez en place un système de logging pour suivre les performances et améliorer continuellement le système.`
    }
  ],
  sentiment: [
    {
      title: "Collecte des données (Humain)",
      type: "human",
      content: `1. Identifiez les sources de feedback client (enquêtes, réseaux sociaux, emails, etc.).
2. Mettez en place un système de collecte automatisée des données.
3. Assurez-vous de respecter les règles de confidentialité et de protection des données.
4. Créez un échantillon diversifié pour l'entraînement et le test du modèle.`
    },
    {
      title: "Prétraitement des données (IA)",
      type: "ai",
      content: `"Créez un script Python pour le prétraitement des données textuelles :
1. Nettoyage du texte (suppression des URL, des emojis, etc.)
2. Tokenisation et normalisation
3. Gestion des négations et des intensificateurs
4. Extraction de caractéristiques (n-grammes, POS tagging)
Assurez-vous que le script gère efficacement les spécificités du langage utilisé par les clients."`
    },
    {
      title: "Choix et entraînement du modèle (Humain)",
      type: "human",
      content: `1. Évaluez différents modèles de classification de sentiment (LSTM, BERT, etc.).
2. Préparez les données d'entraînement avec des annotations de sentiment.
3. Entraînez le modèle choisi en utilisant des techniques d'apprentissage par transfert si nécessaire.
4. Effectuez une validation croisée pour évaluer les performances du modèle.`
    },
    {
      title: "Implémentation de l'analyse (IA)",
      type: "ai",
      content: `"Développez une fonction Python 'analyze_sentiment' qui :
1. Prend en entrée un texte de feedback client.
2. Utilise le modèle entraîné pour prédire le sentiment.
3. Retourne le sentiment prédit et le score de confiance.
4. Inclut une gestion des erreurs et des cas limites.
Optimisez la fonction pour un traitement en temps réel des feedbacks."`
    },
    {
      title: "Visualisation et reporting (Humain)",
      type: "human",
      content: `1. Concevez des dashboards interactifs pour visualiser les tendances de sentiment.
2. Implémentez des alertes pour les changements significatifs de sentiment.
3. Créez des rapports automatisés résumant les insights clés.
4. Intégrez l'analyse de sentiment dans les processus existants d'amélioration continue.`
    }
  ],
  campaign: [
    {
      title: "Définition des objectifs (Humain)",
      type: "human",
      content: `1. Identifiez les objectifs spécifiques de la campagne marketing.
2. Définissez les KPIs pour mesurer le succès de la campagne.
3. Déterminez le public cible et les canaux de communication.
4. Établissez un budget et un calendrier pour la campagne.`
    },
    {
      title: "Collecte et analyse des données (IA)",
      type: "ai",
      content: `"Créez un script Python pour :
1. Collecter des données historiques de campagnes précédentes.
2. Analyser les performances des différents canaux et types de contenu.
3. Identifier les segments de clients les plus réceptifs.
4. Générer des insights sur les tendances du marché et le comportement des consommateurs.
Assurez-vous que le script utilise des techniques d'analyse avancées comme le clustering et l'analyse de séries temporelles."`
    },
    {
      title: "Conception de la stratégie (Humain)",
      type: "human",
      content: `1. Utilisez les insights générés par l'IA pour affiner la stratégie de campagne.
2. Développez des personas détaillées pour chaque segment cible.
3. Créez un plan de contenu adapté à chaque canal et persona.
4. Définissez une stratégie de test A/B pour optimiser les performances.`
    },
    {
      title: "Optimisation du contenu (IA)",
      type: "ai",
      content: `"Développez un modèle d'IA pour :
1. Générer des suggestions de contenu personnalisé pour chaque segment.
2. Optimiser les titres et les descriptions pour maximiser l'engagement.
3. Prédire les meilleurs moments pour publier le contenu.
4. Recommander des mots-clés et des hashtags pertinents.
Intégrez des techniques de NLP et d'apprentissage par renforcement pour améliorer continuellement les recommandations."`
    },
    {
      title: "Exécution et suivi (Humain)",
      type: "human",
      content: `1. Mettez en place un système de suivi en temps réel des performances de la campagne.
2. Utilisez l'IA pour ajuster dynamiquement les paramètres de la campagne.
3. Implémentez des alertes pour les anomalies ou les opportunités détectées.
4. Préparez des rapports détaillés sur les résultats de la campagne et les leçons apprises.`
    }
  ],
  seo: [
    {
      title: "Analyse du site web (IA)",
      type: "ai",
      content: `"Développez un script Python pour :
1. Crawler le site web et extraire les métadonnées importantes (titres, descriptions, structure des URL).
2. Analyser la structure du contenu et identifier les problèmes de SEO on-page.
3. Évaluer la vitesse de chargement des pages et proposer des optimisations.
4. Générer un rapport détaillé des problèmes et opportunités SEO.
Assurez-vous que le script respecte les directives des moteurs de recherche et gère efficacement les sites de grande taille."`
    },
    {
      title: "Recherche de mots-clés (Humain)",
      type: "human",
      content: `1. Utilisez des outils d'IA pour générer une liste initiale de mots-clés pertinents.
2. Analysez le volume de recherche et la concurrence pour chaque mot-clé.
3. Identifiez les opportunités de longue traîne spécifiques à votre niche.
4. Créez une stratégie de ciblage des mots-clés alignée sur les intentions de recherche des utilisateurs.`
    },
    {
      title: "Optimisation du contenu (IA)",
      type: "ai",
      content: `"Créez un modèle NLP pour :
1. Analyser la pertinence du contenu existant par rapport aux mots-clés cibles.
2. Générer des suggestions d'amélioration du contenu (structure, longueur, lisibilité).
3. Identifier les opportunités de création de nouveaux contenus.
4. Optimiser les balises title et meta description.
Intégrez des techniques d'analyse sémantique pour assurer une couverture complète des sujets."`
    },
    {
      title: "Optimisation technique (Humain)",
      type: "human",
      content: `1. Implémentez les recommandations techniques du rapport d'analyse IA.
2. Optimisez la structure des URL et la navigation interne du site.
3. Améliorez le temps de chargement des pages et l'expérience mobile.
4. Mettez en place un balisage structuré (schema.org) pour améliorer les rich snippets.`
    },
    {
        title: "Suivi et ajustement (IA)",
        type: "ai",
        content: `"Développez un dashboard interactif qui :
  1. Suit en temps réel les performances SEO (classements, trafic, conversions).
  2. Détecte automatiquement les changements d'algorithme des moteurs de recherche et leur impact.
  3. Identifie les opportunités d'amélioration basées sur l'analyse des données.
  4. Génère des rapports personnalisés et des alertes.
  Intégrez des modèles de prédiction pour anticiper les tendances et ajuster la stratégie SEO en conséquence."`
      }
    ],
    content: [
      {
        title: "Analyse des besoins (Humain)",
        type: "human",
        content: `1. Identifiez les objectifs de contenu pour chaque segment d'audience.
  2. Analysez les performances des contenus existants.
  3. Déterminez les formats de contenu les plus adaptés à votre audience.
  4. Créez un calendrier éditorial aligné sur les objectifs marketing.`
      },
      {
        title: "Génération d'idées (IA)",
        type: "ai",
        content: `"Développez un modèle d'IA pour :
  1. Analyser les tendances du secteur et les sujets populaires.
  2. Générer des idées de contenu originales basées sur les intérêts de l'audience.
  3. Identifier les angles uniques pour différencier votre contenu.
  4. Suggérer des titres accrocheurs et des structures de contenu efficaces.
  Utilisez des techniques de traitement du langage naturel et d'analyse de données pour assurer la pertinence et l'originalité des suggestions."`
      },
      {
        title: "Création de contenu (Humain)",
        type: "human",
        content: `1. Utilisez les suggestions de l'IA comme point de départ pour la création de contenu.
  2. Adaptez le ton et le style à votre marque et à votre audience.
  3. Intégrez des éléments visuels et multimédias pour enrichir le contenu.
  4. Assurez-vous que le contenu est conforme aux directives SEO et d'accessibilité.`
      },
      {
        title: "Optimisation et personnalisation (IA)",
        type: "ai",
        content: `"Créez un système d'IA pour :
  1. Analyser le contenu créé et suggérer des améliorations (clarté, engagement, SEO).
  2. Personnaliser dynamiquement le contenu en fonction du profil de l'utilisateur.
  3. Recommander des contenus connexes pour augmenter l'engagement.
  4. Optimiser les moments de publication pour maximiser la visibilité.
  Intégrez des techniques d'apprentissage automatique pour améliorer continuellement les recommandations basées sur les interactions des utilisateurs."`
      },
      {
        title: "Distribution et analyse (Humain)",
        type: "human",
        content: `1. Mettez en place une stratégie de distribution multicanale du contenu.
  2. Utilisez l'IA pour identifier les meilleurs canaux de distribution pour chaque type de contenu.
  3. Suivez les performances du contenu à l'aide d'outils d'analyse avancés.
  4. Utilisez les insights générés pour affiner votre stratégie de contenu future.`
      }
    ],
    recruitment: [
      {
        title: "Analyse des besoins (Humain)",
        type: "human",
        content: `1. Identifiez les postes à pourvoir et les compétences requises.
  2. Définissez les critères de sélection et les indicateurs de performance clés.
  3. Analysez les données historiques de recrutement pour identifier les défis et les opportunités.
  4. Établissez un calendrier et un budget pour le processus de recrutement.`
      },
      {
        title: "Présélection des candidats (IA)",
        type: "ai",
        content: `"Développez un système d'IA pour :
  1. Analyser les CV et les lettres de motivation en utilisant le NLP.
  2. Évaluer l'adéquation des candidats en fonction des critères prédéfinis.
  3. Identifier les compétences et expériences pertinentes non explicitement mentionnées.
  4. Générer un classement initial des candidats.
  Assurez-vous que le système soit équitable et non biaisé, en intégrant des techniques de détection et d'atténuation des biais."`
      },
      {
        title: "Entretiens assistés par IA (Humain)",
        type: "human",
        content: `1. Utilisez l'IA pour générer des questions d'entretien personnalisées pour chaque candidat.
  2. Implémentez des outils d'analyse vidéo pour évaluer le langage corporel et les expressions faciales.
  3. Utilisez des chatbots IA pour les premiers entretiens de présélection.
  4. Analysez les réponses des candidats pour évaluer les compétences techniques et les soft skills.`
      },
      {
        title: "Évaluation et prise de décision (IA)",
        type: "ai",
        content: `"Créez un modèle d'aide à la décision qui :
  1. Agrège et analyse toutes les données collectées sur chaque candidat.
  2. Évalue l'adéquation culturelle en plus des compétences techniques.
  3. Prédit la performance potentielle et la rétention des candidats.
  4. Génère des rapports détaillés pour faciliter la prise de décision finale.
  Intégrez des techniques d'apprentissage par renforcement pour améliorer continuellement les prédictions basées sur les performances réelles des employés recrutés."`
      },
      {
        title: "Onboarding et suivi (Humain)",
        type: "human",
        content: `1. Utilisez l'IA pour créer des plans d'onboarding personnalisés.
  2. Mettez en place un système de suivi des performances des nouvelles recrues.
  3. Utilisez les feedbacks pour affiner le processus de recrutement.
  4. Analysez les données à long terme pour évaluer l'efficacité du processus de recrutement assisté par IA.`
      }
    ],
    forecasting: [
      {
        title: "Collecte et préparation des données (Humain)",
        type: "human",
        content: `1. Identifiez toutes les sources de données financières pertinentes.
  2. Assurez-vous de la qualité et de la cohérence des données historiques.
  3. Déterminez la granularité temporelle appropriée pour les prévisions.
  4. Préparez les données pour l'analyse (nettoyage, normalisation, gestion des valeurs manquantes).`
      },
      {
        title: "Analyse exploratoire (IA)",
        type: "ai",
        content: `"Développez un script d'analyse exploratoire qui :
  1. Identifie les tendances, les saisonnalités et les anomalies dans les données financières.
  2. Effectue une analyse de corrélation entre différentes variables financières et externes.
  3. Génère des visualisations interactives pour faciliter la compréhension des patterns.
  4. Suggère des variables prédictives potentielles pour les modèles de prévision.
  Utilisez des techniques avancées comme la décomposition de séries temporelles et l'analyse spectrale pour une compréhension approfondie des données."`
      },
      {
        title: "Développement du modèle (Humain)",
        type: "human",
        content: `1. Choisissez les modèles de prévision appropriés (ARIMA, Prophet, réseaux de neurones, etc.).
  2. Divisez les données en ensembles d'entraînement et de test.
  3. Entraînez plusieurs modèles et comparez leurs performances.
  4. Effectuez une validation croisée temporelle pour évaluer la robustesse des modèles.`
      },
      {
        title: "Optimisation et ajustement (IA)",
        type: "ai",
        content: `"Créez un pipeline d'optimisation automatique qui :
  1. Effectue une recherche d'hyperparamètres pour chaque modèle.
  2. Combine plusieurs modèles en utilisant des techniques d'ensemble.
  3. Ajuste dynamiquement les prévisions en fonction des données en temps réel.
  4. Quantifie l'incertitude des prévisions et génère des intervalles de confiance.
  Intégrez des techniques d'apprentissage par transfert pour améliorer les prévisions pour les nouvelles lignes de produits ou marchés avec peu de données historiques."`
      },
      {
        title: "Interprétation et reporting (Humain)",
        type: "human",
        content: `1. Créez des dashboards interactifs pour visualiser les prévisions financières.
  2. Interprétez les résultats des modèles et identifiez les principaux facteurs d'influence.
  3. Préparez des rapports détaillés expliquant les prévisions et leurs implications.
  4. Collaborez avec les équipes financières pour intégrer les prévisions dans la planification stratégique.`
      }
    ],
    compliance: [
      {
        title: "Analyse réglementaire (Humain)",
        type: "human",
        content: `1. Identifiez toutes les réglementations pertinentes pour votre industrie et juridiction.
  2. Créez une base de données structurée des exigences réglementaires.
  3. Établissez un système de veille réglementaire pour suivre les changements.
  4. Définissez les indicateurs clés de conformité pour chaque domaine réglementaire.`
      },
      {
        title: "Scan de conformité (IA)",
        type: "ai",
        content: `"Développez un système d'IA pour :
  1. Analyser automatiquement les documents internes (politiques, procédures, contrats) pour évaluer la conformité.
  2. Identifier les écarts entre les pratiques actuelles et les exigences réglementaires.
  3. Générer des rapports de risque de non-conformité.
  4. Suggérer des actions correctives prioritaires.
  Utilisez des techniques de NLP avancées pour comprendre le contexte et l'intention dans les documents réglementaires et internes."`
      },
      {
        title: "Mise en place de contrôles (Humain)",
        type: "human",
        content: `1. Concevez des contrôles internes basés sur les résultats du scan de conformité.
  2. Implémentez des workflows automatisés pour les processus de conformité critiques.
  3. Formez le personnel sur les nouvelles procédures et l'importance de la conformité.
  4. Établissez un système de documentation pour prouver la conformité.`
      },
      {
        title: "Surveillance continue (IA)",
        type: "ai",
        content: `"Créez un système de surveillance en temps réel qui :
  1. Monitore les activités de l'entreprise pour détecter les violations potentielles.
  2. Analyse les transactions financières pour identifier les comportements suspects.
  3. Surveille les communications internes et externes pour les risques de conformité.
  4. Génère des alertes en temps réel pour les problèmes de conformité détectés.
  Intégrez des techniques d'apprentissage par renforcement pour améliorer continuellement la précision de la détection des anomalies et réduire les faux positifs."`
      },
      {
        title: "Reporting et amélioration continue (Humain)",
        type: "human",
        content: `1. Créez des tableaux de bord de conformité pour la direction et les régulateurs.
  2. Analysez les tendances et patterns dans les données de conformité.
  3. Conduisez des audits réguliers assistés par l'IA pour valider l'efficacité du programme de conformité.
  4. Utilisez les insights générés pour affiner continuellement les politiques et procédures de conformité.`
      }
    ]
  };
  
  const FrameworkSteps = ({ framework }) => {
    const steps = frameworkSteps[framework] || [];
  
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
      });
    };
  
    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className={`bg-github-dark border border-github-border rounded-lg p-4 ${step.type === 'human' ? 'border-green-600' : 'border-blue-600'}`}>
            <h3 className="font-semibold text-white mb-2">{index + 1}. {step.title}</h3>
            <pre className="bg-github-dark-secondary text-gray-300 p-2 rounded text-sm overflow-x-auto">
              <code>{step.content}</code>
            </pre>
            <button
              onClick={() => copyToClipboard(step.content)}
              className="mt-2 bg-github-border text-gray-300 px-3 py-1 rounded hover:bg-gray-600 transition text-sm flex items-center"
            >
              <Clipboard size={16} className="mr-1" /> Copy
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default FrameworkSteps;