export function Approach() {
  return (
    <section id="abordagem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nossa Abordagem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprometimento com a excelência e resultados, aliados a um atendimento 
            personalizado e ético, são os pilares do nosso trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Metodologia de Atendimento
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa metodologia é baseada em um atendimento personalizado e estratégico, 
                onde cada caso recebe atenção individual e soluções específicas.
                Mantemos uma comunicação clara e constante com nossos clientes, 
                garantindo transparência em todas as etapas do processo.
              </p>
              <ul className="space-y-4">
                {methodologySteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-800 text-white flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-600">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const differentials = [
  {
    icon: (
      <svg className="w-8 h-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Transparência",
    description: "Comunicação clara e honesta em todas as etapas do processo jurídico."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Experiência",
    description: "Anos de atuação em casos complexos e especializações contínuas."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Atualização Constante",
    description: "Sempre atualizados com as últimas mudanças na legislação e jurisprudência."
  }
];

const methodologySteps = [
  "Análise detalhada do caso e documentação",
  "Desenvolvimento de estratégia jurídica personalizada",
  "Acompanhamento próximo e atualização constante",
  "Busca pela melhor solução com agilidade e eficiência"
];

const metrics = [
  {
    value: "15+",
    label: "Anos de Experiência"
  },
  {
    value: "500+",
    label: "Casos Resolvidos"
  },
  {
    value: "98%",
    label: "Clientes Satisfeitos"
  },
  {
    value: "24h",
    label: "Tempo Médio de Resposta"
  }
]; 