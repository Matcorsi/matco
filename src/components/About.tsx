import React from 'react';
import { CheckCircle2 } from 'lucide-react';
export function About() {
  const benefits = [
  'Enfoque personalizado para cada cliente',
  'Tecnologías modernas y escalables',
  'Soporte continuo y mantenimiento',
  'Resultados medibles y transparentes'];

  return (
    <section id="about" className="py-24 bg-matco-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-matco-cream/10 rounded-full blur-2xl"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-matco-cream mb-6 relative z-10">
              Impulsando el futuro digital de tu empresa
            </h2>
            <p className="text-matco-muted text-lg mb-6 leading-relaxed">
              En MatCo, no solo escribimos código; construimos puentes entre tu
              visión y la realidad digital. Somos un equipo apasionado por la
              tecnología y el diseño, dedicados a crear soluciones que marcan la
              diferencia.
            </p>
            <p className="text-matco-muted text-lg mb-8 leading-relaxed">
              Entendemos que cada startup y negocio es único. Por eso, nos
              tomamos el tiempo para entender tus objetivos y diseñar una
              estrategia digital que se alinee perfectamente con tus metas de
              crecimiento.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) =>
              <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-matco-cream w-5 h-5 flex-shrink-0" />
                  <span className="text-matco-text text-sm">{benefit}</span>
                </div>
              )}
            </div>
          </div>

          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-matco-gray border border-matco-gray/50 flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-matco-cream/5 to-transparent"></div>
            <div className="relative z-10 text-center">
              <div className="text-6xl font-bold text-matco-cream mb-2">
                100%
              </div>
              <div className="text-matco-muted uppercase tracking-widest text-sm">
                Compromiso
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 border border-matco-cream/20 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 border border-matco-cream/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>);

}