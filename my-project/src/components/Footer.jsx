import React from "react";

function Footer() {
  const sections = [
    {
      title: "Comprar e saber mais",
      links: [
        "iPhone 17 Pro",
        "iPhone 17 Pro Max",
        "Compara Modelos",
        "Acessórios",
      ],
    },
    {
      title: "Especificações",
      links: ["Caracteristicas técnicas", "Câmera", "Bateria", "Display"],
    },
    {
      title: "Suporte",
      links: ["Suporte ao iPhone", "AppleCare+", "iOS 19", "Contato"],
    },
    {
      title: "Apple",
      links: ["Sobre a Apple", "Newsroom", "Privacidade", "Carreiras"],
    },
  ];

  const buttonLinks = ["Politica de Privacidade", "Termos de uso", "Vendas "];
  return (
    <footer className="bg-gray-900/70 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="flex gap-6 text-sm text-gray-400">
              Copyright © 2025 Apple Inc. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              {buttonLinks.map((button, btnIndex) => (
                <a className="hover:text-white" href="#" key={btnIndex}>
                  {button}
                </a>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center">
            Site criado para fins educacionais
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
