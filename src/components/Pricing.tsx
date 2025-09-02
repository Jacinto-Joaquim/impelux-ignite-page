import { Button } from "@/components/ui/button";

const Pricing = () => {
  const packages = [
    {
      name: "Pacote Normal",
      price: "25.000",
      originalPrice: "35.000",
      currency: "Kz",
      popular: false,
      features: [
        "Acesso aos 2 dias completos da imersão",
        "Material didático exclusivo (apostila)",
        "Bloco de notas personalizado",
        "Coffee break incluído",
        "Plano de ação de 30 dias",
        "Certificado de participação",
        "Networking com empreendedores"
      ],
      cta: "Escolher Pacote Normal",
      highlight: false
    },
    {
      name: "Pacote VIP",
      price: "35.000",
      originalPrice: "50.000",
      currency: "Kz",
      popular: true,
      features: [
        "Tudo do Pacote Normal +",
        "Sessão de consultoria individual pós-evento (1 mês)",
        "Plano de ação empresarial personalizado para 3 meses",
        "Acesso a grupo VIP exclusivo",
        "Material premium (kit executivo)",
        "Mentoria de acompanhamento",
        "Prioridade em futuros eventos",
        "Desconto em consultorias futuras"
      ],
      cta: "Escolher Pacote VIP",
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-secondary">
            Investimento e <span className="text-gradient">Pacotes</span>
          </h2>
          <div className="w-20 h-1 accent-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Escolha o pacote que melhor se adapta aos seus objetivos e comece sua 
            jornada de transformação hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 animate-scale-in ${
                pkg.highlight 
                  ? 'hero-gradient text-white shadow-2xl transform hover:scale-105 glow-effect' 
                  : 'card-gradient shadow-card hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="accent-gradient px-6 py-2 rounded-full text-sm font-bold text-accent-foreground">
                    🔥 MAIS POPULAR
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${pkg.highlight ? 'text-white' : 'text-secondary'}`}>
                  {pkg.name}
                </h3>
                
                <div className="mb-4">
                  <span className={`text-sm line-through ${pkg.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>
                    {pkg.originalPrice} {pkg.currency}
                  </span>
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <span className={`text-5xl font-black ${pkg.highlight ? 'text-accent' : 'text-primary'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-xl ml-2 ${pkg.highlight ? 'text-white' : 'text-muted-foreground'}`}>
                    {pkg.currency}
                  </span>
                </div>
                
                <p className={`text-sm ${pkg.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                  Investimento único • Resultados duradouros
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      pkg.highlight ? 'bg-accent' : 'bg-success'
                    }`}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className={`text-sm leading-relaxed ${
                      pkg.highlight ? 'text-white/90' : 'text-muted-foreground'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  pkg.highlight 
                    ? 'bg-white text-secondary hover:bg-white/90 shadow-lg'
                    : 'bg-primary hover:bg-primary-glow text-primary-foreground glow-effect'
                }`}
              >
                {pkg.cta}
              </Button>

              {/* Additional Info */}
              <div className="text-center mt-6">
                <p className={`text-sm ${pkg.highlight ? 'text-white/70' : 'text-muted-foreground'}`}>
                  Parcelamento disponível • Garantia de satisfação
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="card-gradient rounded-2xl p-8 max-w-4xl mx-auto shadow-card">
            <h3 className="text-2xl font-bold text-secondary mb-6">Formas de Pagamento</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-3">💳</div>
                <h4 className="font-semibold text-secondary mb-2">Transferência Bancária</h4>
                <p className="text-muted-foreground text-sm">
                  BAI: 0051 0000 5506 6625 1010 6<br/>
                  Titular: Edgar L. Capambo
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-semibold text-secondary mb-2">WhatsApp</h4>
                <p className="text-muted-foreground text-sm">
                  +244 924 114 831<br/>
                  Confirmação imediata
                </p>
              </div>
            </div>
            
            <p className="text-center text-muted-foreground">
              💡 <strong>Dica:</strong> Vagas limitadas! Garanta sua participação com pagamento antecipado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;