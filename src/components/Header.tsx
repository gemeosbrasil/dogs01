import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="https://i.imgur.com/lIskwdl.png"
              alt="Patas & Corações"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Patas & Corações</h1>
              <p className="text-xs text-gray-600">ONG de Resgate</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Urgente', id: 'urgent' },
              { name: 'Animais', id: 'animals' },
              { name: 'Histórias', id: 'stories' },
              { name: 'Sobre', id: 'about' },
              { name: 'Doar PIX', id: 'pix' },
              { name: 'Contato', id: 'contact' },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-green-500 font-medium transition-all duration-300 hover:scale-105"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <button
            onClick={() => scrollToSection('pix')}
            className="hidden md:block bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Doar Agora
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fadeIn">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Urgente', id: 'urgent' },
              { name: 'Animais', id: 'animals' },
              { name: 'Histórias', id: 'stories' },
              { name: 'Sobre', id: 'about' },
              { name: 'Doar PIX', id: 'pix' },
              { name: 'Contato', id: 'contact' },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 px-2 text-gray-700 hover:text-green-500 hover:bg-gray-50 rounded-md transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('pix')}
              className="w-full mt-4 bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-full hover:from-green-500 hover:to-green-700 transition-all duration-300"
            >
              Doar Agora
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
