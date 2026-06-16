import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
  return (
    <main className={`min-h-screen bg-gray-50 text-black selection:bg-[#F58220]/20 selection:text-[#F58220] ${inter.className}`} style={{ colorScheme: 'light' }}>
      
      {/* NAVIGATION */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <img src="/logo-header.jpg" alt="HelloVA Logo" className="h-16 md:h-24 lg:h-28 w-auto object-contain shrink-0" />
          </a>
          <div className="hidden md:flex gap-4 font-semibold text-sm">
            <a href="/" className="hover:text-[#F58220] transition-colors">Home</a>
            <a href="/services" className="hover:text-[#F58220] transition-colors">Services</a>
            <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] hover:bg-[#d66f1b] text-white px-5 py-2 rounded shadow-md font-bold transition-colors">Book a Call</a>
          </div>
          <details className="md:hidden group">
            <summary className="list-none cursor-pointer p-2 text-black focus:outline-none">
              <svg className="w-8 h-8 block group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              <svg className="w-8 h-8 hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </summary>
            <div className="absolute top-[100%] left-0 w-full bg-white border-b border-gray-200 px-6 py-8 flex flex-col gap-6 text-lg font-bold text-black shadow-2xl z-50">
              <a href="/" className="hover:text-[#F58220]">Home</a>
              <a href="/services" className="hover:text-[#F58220]">Services</a>
              <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] text-white px-6 py-4 rounded text-center shadow-md">Book a Call</a>
            </div>
          </details>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tight">Helping Businesses Grow with Reliable Remote Support</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At HelloVA, we believe business owners shouldn&apos;t have to do everything alone. As companies grow, so do the demands — emails, operations, customer support, scheduling, marketing tasks, follow-ups, and countless day-to-day responsibilities that pull founders away from the bigger picture.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
          <span className="text-[#F58220] font-bold tracking-widest uppercase text-sm mb-4 block">Our Mission</span>
          <h2 className="text-3xl font-bold text-black mb-4">To Help Businesses Scale Smarter Through Reliable Remote Talent</h2>
          <p className="text-gray-600 leading-relaxed">
            To create meaningful partnerships between growing businesses and highly capable Filipino virtual assistants. We aim to make remote hiring easier, more reliable, and more human by focusing on long-term success — not just quick placements.
          </p>
        </div>
        <div className="bg-black p-10 rounded-3xl shadow-sm text-white">
          <span className="text-[#F58220] font-bold tracking-widest uppercase text-sm mb-4 block">Our Vision</span>
          <h2 className="text-3xl font-bold mb-4">Building Better Remote Working Relationships</h2>
          <p className="text-gray-400 leading-relaxed">
            Remote work has changed the way businesses operate. Our vision is to help businesses around the world build strong remote teams while creating meaningful opportunities for talented Filipino professionals. We believe great support can change the way a business grows.
          </p>
        </div>
      </section>

      {/* THE HELLOVA DIFFERENCE */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">We Focus on More Than Just Filling Roles</h2>
            <p className="text-gray-600 mb-6">Anyone can post a job online and hire a freelancer. But finding someone reliable, proactive, communicative, and aligned with your business is a different story. We carefully screen and match based on:</p>
            <ul className="space-y-3 font-semibold text-black">
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#F58220] rounded-full"></div> Skills and experience</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#F58220] rounded-full"></div> Communication ability</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#F58220] rounded-full"></div> Reliability and professionalism</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#F58220] rounded-full"></div> Work ethic & Business fit</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Global Businesses Trust Filipino Talent</h2>
            <p className="text-gray-600 mb-6">The Philippines has become one of the leading outsourcing hubs in the world because of the quality of its professionals. Filipino virtual assistants are known for:</p>
            <ul className="grid grid-cols-2 gap-3 font-semibold text-black">
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#F58220] rounded-full"></div> Strong English</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#F58220] rounded-full"></div> Adaptability</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#F58220] rounded-full"></div> Professionalism</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#F58220] rounded-full"></div> Customer Service</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#F58220] rounded-full"></div> Attention to detail</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#F58220] rounded-full"></div> Loyalty</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-black mb-6">Let&apos;s Build Your Remote Team</h2>
        <p className="text-xl text-gray-600 mb-10">Whether you&apos;re overwhelmed with daily tasks or preparing to scale your business, HelloVA is here to help you find reliable remote support you can trust. Delegate smarter. Operate smoother. Grow faster.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] hover:bg-[#d66f1b] text-white px-8 py-4 rounded font-bold transition">Book a Free Consultation</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black pt-16 pb-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          <div className="md:col-span-2 flex flex-col">
            <a href="/" className="block w-fit -mt-10">
              <img src="/logo-footer.png" alt="HelloVA Logo" className="w-56 md:w-64 h-auto object-contain rounded-xl" />
            </a>
            <p className="text-gray-400 text-sm max-w-xs mt-4">Remote support solutions for growing businesses.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="/services" className="hover:text-[#F58220] transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-[#F58220] transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Connect</h4>
            <div className="flex items-center gap-5">
              <a href="mailto:support@hellova.co" className="text-white hover:text-[#F58220] transition hover:scale-110">
                <svg className="w-[30px] h-[30px]" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
              </a>
              <a href="https://linkedin.com/company/hellova-co" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:opacity-80 transition hover:scale-110">
                <svg className="w-[30px] h-[30px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/hellova.agency/" target="_blank" rel="noreferrer" className="text-[#E1306C] hover:opacity-80 transition hover:scale-110">
                <svg className="w-[30px] h-[30px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com/hellova.solutions" target="_blank" rel="noreferrer" className="text-[#1877F2] hover:opacity-80 transition hover:scale-110">
                <svg className="w-[30px] h-[30px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}