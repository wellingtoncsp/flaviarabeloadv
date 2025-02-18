import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <nav className="hidden sm:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-gray-900">Início</a>
            <a href="#sobre" className="text-gray-600 hover:text-gray-900">Sobre</a>
            <a href="#areas" className="text-gray-600 hover:text-gray-900">Áreas de Atuação</a>
            <a href="#abordagem" className="text-gray-600 hover:text-gray-900">Nossa Abordagem</a>
            <a href="#depoimentos" className="text-gray-600 hover:text-gray-900">Depoimentos</a>
            <a href="#contato" className="text-gray-600 hover:text-gray-900">Contato</a>
          </nav>
          
          <a 
            href="#contato"
            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 
              transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Agende sua Consulta
          </a>
        </div>
      </div>
    </header>
  );
} 