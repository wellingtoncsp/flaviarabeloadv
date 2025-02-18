import Image from 'next/image';

export function About() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] relative rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/foto.jpg"
                alt="Flávia Rabelo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-800 rounded-lg -z-10" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Sobre Flávia Rabelo
            </h2>
            <p className="text-gray-600">
              Com mais de 15 anos de experiência, atuo nas áreas de Direito Civil e Tributário, 
              oferecendo soluções jurídicas personalizadas e eficientes para cada cliente.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <span className="block text-2xl font-bold text-blue-800">15+</span>
                <span className="text-gray-600">Anos de Experiência</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <span className="block text-2xl font-bold text-blue-800">500+</span>
                <span className="text-gray-600">Casos Resolvidos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 