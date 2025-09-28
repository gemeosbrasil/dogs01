import React from 'react';
import { DollarSign, Heart, Stethoscope, Home } from 'lucide-react';

const ImpactSection = () => {
  const impacts = [
    { amount: 'R$ 10,00', description: 'Alimenta 1 animal por uma semana!', icon: Heart, color: 'from-green-400 to-green-600' },
    { amount: 'R$ 30,00', description: 'Ração e Medicamentos básicos para 2 animais por 10 dias!', icon: Stethoscope, color: 'from-blue-400 to-blue-600' },
    { amount: 'R$ 75,00', description: 'Compra um 1 saco de ração de 10kg que alimenta 5 animais por um mês!', icon: DollarSign, color: 'from-purple-400 to-purple-600' },
    { amount: 'R$ 150,00', description: 'Cobre vacinas e vermífugos para 4 animais resgatados!', icon: Heart, color: 'from-orange-400 to-orange-600' },
    { amount: 'R$ 350,00', description: 'Oferece tratamento veterinário completo por um mês para 3 animais', icon: Stethoscope, color: 'from-red-400 to-red-600' },
    { amount: 'R$ 750,00', description: 'Cobre cirurgias de emergência e recuperação de animais em estados críticos', icon: Home, color: 'from-indigo-400 to-indigo-600' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Veja como cada real doado
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> faz a diferença</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${impact.color} mb-6`}>
                <impact.icon className="h-6 w-6 text-white" />
              </div>
              <div className={`text-2xl font-bold mb-4 bg-gradient-to-r ${impact.color} bg-clip-text text-transparent`}>
                👉 {impact.amount}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;