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
    <main className={`min-h-screen bg-gray-50 text-black selection:bg-[#F58220]/20 selection:text-[#F58220] ${inter.className}`}>
      
      {/* MINI NAV - SCALED DOWN BY 60% */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <a href="/" className="flex items-center shrink-0">
            <img src="/logo-header.jpg" alt="HelloVA Logo" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain" />
          </a>

          <div className="hidden md:flex gap-8 font-semibold">
            <a href="/" className="hover:text-[#F58220] transition">Home</a>
            <a href="/about" className="hover:text-[#F58220] transition">About Us</a>
            <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] hover:bg-[#d66f1b] text-white px-5 py-2 rounded transition shadow-sm font-bold text-sm">
              Book a Call
            </a>
          </div>
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
      <footer className="bg-black pt-20 pb-10 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
          <div className="col-span-1 md:col-span-2">
            
            {/* FOOTER LOGO - REQUIRES TRANSPARENT PNG */}
            <a href="/" className="mb-6 block w-fit">
              <img src="/logo-footer.png" alt="HelloVA Logo with Tagline" className="h-24 md:h-32 w-auto object-contain" />
            </a>

            <p className="text-gray-400 max-w-sm">
              Remote support solutions for growing businesses.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="/services" className="hover:text-[#F58220] transition">Services</a></li>
              <li><a href="/about" className="hover:text-[#F58220] transition">About Us</a></li>
              <li><a href="/#how-it-works" className="hover:text-[#F58220] transition">How It Works</a></li>
              <li><a href="mailto:support@hellova.co" className="hover:text-[#F58220] transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="mailto:support@hellova.co" className="hover:text-[#F58220] transition">support@hellova.co</a></li>
              <li><a href="https://hellova.co/" target="_blank" rel="noreferrer" className="hover:text-[#F58220] transition">Website</a></li>
              <li><a href="https://linkedin.com/company/hellova-co" target="_blank" rel="noreferrer" className="hover:text-[#F58220] transition">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/hellova.agency/" target="_blank" rel="noreferrer" className="hover:text-[#F58220] transition">Instagram</a></li>
              <li><a href="https://facebook.com/hellova.solutions" target="_blank" rel="noreferrer" className="hover:text-[#F58220] transition">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} HelloVA. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </main>
  );
}