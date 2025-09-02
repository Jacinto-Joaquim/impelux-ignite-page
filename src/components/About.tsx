import { Target, Rocket, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-secondary">
              Sobre a <span className="text-gradient">Imersão</span>
            </h2>
            <div className="w-20 h-1 accent-gradient mx-auto mb-8"></div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Mais que um evento, uma experiência de transformação prática e profunda.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="card-gradient rounded-2xl p-8 shadow-card animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Foco em Resultados</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Estratégias testadas e aprovadas que você pode implementar imediatamente 
                  em seu negócio para gerar resultados concretos.
                </p>
              </div>
              
              <div className="card-gradient rounded-2xl p-8 shadow-card animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Transformação Acelerada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  2 dias intensivos que vão comprimir anos de aprendizado em uma 
                  experiência única e transformadora.
                </p>
              </div>
              
              <div className="card-gradient rounded-2xl p-8 shadow-card animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Networking de Alto Nível</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conecte-se com empreendedores e empresários que compartilham 
                  da mesma visão de crescimento e excelência.
                </p>
              </div>
              
              <div className="card-gradient rounded-2xl p-8 shadow-card animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Mentoria Exclusiva</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acesso direto a especialistas que já trilharam o caminho do sucesso 
                  e estão prontos para acelerar sua jornada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;