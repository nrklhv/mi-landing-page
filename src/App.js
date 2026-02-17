import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, MapPin, Phone, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#masterplan', label: 'Masterplan' },
  { href: '#residencial', label: 'Residencial' },
  { href: '#contacto', label: 'Contacto' },
];

const torres = [
  {
    name: 'VILA PREMIUM',
    desc: 'Apartamentos de lujo con acabados de primera línea y vistas panorámicas.',
    hab: '2-4 dormitorios',
    desde: 'UF 3.200',
    accent: 'forest',
  },
  {
    name: 'VILA SMART',
    desc: 'Apartamentos modernos con tecnología inteligente y diseño funcional.',
    hab: '1-3 dormitorios',
    desde: 'UF 2.100',
    accent: 'navy',
  },
  {
    name: 'VILA VERDE',
    desc: 'Apartamentos eco-friendly con certificación sustentable y áreas verdes.',
    hab: '2-3 dormitorios',
    desde: 'UF 2.650',
    accent: 'forest',
  },
];

const amenidades = [
  { icon: '🏋️', title: 'Gym de clase mundial', desc: 'Equipamiento premium' },
  { icon: '🏊', title: 'Piscina infinity', desc: 'Vistas panorámicas' },
  { icon: '💻', title: 'Coworking', desc: 'Espacios de trabajo' },
  { icon: '🌿', title: 'Áreas verdes', desc: 'Parques y jardines' },
  { icon: '🛡️', title: 'Seguridad 24/7', desc: 'Control de acceso' },
  { icon: '🅿️', title: 'Parqueadero automatizado', desc: 'Estacionamiento seguro' },
  { icon: '🛋️', title: 'Lounge', desc: 'Área de esparcimiento' },
  { icon: '☀️', title: 'Terraza', desc: 'Zona BBQ y eventos' },
];

const consultaOptions = [
  { value: '', label: 'Seleccione tipo de consulta' },
  { value: 'pre-venta', label: 'Pre-venta' },
  { value: 'consulta-general', label: 'Consulta general' },
  { value: 'agendar-cita', label: 'Agendar cita' },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    consulta: '',
    mensaje: '',
  });
  const [formState, setFormState] = useState('idle'); // idle | sending | sent | error
  const [visibleSections, setVisibleSections] = useState({});

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    ['masterplan', 'residencial', 'amenidades', 'ubicacion', 'contacto'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { nombre, email, telefono, consulta, mensaje } = formData;
    if (!nombre.trim()) return false;
    if (!email.trim()) return false;
    if (!telefono.trim()) return false;
    if (!consulta) return false;
    if (!mensaje.trim()) return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormState('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setFormState('sent');
    setFormData({ nombre: '', email: '', telefono: '', consulta: '', mensaje: '' });

    setTimeout(() => setFormState('idle'), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" onClick={(e) => handleSmoothScroll(e, '#hero')} className="text-2xl font-bold tracking-tight text-navy hover:text-forest transition-colors">
              VILLAGE
            </a>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-sm font-medium text-slate-modern hover:text-forest transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-2 text-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white py-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block py-2 text-slate-modern hover:text-forest font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-slate-modern" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-forest rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-forest-light rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fadeInUp">
            Vive la innovación en Santiago
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            VILLAGE: donde la calidad de vida se encuentra con la modernidad
          </p>
          <a
            href="#masterplan"
            onClick={(e) => handleSmoothScroll(e, '#masterplan')}
            className="inline-flex items-center gap-2 px-10 py-4 bg-forest text-white font-semibold rounded-lg hover:bg-forest-light transition-all duration-300 shadow-lg hover:shadow-xl group animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            Explorar Proyecto
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Masterplan */}
      <section
        id="masterplan"
        className={`py-24 md:py-32 px-6 transition-all duration-700 ${visibleSections.masterplan ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-forest font-semibold text-sm tracking-wider uppercase mb-4">El Proyecto</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">Masterplan</h2>
              <p className="text-lg text-slate-modern leading-relaxed mb-6">
                Un entorno cuidadosamente diseñado de 12 hectáreas donde conviven residencias premium, espacios verdes y amenidades de clase mundial. Ubicado en el corazón de Santiago.
              </p>
              <p className="text-slate-modern leading-relaxed">
                Cada detalle ha sido pensado para ofrecerte una experiencia de vida excepcional: desde la ubicación privilegiada hasta la calidad de las terminaciones. VILLAGE no es solo un lugar donde vivir, es un estilo de vida.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy/10 to-forest/10 rounded-2xl border border-gray-200 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="mx-auto mb-4 text-forest" size={64} />
                  <p className="text-navy font-semibold text-lg">Vista del Masterplan</p>
                  <p className="text-slate-modern text-sm mt-2">Santiago, Chile</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 max-w-xs mx-auto">
                    <div className="bg-white/80 rounded-lg p-3 shadow-sm">
                      <p className="text-2xl font-bold text-forest">12</p>
                      <p className="text-xs text-slate-modern">Hectáreas</p>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3 shadow-sm">
                      <p className="text-2xl font-bold text-forest">3</p>
                      <p className="text-xs text-slate-modern">Torres</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residencial */}
      <section
        id="residencial"
        className="py-24 md:py-32 px-6 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-forest font-semibold text-sm tracking-wider uppercase mb-4">Residencial</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Nuestras Torres</h2>
            <p className="text-lg text-slate-modern max-w-2xl mx-auto">Descubre las diferentes opciones que VILLAGE tiene para ti</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {torres.map((torre, i) => (
              <div
                key={torre.name}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 ${visibleSections.residencial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${torre.accent === 'forest' ? 'from-forest to-forest-dark' : 'from-navy to-navy-dark'} flex items-center justify-center`}>
                  <span className="text-6xl text-white/30 font-bold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-2">{torre.name}</h3>
                  <p className="text-slate-modern mb-4">{torre.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-forest/10 text-forest text-sm rounded-full">{torre.hab}</span>
                  </div>
                  <p className="text-navy font-bold text-lg">Desde {torre.desde}</p>
                  <a
                    href="#contacto"
                    onClick={(e) => handleSmoothScroll(e, '#contacto')}
                    className="inline-flex items-center gap-2 mt-4 text-forest font-semibold hover:gap-3 transition-all"
                  >
                    Más información
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenidades */}
      <section
        id="amenidades"
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-forest font-semibold text-sm tracking-wider uppercase mb-4">Amenidades</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Vida premium</h2>
            <p className="text-lg text-slate-modern max-w-2xl mx-auto">Todo lo que necesitas para una vida moderna y equilibrada</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenidades.map((item, i) => (
              <div
                key={item.title}
                className={`p-6 rounded-xl border border-gray-200 bg-white hover:border-forest/30 hover:shadow-lg transition-all duration-300 group ${visibleSections.amenidades ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-navy mb-1 group-hover:text-forest transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-modern">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section
        id="ubicacion"
        className="py-24 md:py-32 px-6 bg-navy text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-forest-light font-semibold text-sm tracking-wider uppercase mb-4">Ubicación</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">En el corazón de Santiago</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                VILLAGE está ubicado en una de las zonas más privilegiadas de Santiago, con excelente conectividad y cercanía a los principales centros comerciales, colegios, clínicas y zonas de esparcimiento.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={24} className="text-forest flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Av. Las Condes 12.000</p>
                    <p className="text-white/80 text-sm">Las Condes, Santiago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <span className="text-forest">⏱</span>
                  </div>
                  <div>
                    <p className="font-semibold">Proximidad</p>
                    <p className="text-white/80 text-sm">10 min Costanera Center • 5 min Mall Plaza • 8 min Clínica Alemana</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                <MapPin size={120} className="text-forest/40" />
                <p className="absolute text-white/60 text-sm">Zona Las Condes, Santiago</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="py-24 md:py-32 px-6 bg-gray-50"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-forest font-semibold text-sm tracking-wider uppercase mb-4">Contacto</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">¿Listo para conocer VILLAGE?</h2>
            <p className="text-lg text-slate-modern">Completa el formulario y nos pondremos en contacto contigo</p>
          </div>

          {formState === 'sent' ? (
            <div className="bg-forest/10 border border-forest/30 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">¡Mensaje enviado!</h3>
              <p className="text-slate-modern">Gracias por contactarnos. Un asesor se comunicará contigo pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-navy mb-2">Nombre completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleFormChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-navy mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleFormChange}
                  required
                  placeholder="+56 9 1234 5678"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                />
              </div>
              <div>
                <label htmlFor="consulta" className="block text-sm font-medium text-navy mb-2">Tipo de consulta</label>
                <select
                  id="consulta"
                  name="consulta"
                  value={formData.consulta}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white"
                >
                  {consultaOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-navy mb-2">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleFormChange}
                  required
                  rows="5"
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all resize-none bg-white"
                />
              </div>
              <button
                type="submit"
                disabled={formState === 'sending'}
                className="w-full py-4 bg-forest text-white font-semibold rounded-lg hover:bg-forest-light transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === 'sending' ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold">VILLAGE</div>
            <div className="flex gap-10">
              <a href="#masterplan" onClick={(e) => handleSmoothScroll(e, '#masterplan')} className="hover:text-forest-light transition-colors">Masterplan</a>
              <a href="#residencial" onClick={(e) => handleSmoothScroll(e, '#residencial')} className="hover:text-forest-light transition-colors">Residencial</a>
              <a href="#amenidades" onClick={(e) => handleSmoothScroll(e, '#amenidades')} className="hover:text-forest-light transition-colors">Amenidades</a>
              <a href="#ubicacion" onClick={(e) => handleSmoothScroll(e, '#ubicacion')} className="hover:text-forest-light transition-colors">Ubicación</a>
              <a href="#contacto" onClick={(e) => handleSmoothScroll(e, '#contacto')} className="hover:text-forest-light transition-colors">Contacto</a>
            </div>
          </div>
          <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <a href="mailto:contacto@village.cl" className="flex items-center gap-2 hover:text-forest-light transition-colors">
                <Mail size={18} />
                contacto@village.cl
              </a>
              <a href="tel:+56221234567" className="flex items-center gap-2 hover:text-forest-light transition-colors">
                <Phone size={18} />
                +56 2 2123 4567
              </a>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-forest-light transition-colors" aria-label="Instagram">Instagram</a>
              <a href="#" className="hover:text-forest-light transition-colors" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" className="hover:text-forest-light transition-colors" aria-label="Facebook">Facebook</a>
            </div>
          </div>
          <p className="mt-8 text-center text-white/60 text-sm">© {new Date().getFullYear()} VILLAGE Santiago. Todos los derechos reservados.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}
