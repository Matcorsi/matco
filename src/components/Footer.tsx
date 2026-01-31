import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-matco-bg border-t border-matco-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-matco-cream mb-2">MatCo</h2>
            <p className="text-matco-muted text-sm">
              Desarrollo de software & Estrategias digitales
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-matco-muted hover:text-matco-cream transition-colors">

              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-matco-muted hover:text-matco-cream transition-colors">

              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-matco-muted hover:text-matco-cream transition-colors">

              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-matco-muted hover:text-matco-cream transition-colors">

              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-matco-gray/50 text-center text-sm text-matco-muted">
          <p>&copy; {currentYear} MatCo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>);

}