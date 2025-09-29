import React from 'react';
import { Heart, Shield, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: "600+", label: "Animais atendidos em 2025", icon: Heart },
    { number: "132", label: "Resgatados de canis clandestinos", icon: Shield },
    { number: "100%", label: "Transparência nas ações", icon: Award },
    { number: "24h", label: "Disponibilidade para emergências", icon: Users }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre o
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> Patas & Corações</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                O <strong>Patas & Corações</strong> é uma organização independente e sem fins lucrativos que atua no resgate, 
                tratamento e reabilitação de animais em situação de abandono, maus-tratos e risco. Já salvamos milhares de 
                vidas e lutamos todos os dias para oferecer dignidade e um novo começo para esses animais.
              </p>
              
              <p>
                Nosso trabalho é <strong>100% transparente</strong> e pode ser acompanhado pelas nossas redes sociais. 
                Toda ajuda é bem-vinda e salva vidas de verdade.
              </p>

              <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                <p className="font-semibold text-green-800">
                  Já são mais 600 animais atendidos em 2025, um dos anos mais difíceis 
                  que já enfrentamos, com queda nas doações, enchentes e um acúmulo imenso de resgates emergenciais.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-800">Além disso:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Resgatamos 132 animais de canis clandestinos, todos em estado crítico.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Temos custos veterinários em 2026 que também precisam ser pagos.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    E ainda precisamos construir mais canis na nossa chácara, pois muitos animais ainda estão em condições precárias.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="inline-flex p-3 rounded-full bg-green-100 mb-4">
                  <stat.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
