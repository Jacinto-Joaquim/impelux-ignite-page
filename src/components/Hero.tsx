import { Button } from "@/components/ui/button";
import { Rocket, Clipboard } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-black mb-6 text-white leading-tight">
                <span className="block">IMERSÃO</span>
                <span className="text-gradient block">IMPRELUX</span>
              </h1>
              <div className="w-20 h-1 accent-gradient mx-auto lg:mx-0 mb-6"></div>
            </div>
            
            <h2 className="text-xl lg:text-2xl text-white/90 mb-8 font-light leading-relaxed">
              Uma experiência que vai 
              <span className="font-bold text-accent"> transformar sua visão </span>
              e seus 
              <span className="font-bold text-success"> resultados</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Mais que um evento, uma experiência de transformação prática e profunda 
              que vai elevar seu negócio a um novo patamar de excelência.
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="w-full sm:w-auto animate-scale-in flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Garantir minha vaga agora
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 flex items-center justify-center">
                <Clipboard className="w-5 h-5 mr-2" />
                Ver programação completa
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2</div>
                <div className="text-sm text-white/70">Dias intensivos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">100%</div>
                <div className="text-sm text-white/70">Prático</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">+50</div>
                <div className="text-sm text-white/70">Empresários</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="IMERSÃO IMPRELUX - Transformação de Negócios" 
                className="w-full h-auto rounded-2xl shadow-2xl glow-effect"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-white font-semibold text-sm">Ao vivo</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 card-gradient rounded-xl p-6 text-white animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold text-accent">25.000 Kz</div>
              <div className="text-sm opacity-80">Pacote Normal</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;