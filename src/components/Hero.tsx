import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-5 md:pt-20 overflow-hidden">
        
      <a href="https://walink.co/fa3ab2"><img className="fixed bottom-[55px] right-[40px] w-[60px] h-[60px] rounded-full shadow-lg z-[1000] animate-soft-pulse hover:scale-110 transition-transform" src="whatsapp-flotante.png" alt="whatsapp"/></a>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-matco-bg z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-matco-cream/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-matco-cream/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in flex flex-col items-center">
          <img
            src="/matc.png"
            alt="MatCo Logo"
            className="w-44 h-44 mb-8 rounded-full shadow-2xl border-2 border-matco-gray" />


          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-matco-cream tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Transformamos ideas en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-matco-cream to-matco-muted">
              soluciones digitales
            </span>
          </h1>

          <p className="text-lg md:text-xl text-matco-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Impulsamos tu negocio con desarrollo de software a medida,
            estrategias de redes sociales y una presencia en línea sólida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToContact}
              className="group min-w-[160px]">

              Empezar ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
              document.getElementById('services')?.scrollIntoView({
                behavior: 'smooth'
              })
              }
              className="min-w-[160px]">

              Ver servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center transform -translate-x-1/2 animate-bounce text-matco-muted">
        <div className="w-6 h-10 border-2 border-matco-muted rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-matco-muted rounded-full"></div>
        </div>
      </div>
    </section>);

}