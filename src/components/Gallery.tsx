import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Gallery1 from '../assets/gallery1.jpg';
import Gallery2 from '../assets/gallery2.jpg';
import Gallery3 from '../assets/gallery3.jpg';
import Gallery4 from "../assets/gallery4.jpg";
import Gallery5 from "../assets/gallery5.jpg";
import Gallery6 from "../assets/gallery6.jpg";

const images = [
  {
    url: Gallery1 ,
    title: 'Suite Présidentielle'
  },
  {
    url: Gallery2,
    title: 'Restaurant Étoilé'
  },
  {
    url: Gallery3,
    title: 'Spa de Luxe'
  },
  {
    url: Gallery4,
    title: 'Plage Privée'
  },
  {
    url: Gallery5,
    title: 'Villa avec Piscine'
  },
  {
    url: Gallery6,
    title: 'Suite Ocean View'
  }
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Galerie
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez en images l'excellence de nos services et destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;