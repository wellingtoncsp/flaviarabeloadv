import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="text-white font-serif text-2xl tracking-wider">
                    FR
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-white/10 rounded-lg -z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white">Flávia Rabelo</span>
                <span className="text-xs text-gray-400 tracking-wider">ADVOCACIA</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Advocacia especializada em Direito Civil e Tributário, 
              oferecendo soluções jurídicas personalizadas com excelência e dedicação.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <Image 
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="opacity-75 hover:opacity-100"
                />
              </a>
              {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" 
                  alt="Instagram" 
                  className="w-6 h-6 opacity-75 hover:opacity-100"
                />
              </a> */}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#areas" className="text-gray-400 hover:text-white transition-colors">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Image 
                  src="/images/phone.png"
                  alt="Telefone"
                  width={16}
                  height={16}
                  className="opacity-75"
                />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                  src="/images/email.png"
                  alt="Email"
                  width={16}
                  height={16}
                  className="opacity-75"
                />
                <span>contato@flaviarabelo.adv.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                  src="/images/location.png"
                  alt="Localização"
                  width={16}
                  height={16}
                  className="opacity-75"
                />
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Flávia Rabelo Advocacia. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="/privacidade" className="text-sm text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-sm text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 