import Image from 'next/image';

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
          Soluções Jurídicas com Excelência
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 drop-shadow-md mb-8 max-w-3xl mx-auto">
          Atendimento personalizado e estratégico para proteger seus direitos e interesses
        </p>
        <a 
          href="#contato"
          className="inline-block bg-blue-800 text-white px-8 py-4 rounded-md text-lg font-semibold 
            hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Agende sua Consulta
        </a>
      </div>
    </section>
  );
} 