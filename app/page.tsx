import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-h-screen bg-white text-black selection:bg-[#F58220]/20 selection:text-[#F58220] ${inter.className}`}>
      
      {/* NAVIGATION - HEADER LOGO INCREASED BY ~15% */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <a href="/" className="flex items-center shrink-0">
            <img src="/logo-header.jpg" alt="HelloVA Logo" className="h-14 sm:h-20 md:h-24 lg:h-28 w-auto object-contain" />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-black">
            <a href="/services" className="hover:text-[#F58220] transition">Services</a>
            <a href="/about" className="hover:text-[#F58220] transition">About Us</a>
            <a href="#how-it-works" className="hover:text-[#F58220] transition">How It Works</a>
            <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] hover:bg-[#d66f1b] text-white px-6 py-2.5 rounded transition shadow-md font-bold">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-20 pb-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black mb-6 leading-[1.1]">
            Build More. Do Less. <br />
            <span className="text-[#F58220] text-4xl md:text-5xl lg:text-6xl mt-4 block">Reliable Virtual Assistants That Help You Scale Without the Overwhelm.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            HelloVA connects businesses with pre-vetted Filipino Virtual Assistants for admin support, customer service, operations, marketing, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-[#F58220] hover:bg-[#d66f1b] text-white px-8 py-4 rounded font-bold text-lg transition text-center shadow-lg shadow-[#F58220]/20">
              Book a Discovery Call
            </a>
            <a href="/services" className="bg-white border-2 border-black text-black hover:bg-gray-50 px-8 py-4 rounded font-bold text-lg transition text-center">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* PERSONALITY / MESSAGING STRIP */}
      <section className="bg-black py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Your Growth Needs Support. <span className="text-[#F58220]">Not More Hours In The Day.</span>
        </h2>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <section className="py-16 bg-gray-50 border-b border-gray-200 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-300">
            <div className="py-4">
              <div className="text-5xl font-extrabold text-[#F58220] mb-2">150+</div>
              <div className="text-black font-bold uppercase tracking-wider text-sm">Businesses Served</div>
            </div>
            <div className="py-4">
              <div className="text-5xl font-extrabold text-[#F58220] mb-2">300+</div>
              <div className="text-black font-bold uppercase tracking-wider text-sm">VAs Placed</div>
            </div>
            <div className="py-4">
              <div className="text-5xl font-extrabold text-[#F58220] mb-2">98%</div>
              <div className="text-black font-bold uppercase tracking-wider text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-black mb-4">How Our VAs Can Help</h2>
            <p className="text-lg text-gray-600">Comprehensive support designed to take the daily grind off your plate.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Administrative Support",
              "Executive Assistance",
              "Customer Service",
              "Marketing Support",
              "CRM Management",
              "Lead Generation",
              "Social Media Support",
              "Operations Support"
            ].map((service, idx) => (
              <div key={idx} className="border-2 border-gray-100 hover:border-[#F58220] p-6 rounded-lg transition group cursor-default">
                <div className="w-10 h-10 bg-gray-100 group-hover:bg-[#F58220]/10 flex items-center justify-center rounded mb-4 transition">
                  <svg className="w-5 h-5 text-black group-hover:text-[#F58220] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
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
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-black mb-8">Why Businesses Choose HelloVA</h2>
            <div className="space-y-6">
              {[
                "Pre-vetted Filipino VAs",
                "Flexible Hiring Options",
                "Cost-Effective Growth",
                "Dedicated Matching Process",
                "Ongoing Support",
                "Quick Placement"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#F58220] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-lg font-bold text-black">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 relative">
            <svg className="w-12 h-12 text-[#F58220] opacity-20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <div className="relative z-10 pt-6">
              <p className="text-lg text-gray-700 italic mb-6">&quot;HelloVA completely changed how we operate. We were drowning in admin work, and within two weeks, they matched us with a VA who took over our entire inbox and CRM. We&apos;ve scaled our revenue by 30% simply because we have our time back.&quot;</p>
              <div>
                <p className="font-bold text-black">Sarah Jenkins</p>
                <p className="text-sm text-[#F58220] font-semibold">Founder, Marketing Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="how-it-works" className="py-24 bg-white px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-black mb-4">How HelloVA Works</h2>
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
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-md">
                  {item.step}
                </div>
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
            <button type="button" className="w-full bg-[#F58220] hover:bg-[#d66f1b] text-white font-bold py-4 rounded transition text-lg mt-4">
              Let&apos;s Talk
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black pt-20 pb-10 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
          <div className="col-span-1 md:col-span-2">
            
           {/* FOOTER LOGO - Using the image with blended background */}
            <a href="/" className="mb-6 block w-fit">
              <img 
                src="/logo-footer.jpg" 
                alt="HelloVA Logo" 
                className="h-24 md:h-32 w-auto object-contain rounded-2xl mix-blend-screen" 
              />
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