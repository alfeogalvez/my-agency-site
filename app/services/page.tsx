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
    <main className={`min-h-screen bg-slate-50 text-slate-600 ${inter.className}`}>
      
      {/* MINI NAV */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight flex items-center relative">
            <span className="text-slate-900">Hello</span>
            <span className="text-orange-500">VA</span>
            <svg className="w-3 h-3 text-orange-500 absolute -top-1 -right-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12l-24 12V0z" /></svg>
          </a>
          <div className="flex gap-6 font-medium">
            <a href="/" className="hover:text-orange-500 transition">Home</a>
            <a href="/about" className="hover:text-orange-500 transition">About Us</a>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section className="pt-24 pb-16 bg-white border-b border-slate-100 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">What Our Virtual Assistants Can Help With</h1>
          <p className="text-xl text-slate-500">HelloVA connects you with reliable Filipino virtual assistants who support your business with day-to-day execution, so you can focus on growth and strategy.</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceBlocks.map((service, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-lg hover:border-orange-300 transition duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-500 mb-6 text-sm">{service.desc}</p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-center px-6 text-white border-t-[12px] border-orange-500">
        <h2 className="text-4xl font-extrabold mb-6">Ready to delegate and grow faster?</h2>
        <p className="text-xl text-slate-400 mb-10">Let us match you with a virtual assistant who fits your business needs.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-bold transition">Book a Free Call</a>
        </div>
      </section>

    </main>
  );
}