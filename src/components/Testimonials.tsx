import { Star, Play } from "lucide-react";

const Testimonials = () => {
  const videoTestimonials = [
    {
      name: "Carlos Mendoza",
      position: "CEO da TechSolutions",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      quote: "Edgar transformou completamente minha visão de negócios. Um mentor excepcional!"
    },
    {
      name: "Ana Paula Silva",
      position: "Fundadora da Inovação Digital",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b566?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      quote: "A metodologia do Edgar é única. Ele consegue extrair o melhor de cada participante."
    },
    {
      name: "Ricardo Santos",
      position: "Diretor Comercial",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      quote: "Edgar é um mentor inspirador. Sua experiência e conhecimento são impressionantes."
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
          {videoTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-gradient rounded-2xl overflow-hidden shadow-card animate-scale-in hover:shadow-xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-black/20 mb-6">
                <img 
                  src={testimonial.thumbnail} 
                  alt={`Depoimento de ${testimonial.name}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-300">
                  <button className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Quote */}
                <blockquote className="text-white/90 text-center mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="text-center">
                  <h4 className="font-bold text-white text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {testimonial.position}
                  </p>
                </div>

                {/* Star Rating */}
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
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