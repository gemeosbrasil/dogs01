import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Calendar, MapPin } from 'lucide-react';

const AnimalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const animals = [
    {
      id: 1,
      name: "Max",
      image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800",
      story: "Resgatado das ruas em estado crítico, Max está se recuperando e precisa de cuidados especiais. Sua força de vontade inspira toda nossa equipe."
    },
    {
      id: 2,
      name: "Luna",
      image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800",
      story: "Luna chegou até nós muito machucada após sofrer maus-tratos. Hoje ela está se recuperando e mostrando que o amor pode curar qualquer ferida."
    },
    {
      id: 3,
      name: "Thor",
      image: "https://images.pexels.com/photos/1420405/pexels-photo-1420405.jpeg?auto=compress&cs=tinysrgb&w=800",
      story: "Thor foi encontrado abandonado e desnutrido. Com muito carinho e tratamento, ele está se tornando um cãozinho alegre e cheio de vida."
    },
    {
      id: 4,
      name: "Bella",
      image: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=800",
      story: "Bella estava em situação de extrema negligência quando a encontramos. Hoje ela está se recuperando e mostrando sua personalidade doce."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % animals.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + animals.length) % animals.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const scrollToPix = () => {
    const element = document.getElementById('pix');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="animals" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Alguns dos Animais
            <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent"> Resgatados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja como cada real doado por você pode fazer a diferença na vida desses animais que tanto precisam.
          </p>
        </div>

        {/* Simple Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative">
              <img
                src={animals[currentIndex].image}
                alt={animals[currentIndex].name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{animals[currentIndex].name}</h3>
                <p className="text-lg opacity-90 mb-4">{animals[currentIndex].story}</p>
                <button
                  onClick={scrollToPix}
                  className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Ajudar {animals[currentIndex].name}
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {animals.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-green-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimalCarousel;