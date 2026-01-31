import React from 'react';
import { Code, Share2, Globe, ArrowUpRight } from 'lucide-react';
const services = [
{
  title: 'Desarrollo Web',
  description:
  'Creamos sitios web modernos, rápidos y optimizados para tu negocio. Desde landing pages hasta aplicaciones web complejas.',
  icon: Code
},
{
  title: 'Manejo de Redes Sociales',
  description:
  'Gestionamos tu presencia en redes para conectar con tu audiencia, crear comunidad y aumentar el alcance de tu marca.',
  icon: Share2
},
{
  title: 'Presencia en Línea',
  description:
  'Estrategias digitales integrales para destacar tu marca en internet, mejorar tu SEO y posicionarte frente a la competencia.',
  icon: Globe
}];

export function Services() {
  return (
    <section id="services" className="py-24 bg-matco-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-matco-cream mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-matco-muted max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para escalar tu negocio en el
            mundo digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <div
            key={index}
            className="group p-8 rounded-2xl bg-matco-gray border border-matco-gray hover:border-matco-cream/30 transition-all duration-300 hover:-translate-y-1">

              <div className="w-12 h-12 bg-matco-bg rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-matco-gray">
                <service.icon className="text-matco-cream w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-matco-cream mb-3 flex items-center justify-between">
                {service.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-matco-muted" />
              </h3>

              <p className="text-matco-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}