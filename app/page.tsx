import { Inter } from 'next/font/google';

// Clean, modern SaaS typography
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-h-screen bg-white text-slate-600 selection:bg-orange-500/20 selection:text-orange-900 ${inter.className}`}>
      
      {/* NAVIGATION */}
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <a href="/" className="text-4xl font-bold tracking-tight flex items-center relative">
            <span className="text-slate-900">Hello</span>
            <span className="text-orange-500">VA</span>
            {/* Scaled the triangle to match the new larger text size */}
            <svg className="w-4 h-4 text-orange-500 absolute -top-1 -right-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12l-24 12V0z" />
            </svg>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {/* UPDATED LINKS HERE */}
            <a href="/services" className="hover:text-orange-500 transition">Services</a>
            <a href="/about" className="hover:text-orange-500 transition">About Us</a>
            <a href="#process" className="hover:text-orange-500 transition">How It Works</a>
            <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg transition shadow-md shadow-orange-500/20 font-semibold">
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-100 px-4 py-1.5 rounded-full mb-8 inline-block">
              Build More. Do Less.
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Support That Moves <br />
              <span className="text-orange-500">Business Forward.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
              HelloVA connects you with pre-vetted Filipino virtual assistants who integrate seamlessly into your business. Delegate the daily execution so you can focus on sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-orange-500/30 transition text-center text-lg">
                Book a Free Discovery Call
              </a>
              {/* UPDATED LINK HERE */}
              <a href="/services" className="bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold transition text-center text-lg">
                Explore Services
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> 
                Free up your time
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> 
                Build reliable support
              </span>
            </div>
          </div>
          
          {/* Hero Graphic */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-orange-200 blur-[100px] opacity-40 rounded-full"></div>
            <img 
              src="/hero-image.jpg" 
              alt="HelloVA Remote Support Team" 
              className="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-slate-100 bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by founders, agencies, and growing businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-slate-600">
            {['Pre-Vetted Professionals', 'Strong Communication', 'Flexible Arrangements', 'Fast Matching Process', 'Long-Term Focus'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM & SHIFT SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
           <img 
             src="/workflow-image.jpg" 
             alt="HelloVA Workflow Diagram" 
             className="w-full aspect-square lg:aspect-[4/5] object-cover rounded-2xl shadow-xl border border-slate-100"
           />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            If You&apos;re Still Doing Everything, You&apos;re Limiting Growth.
          </h2>
          <p className="text-lg text-slate-500 mb-8 leading-relaxed">
            Most business owners reach a point where inbox management becomes overwhelming, follow-ups get delayed, and there&apos;s never enough time for strategy. You don&apos;t have a capacity problem. <span className="text-slate-900 font-semibold">You have a support problem.</span>
          </p>
          
          <div className="bg-orange-50 border border-orange-100 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-bold text-orange-600 mb-3">The Real Growth Move: Delegation</h3>
            <p className="text-slate-600 leading-relaxed">
              Successful businesses don&apos;t grow by doing more. They grow by building systems and support. A skilled virtual assistant takes over repetitive, time-consuming tasks — giving you space to focus on revenue and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">A Simple Integration Process</h2>
            <p className="text-xl text-slate-500">From discovery to onboarding in four structured steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery Call", desc: "We map out your business bottlenecks and define the exact support you need." },
              { step: "02", title: "Candidate Matching", desc: "We shortlist top-tier virtual assistants specifically suited to your requirements." },
              { step: "03", title: "Interviews", desc: "You meet with the candidates to ensure perfect culture and communication fit." },
              { step: "04", title: "Onboarding", desc: "We assist with the integration process so your VA can hit the ground running." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="text-6xl font-extrabold text-slate-50 absolute -top-4 -right-2 group-hover:text-orange-50 transition duration-300">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <span className="text-sm font-bold text-orange-500 mb-2 block">Step {item.step}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 bg-slate-900 text-center px-6 border-t-[12px] border-orange-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
            Ready to Build Your Support System?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Stop spending your time on tasks someone else can handle. Start focusing on growth, strategy, and leadership today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-orange-500 hover:bg-orange-400 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 transition w-full sm:w-auto">
              Book a Free Strategy Call
            </a>
            {/* UPDATED LINK HERE */}
            <a href="/services" className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-5 rounded-xl font-bold text-lg border border-slate-700 transition w-full sm:w-auto">
              Get Matched with a VA
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold tracking-tight flex items-center relative mb-4">
              <span className="text-slate-900">Hello</span>
              <span className="text-orange-500">VA</span>
              <svg className="w-3 h-3 text-orange-500 absolute -top-1 -right-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12l-24 12V0z" /></svg>
            </div>
            <p className="text-slate-500 max-w-sm font-medium">
              Reliable remote support for growing businesses worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              {/* UPDATED LINKS HERE */}
              <li><a href="/services" className="hover:text-orange-500 transition">Services</a></li>
              <li><a href="/about" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#process" className="hover:text-orange-500 transition">How It Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="mailto:support@hellova.co" className="hover:text-orange-500 transition">support@hellova.co</a></li>
              <li><a href="https://linkedin.com/company/hellova-co" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/hellova.agency/" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">Instagram</a></li>
              <li><a href="https://facebook.com/hellova.solutions" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} HelloVA. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}