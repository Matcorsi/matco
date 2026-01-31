import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Mail, MessageSquare, User } from 'lucide-react';
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };
  return (
    <section
      id="contact"
      className="py-24 bg-matco-bg relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-matco-cream/20 to-transparent"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-matco-cream mb-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-matco-muted">
            ¿Listo para empezar? Cuéntanos sobre tu idea y te ayudaremos a
            hacerla realidad.
          </p>
        </div>

        <div className="bg-matco-gray rounded-2xl p-8 md:p-10 border border-matco-gray shadow-2xl">
          {submitted ?
          <div className="text-center py-12">
              <div className="w-16 h-16 bg-matco-cream/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-matco-cream" />
              </div>
              <h3 className="text-2xl font-bold text-matco-cream mb-2">
                ¡Mensaje enviado!
              </h3>
              <p className="text-matco-muted mb-8">
                Gracias por contactarnos. Te responderemos lo antes posible.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Enviar otro mensaje
              </Button>
            </div> :

          <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                htmlFor="name"
                className="block text-sm font-medium text-matco-cream mb-2">

                  Nombre
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-matco-muted" />
                  </div>
                  <input
                  type="text"
                  id="name"
                  required
                  className="block w-full pl-10 bg-matco-bg border border-matco-gray/50 rounded-lg py-3 text-matco-text placeholder-matco-muted/50 focus:ring-2 focus:ring-matco-cream focus:border-transparent transition-all outline-none"
                  placeholder="Tu nombre"
                  value={formState.name}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    name: e.target.value
                  })
                  } />

                </div>
              </div>

              <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-matco-cream mb-2">

                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-matco-muted" />
                  </div>
                  <input
                  type="email"
                  id="email"
                  required
                  className="block w-full pl-10 bg-matco-bg border border-matco-gray/50 rounded-lg py-3 text-matco-text placeholder-matco-muted/50 focus:ring-2 focus:ring-matco-cream focus:border-transparent transition-all outline-none"
                  placeholder="tu@email.com"
                  value={formState.email}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value
                  })
                  } />

                </div>
              </div>

              <div>
                <label
                htmlFor="message"
                className="block text-sm font-medium text-matco-cream mb-2">

                  Mensaje
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-matco-muted" />
                  </div>
                  <textarea
                  id="message"
                  required
                  rows={4}
                  className="block w-full pl-10 bg-matco-bg border border-matco-gray/50 rounded-lg py-3 text-matco-text placeholder-matco-muted/50 focus:ring-2 focus:ring-matco-cream focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={formState.message}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    message: e.target.value
                  })
                  } />

                </div>
              </div>

              <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}>

                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </form>
          }
        </div>
      </div>
    </section>);

}