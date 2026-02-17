import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, MapPin, Phone, Mail, Menu, X, Home, Building2, ShoppingBag, Landmark } from 'lucide-react';

const navLinks = [
  { href: '#vision', label: 'VISION' },
  { href: '#ecosystem', label: 'ECOSYSTEM' },
  { href: '#lifestyle', label: 'LIFESTYLE' },
  { href: '#contact', label: 'CONTACT' },
];

const stats = [
  { value: '250K', label: 'SQUARE METERS' },
  { value: '12', label: 'TOWERS' },
  { value: '4', label: 'PUBLIC PLAZAS' },
  { value: '∞', label: 'POSSIBILITIES' },
];

const strategicItems = [
  { title: 'Metro Connected', desc: 'Direct access to Santiago\'s expanding transit network' },
  { title: 'Pedestrian Priority', desc: 'Streets designed for people, not cars' },
  { title: 'Green Corridors', desc: '40% of the masterplan dedicated to landscape' },
  { title: 'Smart Infrastructure', desc: 'Future-ready systems for sustainable urban life' },
];

const ecosystemItems = [
  { icon: Home, title: 'Residential', desc: 'From intimate apartments to expansive penthouses, residences crafted for those who demand the exceptional.' },
  { icon: Building2, title: 'Class A Offices', desc: 'Workspaces that inspire. Headquarters designed for companies shaping tomorrow\'s industries.' },
  { icon: ShoppingBag, title: 'Experiential Retail', desc: 'Not shopping, but discovery. A curated collection of brands, artisans, and experiences.' },
  { icon: Landmark, title: 'Cultural Anchor', desc: 'Art, performance, gathering. Public spaces that pulse with the city\'s creative energy.' },
];

const designPrinciples = [
  'Adaptive public spaces',
  'Biophilic integration',
  'LEED Platinum certification',
  'Climate-responsive facades',
  'Human-scale ground planes',
];

const lifestyleItems = [
  { title: 'Gastronomy', desc: 'Chef-driven concepts' },
  { title: 'Wellness', desc: 'Mind and body sanctuaries' },
  { title: 'Culture', desc: 'Gallery and performance' },
  { title: 'Community', desc: 'Curated events' },
];

const areaOfInterestOptions = [
  { value: '', label: 'Select area of interest' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'retail', label: 'Retail' },
  { value: 'investment', label: 'Investment' },
  { value: 'general', label: 'General inquiry' },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    areaOfInterest: '',
  });
  const [formState, setFormState] = useState('idle');
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

    ['vision', 'urban-scale', 'ecosystem', 'architecture', 'lifestyle', 'investment', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim()) return;

    setFormState('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setFormState('sent');
    setFormData({ email: '', areaOfInterest: '' });
    setTimeout(() => setFormState('idle'), 5000);
  };

  const fadeIn = (id) =>
    visibleSections[id]
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8';

  return (
    <div className="min-h-screen bg-dark text-white font-sans antialiased overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-dark-border transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" onClick={(e) => handleSmoothScroll(e, '#hero')} className="text-xl font-semibold tracking-tight text-white hover:text-gold transition-colors">
              VILLAGE
            </a>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-xs font-medium tracking-widest text-gray-400 hover:text-white transition-colors uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="hidden md:inline-flex px-6 py-2.5 border border-gold text-white text-xs font-medium tracking-widest uppercase hover:bg-gold/10 transition-colors"
            >
              INQUIRE
            </a>

            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-dark-border bg-dark py-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block py-3 text-gray-400 hover:text-white font-medium tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="block mt-4 py-3 text-gold font-medium tracking-widest uppercase"
            >
              INQUIRE
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2074)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-32">
          <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-6 animate-fadeInUp">
            Santiago de Chile
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">A New Chapter</span>
            <br />
            <span className="text-gold">in Urban Living</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Village is not a building. It is the emergence of a new urban district—where architecture, culture, commerce, and community converge to redefine how we experience the city.
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <a
              href="#vision"
              onClick={(e) => handleSmoothScroll(e, '#vision')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-semibold text-xs tracking-widest uppercase hover:bg-gold-light transition-all duration-300"
            >
              Begin Your Journey
            </a>
            <a
              href="#vision"
              onClick={(e) => handleSmoothScroll(e, '#vision')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold text-white text-xs font-medium tracking-widest uppercase hover:bg-gold/10 transition-all duration-300"
            >
              Explore the Vision
            </a>
          </div>
        </div>
        <a
          href="#vision"
          onClick={(e) => handleSmoothScroll(e, '#vision')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-xs tracking-[0.3em] uppercase hover:text-white transition-colors"
        >
          Discover
        </a>
      </section>

      {/* The Vision */}
      <section id="vision" className={`py-24 md:py-32 px-6 transition-all duration-700 ${fadeIn('vision')}`}>
        <div className="max-w-7xl mx-auto">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">The Vision</span>
          <div className="grid lg:grid-cols-12 gap-12 mt-4 mb-16">
            <h2 className="lg:col-span-5 font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Where the city <em className="italic">finds its soul</em>
            </h2>
            <div className="lg:col-span-7 space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                Village emerges as Santiago's answer to the world's most celebrated urban districts. A masterfully orchestrated composition of architecture, public space, and human experience that transcends conventional real estate to become a true urban destination.
              </p>
              <p>
                Here, the boundaries between living, working, and leisure dissolve into a seamless choreography of daily life. This is not simply development—it is the deliberate creation of a place that will shape Santiago's identity for generations.
              </p>
            </div>
          </div>
          <div className="border-t border-dark-border pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <p className="font-serif text-4xl md:text-5xl font-bold text-gold">{stat.value}</p>
                  <p className="text-gray-500 text-xs tracking-widest uppercase mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urban Scale */}
      <section id="urban-scale" className={`py-24 md:py-32 px-6 bg-dark-lighter transition-all duration-700 ${fadeIn('urban-scale')}`}>
        <div className="max-w-7xl mx-auto">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Urban Scale</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-12 leading-tight">
            A City Within the City
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mb-16 leading-relaxed">
            Village occupies a privileged position at the nexus of Santiago's most dynamic corridors. Its masterplan is conceived not as isolated structures, but as an integrated urban fabric—a complete neighborhood with its own rhythm, its own identity, its own gravitational pull.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategicItems.map((item) => (
              <div key={item.title} className="border-l border-gold/50 pl-6">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section id="ecosystem" className={`py-24 md:py-32 px-6 transition-all duration-700 ${fadeIn('ecosystem')}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">The Ecosystem</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
                Live. Work. <em className="italic text-gold">Discover.</em>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                Village dissolves the artificial barriers between how we live and how we spend our time. Within steps, transition from home to office, from café to gallery, from solitude to celebration.
              </p>
              <div className="space-y-8">
                {ecosystemItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 border border-gold/50 flex items-center justify-center">
                        <Icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-dark-lighter border border-dark-border overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                  alt="Village workspaces"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-dark/90 backdrop-blur px-6 py-4 max-w-xs">
                <p className="text-white font-serif italic text-lg">"The city's new gravitational center"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Design */}
      <section id="architecture" className={`py-24 md:py-32 px-6 bg-dark-lighter transition-all duration-700 ${fadeIn('architecture')}`}>
        <div className="max-w-7xl mx-auto">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Architecture & Design</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-8 leading-tight">
            Icons do not imitate. <em className="italic">They define.</em>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mb-12 leading-relaxed">
            Village's architecture emerges from a singular conviction: that great buildings serve as more than shelter—they become landmarks of collective memory, markers of a city's ambition, and catalysts for the life that unfolds around them.
          </p>
          <p className="text-gray-400 leading-relaxed mb-12">
            World-renowned architectural practices have been engaged to create a cohesive yet diverse urban landscape. Each tower, each plaza, each passage has been conceived as both individual expression and contribution to the greater whole.
          </p>
          <div>
            <h3 className="text-white font-semibold mb-4">Design Principles</h3>
            <ul className="space-y-2">
              {designPrinciples.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-400">
                  <span className="w-1 h-1 bg-gold rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Lifestyle */}
      <section id="lifestyle" className={`py-24 md:py-32 px-6 transition-all duration-700 ${fadeIn('lifestyle')}`}>
        <div className="max-w-7xl mx-auto">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">The Lifestyle</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-12 leading-tight">
            Where every moment matters
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mb-16 leading-relaxed">
            Village is alive. From dawn yoga on terraced gardens to late-night conversations at intimate wine bars, the district pulses with an energy that belongs to the world's great urban destinations.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {lifestyleItems.map((item) => (
              <div key={item.title} className="border border-dark-border p-8 hover:border-gold/50 transition-colors">
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Vision */}
      <section id="investment" className={`py-24 md:py-32 px-6 bg-dark-lighter transition-all duration-700 ${fadeIn('investment')}`}>
        <div className="max-w-7xl mx-auto">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Investment Vision</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-12 leading-tight">
            Build wealth. <em className="italic text-gold">Build legacy.</em>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mb-16 leading-relaxed">
            Village represents a rare convergence of factors that sophisticated investors recognize: irreplaceable location, institutional-quality development, emerging district premiums, and the structural appreciation that follows transformative urban projects worldwide.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-3">Strategic Appreciation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                First-mover advantage in Santiago's next premier address. District-level appreciation historically outperforms isolated developments.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Diversified Revenue</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Multiple asset classes within a single investment ecosystem. Residential, commercial, and retail opportunities under unified management.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Institutional Quality</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                International development standards. World-class architecture. Professional asset management. Transparent governance structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join / Contact */}
      <section id="contact" className={`py-24 md:py-32 px-6 transition-all duration-700 ${fadeIn('contact')}`}>
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Begin</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
            Join the future <em className="italic">of Santiago</em>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Register your interest to receive exclusive project updates, priority access to releases, and invitations to private presentations.
          </p>
          <blockquote className="font-serif italic text-gold text-xl mb-16">
            "This is not a project. This is the city we've been waiting for."
          </blockquote>

          {formState === 'sent' ? (
            <div className="bg-dark-lighter border border-gold/50 p-12">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-dark" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Thank you</h3>
              <p className="text-gray-400">We'll be in touch with exclusive updates and invitations.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left space-y-6">
              <div>
                <label htmlFor="areaOfInterest" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                  Area of Interest
                </label>
                <select
                  id="areaOfInterest"
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-dark-lighter border border-dark-border text-white focus:border-gold focus:outline-none transition-colors"
                >
                  {areaOfInterestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-dark-lighter border border-dark-border text-white placeholder-gray-600 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={formState === 'sending'}
                className="w-full py-4 bg-gold text-dark font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === 'sending' ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Request Information'
                )}
              </button>
              <p className="text-gray-500 text-xs text-center">
                By submitting, you agree to receive communications from Village Santiago.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xl font-semibold text-white">VILLAGE</span>
          <div className="flex items-center gap-8">
            <a href="mailto:contacto@village.cl" className="flex items-center gap-2 text-gray-500 hover:text-gold transition-colors text-sm">
              <Mail size={16} />
              contacto@village.cl
            </a>
            <a href="tel:+56221234567" className="flex items-center gap-2 text-gray-500 hover:text-gold transition-colors text-sm">
              <Phone size={16} />
              +56 2 2123 4567
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Village Santiago. All rights reserved.
        </p>
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
