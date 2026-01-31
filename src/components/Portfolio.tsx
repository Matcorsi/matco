import { ArrowUpRight } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  height: 'short' | 'medium' | 'tall';
}
const PROJECTS: Project[] = [
{
  id: 1,
  title: 'Casa Moderna',
  category: 'Arquitectura',
  image: 'granja.png',
  height: 'tall'
},
{
  id: 2,
  title: 'Revista Cultural',
  category: 'Editorial',
  image: 'lago.png',
  height: 'short'
},
{
  id: 3,
  title: 'Café Botánico',
  category: 'Branding',
  image: 'https://picsum.photos/id/42/800/800',
  height: 'medium'
},
{
  id: 4,
  title: 'App Financiera',
  category: 'UI/UX',
  image: 'https://picsum.photos/id/48/800/1200',
  height: 'tall'
},
{
  id: 5,
  title: 'Muebles Artesanales',
  category: 'E-commerce',
  image: 'https://picsum.photos/id/59/800/600',
  height: 'short'
},
{
  id: 6,
  title: 'Museo de Arte',
  category: 'Identidad',
  image: 'https://picsum.photos/id/60/800/900',
  height: 'medium'
},
{
  id: 7,
  title: 'Vino Reserva',
  category: 'Packaging',
  image: 'https://picsum.photos/id/76/800/1100',
  height: 'tall'
},
{
  id: 8,
  title: 'Festival de Jazz',
  category: 'Cartelería',
  image: 'https://picsum.photos/id/89/800/700',
  height: 'medium'
},
{
  id: 9,
  title: 'Estudio Cerámica',
  category: 'Fotografía',
  image: 'https://picsum.photos/id/96/800/600',
  height: 'short'
}];

export function Portfolio() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start my-10 md:my-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-matco-accent font-semibold tracking-widest uppercase text-sm mb-2 block">
              Portafolio
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-matco-cream tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
              Proyectos Seleccionados
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-matco-black font-medium hover:text-matco-accent transition-colors mt-4 md:mt-0">
            Ver todos los proyectos <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Masonry Grid using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {PROJECTS.map((project) =>
          <div
            key={project.id}
            className="group relative break-inside-avoid rounded-xl overflow-hidden bg-matco-charcoal cursor-pointer">

              <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              loading="lazy" />


              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-matco-black/90 via-matco-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-matco-accent/90 text-white text-xs font-medium rounded-full mb-3 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <button className="flex items-center gap-2 text-white font-medium text-sm hover:text-matco-accent transition-colors">
                    Ver proyecto <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-matco-black text-white rounded-lg font-medium hover:bg-matco-charcoal transition-colors">
            Ver todos los proyectos <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>);

}