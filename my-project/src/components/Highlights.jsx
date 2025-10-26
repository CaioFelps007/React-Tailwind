import React from "react";

function Highlights() {
  const itens = [
    {
      value: "48MP",
      label: "Principal",
      paragrafo: "Sensor quand-pixel com foco automático",
      color: "text-blue-600",
    },
    {
      value: "12MP",
      label: "Ultra Wide",
      paragrafo: "Campo de visão 120° com modo noturno",
      color: "text-orange-500",
    },
    {
      value: "12MP",
      label: "Telefoto 5x",
      paragrafo: "Zoom óptico de 5x com estabilização",
      color: "text-blue-600",
    },
  ];
  return (
    <section className="bg-black py-20 px-6" id="design">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Design Revolucionário</h2>
          <p className="text-xl text-gray-400">
            Cada design foi pensado para criar a melhor experiência
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              src="../../img/titanium-design.jpg"
              alt="iphone-titanium"
              className="w-full rounded-2xl mb-4"
            />
            <h3 className="font-bold mb-2 text-3xl">Titânio premium</h3>
            <p className="text-gray-300">Estrutura de Titanio</p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../../img/ios-features.jpg"
              alt="ios 2025"
            />
            <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
            <p className="text-gray-300">A IA feita para quem ama tecnologia</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
          <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
          <p className="mb-6 text-gray-300">
            O chip mais poderoso do smartphone
          </p>
          <img
            className="w-full rounded-2xl mb-4"
            src="../../img/chip-a18-pro.jpg"
            alt="chip-alternative"
          />

          <ul className="space-y-3 text-gray-300">
            <li>CPU 20% Mais rápida</li>
            <li>GPU 25% Mais eficiente</li>
            <li>Neural Engine com 16 núcleos</li>
            <li>Ray tracing acelerado por hardware</li>
          </ul>
        </div>

        <div id="camera" className="text-center">
          <h3 className="text-4xl font-bold mb-10">
            Sistema de câmera Pro avançado
          </h3>

          <div className="grid grid-cols-3 gap-6">
            {itens.map((item, index) => (
              <div
                className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
                key={index}
              >
                <div className={`text-4xl font-bold ${item.color} mb-4`}>
                  {item.value}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.label}</h4>
                <p className="text-gray-400">{item.paragrafo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
