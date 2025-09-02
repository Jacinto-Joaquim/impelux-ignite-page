const Instructor = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-secondary">
              Quem conduz a <span className="text-gradient">Imersão</span>
            </h2>
            <div className="w-20 h-1 accent-gradient mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Instructor Image */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="relative inline-block">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop&crop=face"
                  alt="Edgar L. Capambo - Mentor IMPRELUX"
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-6 -right-6 card-gradient rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">+10</div>
                    <div className="text-sm text-muted-foreground">Anos de experiência</div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 card-gradient rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">500+</div>
                    <div className="text-sm text-muted-foreground">Empresas transformadas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                Edgar L. Capambo
              </h3>
              <p className="text-xl text-primary font-semibold mb-6">
                Especialista em Transformação de Negócios
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Com mais de uma década de experiência no mercado empresarial, Edgar é reconhecido 
                como um dos principais especialistas em transformação de negócios em Angola e África.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Mentor de Executivos</h4>
                    <p className="text-muted-foreground">Orientou mais de 500 empresários a alcançarem resultados extraordinários</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Estrategista de Negócios</h4>
                    <p className="text-muted-foreground">Desenvolveu metodologias próprias para aceleração empresarial</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Palestrante Internacional</h4>
                    <p className="text-muted-foreground">Reconhecido em eventos de negócios por toda a África</p>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground mb-8">
                "Minha missão é acelerar a jornada de empreendedores visionários, transformando 
                sonhos em realidades concretas através de estratégias práticas e comprovadas."
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  📚 Ver currículo completo
                </button>
                <button className="border-2 border-secondary text-secondary hover:bg-secondary/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                  💼 Conectar no LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;