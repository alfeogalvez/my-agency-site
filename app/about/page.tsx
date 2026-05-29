import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
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
            <a href="/services" className="hover:text-orange-500 transition">Services</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Helping Businesses Grow with Reliable Remote Support</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            At HelloVA, we believe business owners shouldn’t have to do everything alone. As companies grow, so do the demands — emails, operations, customer support, scheduling, marketing tasks, follow-ups, and countless day-to-day responsibilities that pull founders away from the bigger picture.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Mission</span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">To Help Businesses Scale Smarter Through Reliable Remote Talent</h2>
          <p className="text-slate-500 leading-relaxed">
            To create meaningful partnerships between growing businesses and highly capable Filipino virtual assistants. We aim to make remote hiring easier, more reliable, and more human by focusing on long-term success — not just quick placements.
          </p>
        </div>
        <div className="bg-orange-500 p-10 rounded-3xl shadow-sm text-white">
          <span className="text-orange-200 font-bold tracking-widest uppercase text-sm mb-4 block">Our Vision</span>
          <h2 className="text-3xl font-bold mb-4">Building Better Remote Working Relationships</h2>
          <p className="text-orange-50 leading-relaxed">
            Remote work has changed the way businesses operate. Our vision is to help businesses around the world build strong remote teams while creating meaningful opportunities for talented Filipino professionals. We believe great support can change the way a business grows.
          </p>
        </div>
      </section>

      {/* THE HELLOVA DIFFERENCE & FILIPINO TALENT */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">We Focus on More Than Just Filling Roles</h2>
            <p className="text-slate-500 mb-6">Anyone can post a job online and hire a freelancer. But finding someone reliable, proactive, communicative, and aligned with your business is a different story. We carefully screen and match based on:</p>
            <ul className="space-y-3 font-medium text-slate-700">
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Skills and experience</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Communication ability</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Reliability and professionalism</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Work ethic & Business fit</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Global Businesses Trust Filipino Talent</h2>
            <p className="text-slate-500 mb-6">The Philippines has become one of the leading outsourcing hubs in the world because of the quality of its professionals. Filipino virtual assistants are known for:</p>
            <ul className="grid grid-cols-2 gap-3 font-medium text-slate-700">
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Strong English</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Adaptability</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Professionalism</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Customer Service</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Attention to detail</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Loyalty</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Let’s Build Your Remote Team</h2>
        <p className="text-xl text-slate-500 mb-10">Whether you’re overwhelmed with daily tasks or preparing to scale your business, HelloVA is here to help you find reliable remote support you can trust. Delegate smarter. Operate smoother. Grow faster.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition">Book a Free Consultation</a>
        </div>
      </section>
    </main>
  );
}