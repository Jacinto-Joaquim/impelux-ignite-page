const Footer = () => {
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
                <span className="text-white">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors duration-300">
                <span className="text-white">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors duration-300">
                <span className="text-white">🐦</span>
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
                <span className="text-accent">📞</span>
                <span className="text-white/80">+244 924 114 831</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-accent">✉️</span>
                <span className="text-white/80">contato@imprelux.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-accent">📍</span>
                <span className="text-white/80">Luanda, Angola</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-accent">🕒</span>
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
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-accent transition-colors duration-300"
              />
              <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2 rounded-lg transition-colors duration-300">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 IMPRELUX. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;