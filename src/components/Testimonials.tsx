export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação de nossos clientes é o melhor testemunho do nosso compromisso 
            com a excelência e dedicação em cada caso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 dark:text-blue-200 font-semibold">{testimonial.initials}</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.type}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const testimonials = [
  {
    name: "Maria Silva",
    initials: "MS",
    type: "Cliente Pessoa Física",
    text: "A Dra. Flávia conduziu meu processo com extrema competência e profissionalismo. Sua dedicação foi fundamental para o resultado positivo do meu caso."
  },
  {
    name: "João Santos",
    initials: "JS",
    type: "Empresário",
    text: "Excelente profissional. Seu conhecimento em direito tributário nos ajudou a economizar significativamente em impostos de forma totalmente legal."
  },
  {
    name: "Ana Costa",
    initials: "AC",
    type: "Cliente Pessoa Física",
    text: "Atendimento humanizado e resultados excepcionais. A Dra. Flávia sempre manteve uma comunicação clara e objetiva durante todo o processo."
  }
]; 