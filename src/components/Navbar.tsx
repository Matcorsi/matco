import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-matco-bg/90 backdrop-blur-md border-b border-matco-gray py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection('hero')}>

            <span className="text-2xl font-bold text-matco-cream tracking-tight">
              MatCo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-matco-muted hover:text-matco-cream transition-colors text-sm font-medium">

              Servicios
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-matco-muted hover:text-matco-cream transition-colors text-sm font-medium">

              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-matco-muted hover:text-matco-cream transition-colors text-sm font-medium">

              Trabajos
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('contact')}>

              Contáctanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-matco-cream p-2"
              aria-label="Menu">

              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 right-0 bg-matco-bg border-b border-matco-gray p-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            <button
            onClick={() => scrollToSection('services')}
            className="text-matco-cream font-medium py-2 hover:bg-matco-gray rounded px-2 text-left">

              Servicios
            </button>
            <button
            onClick={() => scrollToSection('about')}
            className="text-matco-cream font-medium py-2 hover:bg-matco-gray rounded px-2 text-left">

              Nosotros
            </button>
            <button
            onClick={() => scrollToSection('portfolio')}
            className="text-matco-cream font-medium py-2 hover:bg-matco-gray rounded px-2 text-left">

              Trabajos
            </button>
            <Button
            variant="primary"
            className="w-full"
            onClick={() => scrollToSection('contact')}>

              Contáctanos
            </Button>
          </div>
        </div>
      }
    </nav>);

}