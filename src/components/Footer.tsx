import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    const [showToast, setShowToast] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Função para enviar o formulário via fetch e mostrar o toast
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    await fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfqQJhPyPc5Vus5m57mIhxdgNQ0bfvgXqxeY1sF1oPBguvR0A/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );
    form.reset();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-gradient mb-4">IMPRELUX</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Transformando negócios simples em empresas sólidas e lucrativas através 
              de imersões práticas e estratégias comprovadas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-white/80 hover:text-accent transition-colors duration-300">Sobre a Imersão</a></li>
              <li><a href="#beneficios" className="text-white/80 hover:text-accent transition-colors duration-300">Benefícios</a></li>
              <li><a href="#instrutor" className="text-white/80 hover:text-accent transition-colors duration-300">Instrutor</a></li>
              <li><a href="#pacotes" className="text-white/80 hover:text-accent transition-colors duration-300">Pacotes</a></li>
              <li><a href="#faq" className="text-white/80 hover:text-accent transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">+244 924 114 831</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80">contato@imprelux.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/80">Luanda, Angola</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-white/80">Seg-Sex: 8h-18h</span>
              </li>
            </ul>
          </div>

      {/* Newsletter */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-accent">Newsletter</h4>
                  <p className="text-white/80 text-sm mb-4">
                    Receba dicas exclusivas e seja o primeiro a saber sobre novos eventos.
                  </p>
                  <form
                    ref={formRef}
                    onSubmit={handleNewsletterSubmit}
                    className="space-y-3"
                  >
                    <input
                      type="email"
                      name="entry.1961469268"
                      required
                      placeholder="Seu melhor e-mail"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-accent transition-colors duration-300"
                    />
                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2 rounded-lg transition-colors duration-300"
                    >
                      Inscrever-se
                    </button>
                  </form>
                  {showToast && (
                    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-success-gradient text-success-foreground px-6 py-3 rounded-xl shadow-lg z-50 font-semibold animate-fade-in-up">
                      E-mail cadastrado com sucesso!
                    </div>
                  )}
                </div>
              </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 IMPRELUX. Todos os direitos reservados.
            </div>
        <div className="flex space-x-6 text-sm">
          <span className="text-white/80 font-semibold">Garanta sua vaga!</span>
          <span className="text-white/80 font-semibold">Transforme seu negócio!</span>
          <span className="text-white/80 font-semibold">Últimas vagas disponíveis!</span>
        </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;