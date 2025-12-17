const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <p className="font-display text-2xl text-foreground">KING KEBAB</p>
            <p className="text-sm text-muted-foreground">Los Alcázares</p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Aviso legal
            </a>
            <span className="text-border">·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Política de privacidad
            </a>
            <span className="text-border">·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} King Kebab Los Alcázares
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
