const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      position: "CEO da TechSolutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: "A IMERSÃO IMPRELUX transformou completamente minha visão de negócios. Em apenas 2 dias, aprendi estratégias que levaram minha empresa a crescer 300% em 6 meses.",
      rating: 5
    },
    {
      name: "Ana Paula Silva",
      position: "Fundadora da Inovação Digital",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b566?w=150&h=150&fit=crop&crop=face",
      testimonial: "O networking foi incrível! Fiz parcerias estratégicas que mudaram o rumo da minha empresa. O conteúdo é de altíssima qualidade e aplicabilidade imediata.",
      rating: 5
    },
    {
      name: "Ricardo Santos",
      position: "Diretor Comercial",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "Experiência transformadora! Saí da imersão com clareza total sobre onde quero chegar e como fazer isso acontecer. Recomendo a todos os empreendedores sérios.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Quem participou <span className="text-accent">recomenda</span>
          </h2>
          <div className="w-20 h-1 accent-gradient mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Veja o que nossos participantes têm a dizer sobre a experiência 
            transformadora da IMERSÃO IMPRELUX.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-gradient rounded-2xl p-8 shadow-card animate-scale-in hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">⭐</span>
                ))}
              </div>
              
              {/* Testimonial */}
              <blockquote className="text-white/90 text-center mb-8 leading-relaxed">
                "{testimonial.testimonial}"
              </blockquote>
              
              {/* Author */}
              <div className="text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover ring-4 ring-accent/30"
                />
                <h4 className="font-bold text-white text-lg mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-white/70 text-sm">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-white/70 text-sm">Satisfação dos participantes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">+500</div>
              <div className="text-white/70 text-sm">Empresários transformados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">4.9</div>
              <div className="text-white/70 text-sm">Avaliação média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/70 text-sm">Conteúdo prático</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;