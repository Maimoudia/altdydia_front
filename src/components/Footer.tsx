import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center mb-12">
      <div className="w-full md:w-1/3 xl:w-1/4 p-4">
        <h4 className="text-lg font-bold mb-4">Liens utiles</h4>
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-blue-600">Accueil</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-blue-600">À propos de nous</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-blue-600">Contact</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-blue-600">Blog</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/4 p-4">
        <h4 className="text-lg font-bold mb-4">Réseaux sociaux</h4>
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-blue-600"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-blue-600"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-blue-600"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-blue-600"><i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/4 p-4">
        <h4 className="text-lg font-bold mb-4">Informations légales</h4>
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-blue-600">Mentions légales</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-blue-600">Politique de confidentialité</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-blue-600">Conditions d'utilisation</a></li>
        </ul>
      </div>
    </div>
    <div className="text-center">
      <p className="text-gray-300 text-sm"> 2025. Tous droits réservés.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;