import { useState } from "react";
import { Phone, Mail } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Onde e quando acontecerá a IMERSÃO IMPRELUX?",
      answer: "A imersão acontece nos dias 10 e 17 de outubro, das 8h às 16h. O local será confirmado após a inscrição, com instalações de primeira classe para garantir o máximo conforto e foco no aprendizado."
    },
    {
      question: "Para quem é indicada esta imersão?",
      answer: "Para empreendedores, empresários, executivos e profissionais que desejam transformar seus negócios e alcançar resultados extraordinários. Ideal para quem busca crescimento acelerado e estratégias práticas."
    },
    {
      question: "O que está incluído no investimento?",
      answer: "O investimento inclui acesso aos 2 dias completos, material didático exclusivo, coffee breaks, certificado de participação, networking, e no pacote VIP: consultoria individual e mentoria de acompanhamento."
    },
    {
      question: "Posso parcelar o investimento?",
      answer: "Sim! Oferecemos opções de parcelamento flexível. Entre em contato via WhatsApp (+244 924 114 831) para conhecer as condições especiais e facilitar seu investimento."
    },
    {
      question: "E se eu não ficar satisfeito com o conteúdo?",
      answer: "Oferecemos garantia de satisfação. Se nos primeiros 30 minutos do primeiro dia você não estiver satisfeito com o conteúdo, devolvemos 100% do seu investimento, sem questionamentos."
    },
    {
      question: "Receberei certificado de participação?",
      answer: "Sim! Todos os participantes recebem certificado de participação digital e físico, validando as horas de treinamento e o conhecimento adquirido durante a imersão."
    },
    {
      question: "Qual a diferença entre os pacotes Normal e VIP?",
      answer: "O pacote VIP inclui tudo do Normal, plus: consultoria individual pós-evento, plano empresarial personalizado para 3 meses, acesso a grupo exclusivo, material premium e mentoria de acompanhamento."
    },
    {
      question: "Haverá suporte após a imersão?",
      answer: "Sim! Todos os participantes têm acesso a um grupo exclusivo para networking contínuo. Participantes VIP recebem mentoria individual e acompanhamento personalizado por até 3 meses."
    }
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Perguntas <span className="text-accent">Frequentes</span>
          </h2>
          <div className="w-20 h-1 accent-gradient mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Esclarecemos as principais dúvidas sobre a IMERSÃO IMPRELUX. 
            Não encontrou sua pergunta? Entre em contato conosco.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full text-left card-gradient rounded-xl p-6 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <span className="text-accent-foreground font-bold">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                }`}>
                  <p className="text-white/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="card-gradient rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-white/80 mb-6">
              Nossa equipe está pronta para esclarecer todas as suas questões 
              e ajudar você a escolher o melhor pacote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="accent-gradient text-accent-foreground font-semibold px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp: +244 924 114 831
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Enviar e-mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;