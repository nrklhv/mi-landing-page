import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <nav className="relative z-10 flex justify-between items-center px-8 py-6 backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-black tracking-tight">STUDIO</div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#work" className="hover:text-amber-400 transition-colors">Work</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>
      </nav>

      <section className="relative z-10 px-8 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fadeInUp">
            <div>
              <p className="text-amber-400 text-sm font-semibold tracking-widest mb-4">WELCOME TO</p>
              <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                Crafted for
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">excellence</span>
              </h1>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-md">
              We design and build digital experiences that transform your vision into reality. Clean code, thoughtful design, lasting impact.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-amber-500 text-slate-950 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 flex items-center gap-2 group">
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-lg hover:border-amber-400 hover:bg-white/5 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative h-96 lg:h-full animate-fadeInRight">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-2xl border border-amber-400/20 backdrop-blur-sm"></div>
            <div className="absolute top-12 right-12 w-24 h-24 bg-amber-400 rounded-lg rotate-12 opacity-20"></div>
            <div className="absolute bottom-20 left-8 w-32 h-32 border-2 border-amber-400/30 rounded-lg rotate-45"></div>
            <div className="absolute top-1/3 right-1/4 text-6xl font-black text-white/5">✨</div>
          </div>
        </div>
      </section>

      <section id="work" className="relative z-10 px-8 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black mb-16 tracking-tight">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Precision Design', desc: 'Every pixel matters. We obsess over details.' },
            { title: 'Fast & Scalable', desc: 'Built for performance from day one.' },
            { title: '24/7 Support', desc: 'We are here when you need us most.' }
          ].map((feature, i) => (
            <div key={i} className="p-8 border border-white/10 rounded-xl hover:border-amber-400/50 hover:bg-white/5 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 px-8 py-20 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 tracking-tight">Let's Work Together</h2>
          <p className="text-slate-400 text-lg">Send us a message and we'll respond as soon as possible.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all"
            />
          </div>
          
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={submitted}
            className="w-full py-4 bg-amber-500 text-slate-950 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {submitted ? (
              <>
                <Check size={20} />
                Message Sent!
              </>
            ) : (
              <>
                Send Message
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>
      </section>

      <footer className="relative z-10 border-t border-white/5 px-8 py-12 mt-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-slate-400">
          <p>© 2024 Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-amber-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-amber-400 transition-colors">GitHub</a>
          </div>
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

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.2s both;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
