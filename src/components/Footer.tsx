import React from 'react';
import { Heart, Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Animais', id: 'animals' },
    { name: 'Missão', id: 'mission' },
    { name: 'Doar', id: 'donation' },
    { name: 'Ajudar', id: 'help' },
    { name: 'Contato', id: 'contact' }
  ];

  const helpLinks = [
    'Adoção Responsável',
    'Lar Temporário', 
    'Voluntariado',
    'Apadrinhamento',
    'Doação de Itens',
    'Denúncia de Maus-tratos'
  ];

  const socialLinks = [
    { icon: Instagram, name: "@patascoracoes", color: "hover:text-pink-400" },
    { icon: Facebook, name: "Patas & Corações", color: "hover:text-blue-400" },
    { icon: MessageCircle, name: "(11) 99854-7887", color: "hover:text-green-400" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-3 rounded-full">
                <Heart className="h-6 w-6 text-white fill-current" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Patas & Corações</h3>
                <p className="text-sm text-gray-400">ONG de Resgate</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Organização independente e sem fins lucrativos que atua no resgate, 
              tratamento e reabilitação de animais em situação de abandono e maus-tratos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className={`p-2 bg-gray-800 rounded-full ${social.color} transition-all duration-300 hover:scale-110`}
                  title={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:translate-x-2 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Como Ajudar */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Como Ajudar</h4>
            <ul className="space-y-3">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('help')}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:translate-x-2 transform text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Rua das Flores, 1867</p>
                  <p>Jardim Esperança</p>
                  <p>São Paulo, SP</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>(11) 99854-7887</p>
                  <p>(11) 3322-5784</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>contato@patascoracoes.org.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">600+</div>
              <div className="text-gray-400 text-sm">Animais Resgatados</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">132</div>
              <div className="text-gray-400 text-sm">Resgatados de Canil</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Transparência</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2">24h</div>
              <div className="text-gray-400 text-sm">Emergências</div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-2xl">
            <div className="text-center md:flex md:items-center md:justify-between md:text-left">
              <div className="mb-4 md:mb-0">
                <h4 className="text-xl font-semibold mb-2">
                  📬 Receba nossas atualizações
                </h4>
                <p className="text-gray-300">
                  Fique por dentro dos resgates, adoções e campanhas
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 flex-1"
                />
                <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 whitespace-nowrap">
                  Receber Atualizações
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© 2025 Patas & Corações ONG. Todos os direitos reservados.</p>
              <p className="mt-1">CNPJ:  32.354.678/0001-90 | Certificada como ONG</p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-gray-400 hover:text-orange-400 transition-colors">
                Política de Privacidade
              </button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors">
                Termos de Uso
              </button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors">
                Transparência
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
