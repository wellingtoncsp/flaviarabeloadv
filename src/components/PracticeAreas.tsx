export function PracticeAreas() {
  return (
    <section id="areas" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Especializada em casos complexos de Direito Civil e Tributário, 
            oferecendo soluções jurídicas personalizadas para cada situação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background border border-gray-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Direito Civil</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Contratos e Negociações</li>
              <li>• Direito Imobiliário</li>
              <li>• Responsabilidade Civil</li>
              <li>• Direito do Consumidor</li>
            </ul>
          </div>
          
          <div className="bg-background border border-gray-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Direito Tributário</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Planejamento Tributário</li>
              <li>• Contencioso Administrativo</li>
              <li>• Recuperação de Tributos</li>
              <li>• Consultoria Fiscal</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 