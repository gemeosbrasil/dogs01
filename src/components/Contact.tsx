import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'geral',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'geral',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua das Flores, 123\nJardim Esperança - São Paulo, SP\nCEP: 01234-567",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99854-7887\n(11) 3322-4758\nWhatsApp disponível",
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@patascoracoes.org.br\nvoluntarios@patascoracoes.org.br\nadocao@patascoracoes.org.br",
      color: "text-orange-500"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 21h\nSábados: 8h às 18:00h\nDomingos: Apenas emergências",
      color: "text-purple-500"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", link: "@patascoracoes", color: "bg-pink-500 hover:bg-pink-600" },
    { icon: Facebook, name: "Facebook", link: "Patas & Corações ONG", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: MessageCircle, name: "WhatsApp", link: "(11) 99854-7887", color: "bg-green-500 hover:bg-green-600" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Entre em 
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent"> Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos sempre prontos para atender você! Entre em contato para adoções, 
            voluntariado, doações ou qualquer dúvida sobre nosso trabalho.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envie sua mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  >
                    <option value="geral">Informações Gerais</option>
                    <option value="adocao">Adoção</option>
                    <option value="voluntariado">Voluntariado</option>
                    <option value="lar-temporario">Lar Temporário</option>
                    <option value="doacao">Doação</option>
                    <option value="apadrinhamento">Apadrinhamento</option>
                    <option value="denuncia">Denúncia de Maus-tratos</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                  placeholder="Conte-nos como podemos ajudar você..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gray-50 ${info.color}`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">Siga-nos nas redes sociais</h4>
              <p className="mb-6 opacity-90">
                Acompanhe nossos resgates, adoções e campanhas. Juntos somos mais fortes!
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full ${social.color} transition-all duration-300 transform hover:scale-105`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="font-medium">{social.link}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-red-800 mb-2">
                🚨 Emergência Animal
              </h4>
              <p className="text-red-700 mb-4">
                Para casos urgentes de animais em perigo, ligue:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:(11) 99854-7887"
                  className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 text-center"
                >
                  📞 (11) 99854-7887
                </a>
                <button className="bg-red-100 text-red-700 px-6 py-3 rounded-full font-semibold hover:bg-red-200 transition-all duration-300">
                  💬 WhatsApp 24h
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 font-medium">Mapa de Localização</p>
              <p className="text-sm text-gray-500">Rua das Flores, 1876 - Jardim Esperança</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
