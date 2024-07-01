import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-github-dark-secondary border-t border-github-border py-4 text-center text-sm">
      Alasuite © {new Date().getFullYear()}. Tous droits réservés. | 
      <a href="#" className="hover:text-gray-400 ml-2">Mentions légales</a> | 
      <a href="#" className="hover:text-gray-400 ml-2">Politique de confidentialité</a> | 
      <a href="#" className="hover:text-gray-400 ml-2">Conditions d'utilisation</a>
    </footer>
  );
};

export default Footer;