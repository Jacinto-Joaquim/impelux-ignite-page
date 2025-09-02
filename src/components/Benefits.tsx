import { Target, Phone } from "lucide-react";
import networkingIcon from "@/assets/networking-icon.jpg";
import strategyIcon from "@/assets/strategy-icon.jpg";
import mentorshipIcon from "@/assets/mentorship-icon.jpg";
import transformationIcon from "@/assets/transformation-icon.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: networkingIcon,
      title: "Networking de Alto Nível",
      description: "Conecte-se com empreendedores e empresários de sucesso, criando parcerias estratégicas que vão impulsionar seu negócio.",
      color: "primary"
    },
    {
      icon: strategyIcon,
      title: "Estratégias Práticas e Aplicáveis",
      description: "Metodologias testadas e comprovadas que você pode implementar imediatamente para transformar seus resultados.",
      color: "accent"
    },
    {
      icon: mentorshipIcon,
      title: "Mentoria Especializada",
      description: "Acesso direto a especialistas que já alcançaram o sucesso e estão prontos para acelerar sua jornada empresarial.",
      color: "success"
    },
    {
      icon: transformationIcon,
      title: "Inspiração e Clareza",
      description: "Saia com uma visão cristalina do seu futuro e a motivação necessária para alcançar resultados extraordinários.",
      color: "warning"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-secondary">
            O que você vai <span className="text-gradient">conquistar</span>
          </h2>
          <div className="w-20 h-1 accent-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada momento da imersão foi cuidadosamente planejado para maximizar seu crescimento 
            e entregar resultados tangíveis que vão transformar sua realidade empresarial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-${benefit.color} rounded-full animate-pulse`}></div>
              </div>
              
              <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="card-gradient rounded-3xl p-10 max-w-4xl mx-auto shadow-card">
            <h3 className="text-3xl font-bold text-secondary mb-4">
              Pronto para transformar sua realidade?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Não deixe esta oportunidade única passar. Vagas limitadas para garantir 
              a qualidade e exclusividade da experiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 glow-effect flex items-center justify-center">
                <Target className="w-5 h-5 mr-2" />
                Quero participar da IMERSÃO
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Falar com consultor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;