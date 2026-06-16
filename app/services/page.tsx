import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Services() {
  
  const serviceBlocks = [
    { title: "Executive & Administrative Support", desc: "Keep your business organized and running smoothly.", items: ["Email and inbox management", "Calendar and scheduling", "Data entry and research", "Travel coordination", "General admin support"] },
    { title: "Customer Support", desc: "Deliver fast and professional customer experiences.", items: ["Email support", "Live chat assistance", "Customer follow-ups", "CRM updates", "Appointment scheduling"] },
    { title: "Sales Support", desc: "Keep your pipeline active and organized.", items: ["Lead follow-ups", "CRM management", "Prospect research", "Appointment setting", "Outreach assistance"] },
    { title: "Marketing Support", desc: "Stay consistent with your marketing execution.", items: ["Email marketing support", "Campaign coordination", "Content scheduling", "Marketing admin tasks", "Basic reporting"] },
    { title: "Social Media, Content & Creative", desc: "Stay visible and consistent across platforms.", items: ["Social media posting & scheduling", "Content creation (captions, posts)", "Graphic design (Canva visuals)", "Video editing (reels, basic edits)"] },
    { title: "Lead Generation", desc: "Build and organize your outreach efforts.", items: ["LinkedIn outreach", "Lead research", "List building", "CRM organization", "Appointment booking"] },
    { title: "Operations Support", desc: "Create structure and efficiency behind your business.", items: ["SOP creation", "Workflow management", "Project coordination", "Task tracking", "Internal organization"] },
    { title: "E-Commerce Support", desc: "Support your online store operations.", items: ["Product uploads", "Order management", "Customer inquiries", "Inventory updates", "Marketplace support"] },
  ];

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
            <a href="/about" className="hover:text-[#F58220] transition-colors">About Us</a>
            <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] hover:bg-[#d66f1b] text-white px-5 py-2 rounded shadow-md font-bold transition-colors">Book a Call</a>
          </div>
          <details className="md:hidden group">
            <summary className="list-none cursor-pointer p-2 text-black focus:outline-none">
              <svg className="w-8 h-8 block group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              <svg className="w-8 h-8 hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </summary>
            <div className="absolute top-[100%] left-0 w-full bg-white border-b border-gray-200 px-6 py-8 flex flex-col gap-6 text-lg font-bold text-black shadow-2xl z-50">
              <a href="/" className="hover:text-[#F58220]">Home</a>
              <a href="/about" className="hover:text-[#F58220]">About Us</a>
              <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] text-white px-6 py-4 rounded text-center shadow-md">Book a Call</a>
            </div>
          </details>
        </div>
      </nav>

      {/* HEADER */}
      <section className="pt-24 pb-16 bg-white border-b border-gray-100 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">What Our Virtual Assistants Can Help With</h1>
          <p className="text-xl text-gray-600">HelloVA connects you with reliable Filipino virtual assistants who support your business with day-to-day execution, so you can focus on growth and strategy.</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceBlocks.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-lg hover:border-[#F58220] transition duration-300">
              <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm">{service.desc}</p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black font-semibold text-sm">
                    <svg className="w-5 h-5 text-[#F58220] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-center px-6 text-white border-t-[12px] border-[#F58220]">
        <h2 className="text-4xl font-extrabold mb-6">Ready to delegate and grow faster?</h2>
        <p className="text-xl text-gray-400 mb-10">Let us match you with a virtual assistant who fits your business needs.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] hover:bg-[#d66f1b] text-white px-8 py-4 rounded font-bold transition">Book a Free Call</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black pt-16 pb-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 flex flex-col">
            <a href="/" className="block w-fit">
              <img src="/logo-footer.png" alt="HelloVA Logo" className="h-48 w-auto object-contain rounded-xl" />
            </a>
            <p className="text-gray-400 text-sm max-w-xs -mt-2">Remote support solutions for growing businesses.</p>
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