import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
  return (
    <main className={`min-h-screen bg-gray-50 text-black selection:bg-[#F58220]/20 selection:text-[#F58220] ${inter.className}`}>
      
      {/* MINI NAV */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-4xl font-bold tracking-tight flex items-center relative">
            <span className="text-black">Hello</span>
            <span className="text-[#F58220]">VA</span>
            {/* Corrected Triangle */}
            <svg className="w-4 h-4 text-[#F58220] absolute -top-1 -right-4" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0v24h24z" /></svg>
          </a>
          <div className="hidden md:flex gap-8 font-semibold">
            <a href="/" className="hover:text-[#F58220] transition">Home</a>
            <a href="/services" className="hover:text-[#F58220] transition">Services</a>
            <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] hover:bg-[#d66f1b] text-white px-5 py-2 rounded transition shadow-sm font-bold text-sm">
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tight">Helping Businesses Grow with Reliable Remote Support</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At HelloVA, we believe business owners shouldn’t have to do everything alone. As companies grow, so do the demands — emails, operations, customer support, scheduling, marketing tasks, follow-ups, and countless day-to-day responsibilities that pull founders away from the bigger picture.
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

      {/* THE HELLOVA DIFFERENCE & FILIPINO TALENT */}
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
        <h2 className="text-4xl font-extrabold text-black mb-6">Let’s Build Your Remote Team</h2>
        <p className="text-xl text-gray-600 mb-10">Whether you’re overwhelmed with daily tasks or preparing to scale your business, HelloVA is here to help you find reliable remote support you can trust. Delegate smarter. Operate smoother. Grow faster.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] hover:bg-[#d66f1b] text-white px-8 py-4 rounded font-bold transition">Book a Free Consultation</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-3xl font-bold tracking-tight flex items-center relative mb-6 w-fit">
              <span className="text-white">Hello</span>
              <span className="text-[#F58220]">VA</span>
              {/* Corrected Triangle */}
              <svg className="w-3 h-3 text-[#F58220] absolute -top-1 -right-3" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0v24h24z" /></svg>
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