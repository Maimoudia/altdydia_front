import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import MaldivesImage from '../assets/maldives.jpg';
import SantoriniImage from '../assets/santorini.jpg';
import BaliImage from '../assets/bali.jpg';
import DubaiImage from '../assets/dubai.jpg';
import SeychellesImage from '../assets/seychelles.jpg';


const destinations = [
  {
    id: 1,
    name: 'Maldives',
    image:  MaldivesImage,
    description: 'Paradis tropical avec villas sur pilotis',
    price: 'À partir de 5000€'
  },
  {
    id: 2,
    name: 'Santorini',
    image: SantoriniImage ,
    description: 'Vues spectaculaires sur la mer Égée',
    price: 'À partir de 3500€'
  },
  {
    id: 3,
    name: 'Bali',
    image: BaliImage,
    description: 'Culture riche et paysages luxuriants',
    price: 'À partir de 4000€'
  },
  {
    id: 4,
    name: 'Dubai',
    image: DubaiImage,
    description: 'Luxe moderne et désert mystique',
    price: 'À partir de 4500€'
  },
  {
    id: 5,
    name: 'Seychelles',
    image: SeychellesImage,
    description: 'Plages paradisiaques et nature préservée',
    price: 'À partir de 4800€'
  }
];

const Destinations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Destinations d'Exception
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explorez nos destinations soigneusement sélectionnées pour des expériences inoubliables
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            breakpoints={{
              0:{
                slidesPerView:1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            className="mySwiper py-10"
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.id} className="px-4">
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <p className="text-blue-600 font-semibold mb-4">{destination.price}</p>
                    <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                      Réserver maintenant
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full p-8 shadow-md cursor-pointer">
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full p-8 shadow-md cursor-pointer">
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
