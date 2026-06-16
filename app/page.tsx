import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-h-screen bg-white text-black selection:bg-[#F58220]/20 selection:text-[#F58220] ${inter.className}`} style={{ colorScheme: 'light' }}>
      
      {/* NAVIGATION */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <img src="/logo-header.jpg" alt="HelloVA Logo" className="h-16 md:h-24 lg:h-28 w-auto object-contain shrink-0" />
          </a>
          <div className="hidden md:flex items-center gap-4 text-sm font-semibold text-black">
            <a href="/services" className="hover:text-[#F58220] transition-colors">Services</a>
            <a href="/about" className="hover:text-[#F58220] transition-colors">About Us</a>
            <a href="#how-it-works" className="hover:text-[#F58220] transition-colors">How It Works</a>
            <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] hover:bg-[#d66f1b] text-white px-5 py-2 rounded shadow-md font-bold transition-colors">
              Book a Call
            </a>
          </div>
          <details className="md:hidden group">
            <summary className="list-none cursor-pointer p-2 text-black focus:outline-none">
              <svg className="w-8 h-8 block group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              <svg className="w-8 h-8 hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </summary>
            <div className="absolute top-[100%] left-0 w-full bg-white border-b border-gray-200 px-6 py-8 flex flex-col gap-6 text-lg font-bold text-black shadow-2xl z-50">
              <a href="/services" className="hover:text-[#F58220]">Services</a>
              <a href="/about" className="hover:text-[#F58220]">About Us</a>
              <a href="#how-it-works" className="hover:text-[#F58220]">How It Works</a>
              <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] text-white px-6 py-4 rounded text-center shadow-md">Book a Call</a>
            </div>
          </details>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-16 pb-16 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black mb-6 leading-[1.1]">
            Build More. Do Less. <br />
            <span className="text-[#F58220] text-4xl md:text-5xl lg:text-6xl mt-4 block">Reliable Virtual Assistants That Help You Scale Without the Overwhelm.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            HelloVA connects businesses with pre-vetted Filipino Virtual Assistants for admin support, customer service, operations, marketing, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/hellova-ph/30min" className="bg-[#F58220] hover:bg-[#d66f1b] text-white px-8 py-4 rounded font-bold text-lg transition text-center shadow-lg shadow-[#F58220]/20">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* PERSONALITY / MESSAGING STRIP */}
      <section className="bg-[#F58220] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Your Growth Needs Support. Not More Hours In The Day.
        </h2>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-black mb-4">How Our VAs Can Help</h2>
            <p className="text-lg text-gray-600">Comprehensive support designed to take the daily grind off your plate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Administrative Support", "Executive Assistance", "Customer Service", "Marketing Support", "CRM Management", "Lead Generation", "Social Media Support", "Operations Support"].map((service, idx) => (
              <div key={idx} className="border-2 border-gray-100 hover:border-[#F58220] p-6 rounded-lg transition group cursor-default">
                <div className="w-10 h-10 bg-gray-100 group-hover:bg-[#F58220]/10 flex items-center justify-center rounded mb-4 transition">
                  <svg className="w-5 h-5 text-black group-hover:text-[#F58220] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-bold text-lg text-black">{service}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="/services" className="text-[#F58220] font-bold hover:underline inline-flex items-center gap-2">
              See detailed service breakdowns 
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION 1 */}
      <section className="bg-[#F58220] py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-6">Build The Business. Not Your To-Do List.</h2>
        <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded font-bold text-lg transition inline-block">
          Find Your Virtual Assistant
        </a>
      </section>

      {/* WHY HELLOVA SECTION */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-black mb-12">Why Businesses Choose HelloVA</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {["Pre-vetted Filipino VAs", "Flexible Hiring Options", "Cost-Effective Growth", "Dedicated Matching Process", "Ongoing Support", "Quick Placement"].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#F58220] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-lg font-bold text-black">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="how-it-works" className="py-24 bg-white px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-black mb-4">How <span className="text-[#F58220]">HelloVA</span> Works</h2>
            <p className="text-lg text-gray-600">A seamless process designed to get you the right support, fast.</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>
            {[
              { step: "1", title: "Discover", desc: "We map out your needs and tasks." },
              { step: "2", title: "Match", desc: "We find the perfect pre-vetted VA." },
              { step: "3", title: "Interview", desc: "You meet them to ensure a culture fit." },
              { step: "4", title: "Hire", desc: "We handle the onboarding seamlessly." },
              { step: "5", title: "Grow", desc: "You reclaim your time and scale." }
            ].map((item, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center max-w-[200px] mx-auto mb-10 lg:mb-0 bg-white px-4">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-md">{item.step}</div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-black mb-2">Need a Virtual Assistant?</h2>
            <p className="text-gray-600">Fill out the form below and we will be in touch shortly.</p>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-black mb-1">Name</label>
              <input type="text" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#F58220]" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#F58220]" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-1">Company</label>
              <input type="text" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#F58220]" placeholder="Your Business LLC" />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-1">What tasks would you like help with?</label>
              <textarea rows={4} className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#F58220]" placeholder="Admin, customer support, email management..."></textarea>
            </div>
            <button type="button" className="w-full bg-[#F58220] hover:bg-[#d66f1b] text-white font-bold py-4 rounded transition text-lg mt-4">Let&apos;s Talk</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black pt-16 pb-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          <div className="md:col-span-2 flex flex-col">
            <a href="/" className="block w-fit -mt-2">
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