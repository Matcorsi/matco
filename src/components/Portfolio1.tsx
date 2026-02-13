import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
type Category = 'All' | 'Web' | 'Apps' | 'Branding';
interface Project {
  id: number;
  title: string;
  category: Exclude<Category, 'All'>;
  image: string;
  description: string;
  technologies: string[];
}
const PROJECTS: Project[] = [
{
  id: 1,
  title: 'Granja Los Pibes',
  category: 'Web',
  image:
  'granja.png',
  description:
  'Desarrollo del sitio web oficial del Centro de Rescate de Fauna Silvestre de Granja Los Pibes.',
  technologies: ['React', 'TypeScript', 'D3.js', 'Node.js']
},
{
  id: 2,
  title: 'Lago del Fuerte',
  category: 'Apps',
  image:
  'lago.png',
  description:
  'Bajo el marco del proyecto "Conocer para Cuidar" se realizo esta app informativa sobre fauna silvestre en el Lago del Fuerte, trabajo realizado para Granja Los Pibes, El valle de los ciervos y el Municipio de Tandil.',
  technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit']
},
{
  id: 3,
  title: 'PDS - Kinesiologia',
  category: 'Web',
  image:
  'pds.png',
  description:
  'Pagina web realizada para licenciado en kinesiologia de la ciudad de La Plata.',
  technologies: ['React', 'Figma', 'Tailwinds']
},
{
  id: 4,
  title: 'Cre-ando',
  category: 'Web',
  image:
  'creando.png',
  description:
  'Desarrollo web para centro complementario para chicos y chicas de la ciudad de Tandil.',
  technologies: ['Next.js', 'Shopify API', 'Tailwind CSS', 'Stripe']
},
{
  id: 5,
  title: 'Tandil Drones',
  category: 'Web',
  image:
  'td1.png',
  description:
  'Desarrollo web para empresa de fotografia y grabacion con drones de la ciudad de Tandil.',
  technologies: ['Flutter', 'OpenAI API', 'Google Maps API']
},
{
  id: 6,
  title: 'Torneo - Club Union',
  category: 'Branding',
  image:
  'union.jpg',
  description:
  'Desarrollo de branding para torneo de futbol del Club Union',
  technologies: ['Canva', 'Figma', 'After Effects']
}
];

const CATEGORIES: Category[] = ['All', 'Web', 'Apps', 'Branding'];
export function Portfolio1() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const filteredProjects = PROJECTS.filter(
    (project) =>
    activeCategory === 'All' || project.category === activeCategory
  );
  const selectedProject = PROJECTS.find((p) => p.id === selectedId);
  return (
    <section id="portfolio" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start my-10 md:my-20py-24 bg-matco-bg relative py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-matco-cream mb-4">
              Trabajos realizados
            </h2>
            <p className="text-matco-muted max-w-2xl mx-auto">
              Una selección de productos digitales, marcas y experiencias creadas por nosotros.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) =>
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? 'bg-matco-cream text-matco-gray' : 'bg-matco-gray text-matco-cream hover:bg-matco-gray hover:text-white'}`}>
                {category}
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <AnimatePresence>
            {filteredProjects.map((project) =>
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.3
              }}
              onClick={() => setSelectedId(project.id)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-matco-gray">

                <motion.img
                layoutId={`image-${project.id}`}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 bg-matco-gray/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <motion.h3
                  layoutId={`title-${project.id}`}
                  className="text-xl font-bold text-white mb-1">

                    {project.title}
                  </motion.h3>
                  <p className="text-slate-200 text-sm">{project.category}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedId && selectedProject &&
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
              <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-matco-gray/80 backdrop-blur-md" />


              <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-4xl bg-matco-gray rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]">

                <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(null);
                }}
                className="absolute top-4 right-4 z-20 p-2 bg-matco-cream/20 hover:bg-matco-cream/40 rounded-full text-white transition-colors">

                  <X className="w-6 h-6" />
                </button>

                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <motion.img
                  layoutId={`image-${selectedProject.id}`}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover" />

                </div>

                <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto no-scrollbar">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-matco-cream/10 text-matco-cream text-xs font-semibold tracking-wider uppercase mb-4">
                      {selectedProject.category}
                    </span>
                    <motion.h3
                    layoutId={`title-${selectedProject.id}`}
                    className="text-3xl font-bold text-white mb-4">

                      {selectedProject.title}
                    </motion.h3>
                    <p className="text-matco-cream leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-matco-cream uppercase tracking-wider mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.technologies.map((tech) =>
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-matco-gray text-matco-cream text-sm border border-matco-muted">

                          {tech}
                        </span>
                    )}
                    </div>

                    <div className="flex gap-4">
                      <button className="flex-1 flex items-center justify-center gap-2 bg-matco-cream text-matco-bg py-3 rounded-lg font-semibold hover:bg-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </button>
                      <button className="flex items-center justify-center p-3 rounded-lg border border-matco-muted text-matco-cream hover:bg-matco-bg/50 transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          }
        </AnimatePresence>
      </div>
    </section>);

}