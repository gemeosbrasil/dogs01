import React, { useState } from 'react';
import { Copy, Check, QrCode } from 'lucide-react';

const PixDonation = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "PIXSALVEVIDAS@GMAIL.COM";

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="pix" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            📌 Como
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> Ajudar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sua doação via PIX é rápida, segura e chega diretamente aos animais que precisam.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex p-4 rounded-full bg-green-100 mb-6">
                <QrCode className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Doe com qualquer valor pela nossa chave PIX:
              </h3>
            </div>

            {/* PIX Key */}
            <div className="bg-gray-50 p-6 rounded-2xl mb-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">Chave PIX:</p>
                  <p className="text-xl font-bold text-gray-800 break-all">{pixKey}</p>
                </div>
                <button
                  onClick={copyPixKey}
                  className={`ml-4 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    copied 
                      ? 'bg-green-500 text-white' 
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  {copied ? (
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5" />
                      <span>Copiado!</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Copy className="h-5 w-5" />
                      <span>Copiar</span>
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-bold text-gray-800">Como doar:</h4>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  Abra o app do seu banco
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  Escolha a opção PIX
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  Cole nossa chave PIX ou digite manualmente
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  Digite o valor que desejar (qualquer quantia ajuda!)
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                  Confirme a doação
                </li>
              </ol>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-2xl text-white text-center">
              <h4 className="text-xl font-bold mb-2">🙌 Toda ajuda é bem-vinda!</h4>
              <p className="mb-4">
                Mesmo uma doação de R$ 1,00 faz diferença. E se não puder doar, compartilhe com amigos, 
                grupos e familiares. Juntos, conseguimos transformar sofrimento em esperança!
              </p>
              <p className="text-lg font-semibold">
                💚 Obrigado por salvar vidas conosco!
              </p>
            </div>

            {/* Security Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                🔒 PIX é seguro, instantâneo e gratuito • Patas & Corações - CNPJ: 32.354.678/0001-90
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixDonation;
