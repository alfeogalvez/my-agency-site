import { Montserrat } from 'next/font/google';

// Cinematic font for the logo
const cinematicFont = Montserrat({ 
  subsets: ['latin'], 
  weight: ['800', '900'] 
});

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-300 selection:bg-indigo-500/30 font-sans">
      
      {/* NAVIGATION */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* CINEMATIC LOGO */}
          <div className={`text-4xl md:text-5xl uppercase tracking-tighter flex items-center ${cinematicFont.className}`}>
            <span className="bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent drop-shadow-sm">
              Hello
            </span>
            <span className="bg-gradient-to-br from-indigo-400 via-sky-400 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] ml-1">
              VA
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
            <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="hover:text-slate-900 hover:bg-white bg-indigo-600 text-white px-5 py-2.5 rounded-lg transition shadow-lg shadow-indigo-500/20">
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 inline-block mb-6">
              Build More. Do Less.
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Reliable Virtual Assistants That Help You Scale <br />
              <span className="text-indigo-400">Without the Overwhelm.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              HelloVA connects you with pre-vetted Filipino virtual assistants who integrate into your business and take care of time-consuming tasks like admin, customer support, marketing, and operations. So you can focus on what actually grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-600/20 transition text-center">
                Book a Free Strategy Call
              </a>
              <a href="#services" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition text-center">
                Get Matched with a VA
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-2"><svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Free up your time</span>
              <span className="flex items-center gap-2"><svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Build reliable support</span>
            </div>
          </div>
          
          {/* Hero Graphic */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 blur-[100px] opacity-20 rounded-full"></div>
            <img 
              src="/hero-image.jpg" 
              alt="HelloVA Virtual Assistants" 
              className="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl border border-slate-700"
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-800 bg-slate-800/30 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
            Trusted by founders, agencies, and growing businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-slate-300">
            {['Pre-vetted professionals', 'Strong communication skills', 'Flexible working arrangements', 'Fast matching process', 'Long-term support focus'].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg border border-slate-700">
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM & SHIFT SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Workflow Graphic */}
        <div className="order-2 lg:order-1 relative">
           <img 
             src="/workflow-image.jpg" 
             alt="HelloVA Hiring Workflow" 
             className="w-full aspect-square lg:aspect-auto lg:h-[600px] object-cover rounded-2xl shadow-xl border border-slate-700"
           />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            If You&apos;re Still Doing Everything, You&apos;re Limiting Growth.
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Most business owners reach a point where inbox management becomes overwhelming, follow-ups get delayed, and there&apos;s never enough time for strategy. You don&apos;t have a capacity problem. <span className="text-white font-semibold">You have a support problem.</span>
          </p>
          
          <div className="bg-indigo-900/20 border border-indigo-500/20 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-bold text-indigo-400 mb-3">The Real Growth Move: Delegation</h3>
            <p className="text-slate-300">
              Successful businesses don&apos;t grow by doing more. They grow by building systems and support. A skilled virtual assistant can take over repetitive, time-consuming tasks — giving you space to focus on revenue, strategy, and leadership.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-4">Your Remote Support System Starts Here:</h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <div className="bg-indigo-500/20 p-1 rounded mt-0.5"><svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                <span>Tell us your needs and bottlenecks</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-500/20 p-1 rounded mt-0.5"><svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                <span>We source and screen top-tier candidates</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-500/20 p-1 rounded mt-0.5"><svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                <span>You interview only the best and start working</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FULL SERVICES SECTION */}
      <section id="services" className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Our Virtual Assistants Can Help With</h2>
            <p className="text-lg text-slate-400">
              HelloVA connects you with reliable Filipino virtual assistants who support your business with day-to-day execution, so you can focus on growth and strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Executive & Admin", desc: "Email, calendar, data entry, research, and general support.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
              { title: "Customer Support", desc: "Live chat, email support, follow-ups, and CRM updates.", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
              { title: "Sales Support", desc: "Lead follow-ups, CRM management, prospect research, booking.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Marketing Support", desc: "Email campaigns, content scheduling, and marketing admin.", icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" },
              { title: "Social Media & Creative", desc: "Canva design, video editing, captions, and platform posting.", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { title: "Lead Generation", desc: "LinkedIn outreach, list building, and appointment setting.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { title: "Operations Support", desc: "SOP creation, task tracking, and workflow management.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
              { title: "E-Commerce Support", desc: "Product uploads, order management, and inventory updates.", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
            ].map((service, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-800/50 transition duration-300">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 border border-indigo-500/20">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HELLOVA SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Businesses Work With Us</h2>
          <p className="text-slate-400">We focus on long-term success, not just quick placements.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">We Focus on Fit, Not Just Availability</h3>
            <p className="text-slate-400">We match based on skills, communication style, and work alignment to ensure a seamless integration into your team.</p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">We Save You Time</h3>
            <p className="text-slate-400">No job posts, no filtering, no endless interviews. We present only the most qualified candidates for your specific needs.</p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">We Prioritize Reliability</h3>
            <p className="text-slate-400">We focus on consistency, accountability, and long-term collaboration. Our VAs genuinely care about your success.</p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">We Understand Remote Work</h3>
            <p className="text-slate-400">We help you set expectations for smooth, productive working relationships right from day one.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A Simple Hiring Process</h2>
            <p className="text-slate-400">From discovery to onboarding in four easy steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery Call", desc: "We understand your business and what you need support with." },
              { step: "2", title: "Candidate Matching", desc: "We shortlist qualified virtual assistants based on your requirements." },
              { step: "3", title: "Interviews", desc: "You meet and choose the best fit for your company culture." },
              { step: "4", title: "Onboarding", desc: "We help you get started and integrate your VA into your workflow." }
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-indigo-500/20">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS & RESULTS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">What Happens When You Delegate Properly?</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            {['More time for high-value work', 'Less operational stress', 'Faster execution', 'Better systems & organization', 'Improved customer experience', 'Clearer focus on growth'].map((result) => (
              <span key={result} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-full">
                {result}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
            <svg className="absolute top-6 left-6 w-8 h-8 text-slate-600 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <p className="text-slate-300 italic relative z-10 pt-6">"HelloVA helped us finally get organized. Our VA handles tasks we used to struggle with daily. Highly recommend!"</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
            <svg className="absolute top-6 left-6 w-8 h-8 text-slate-600 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <p className="text-slate-300 italic relative z-10 pt-6">"The hiring process was simple and fast. We had top-tier support within days without the headache of vetting."</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
            <svg className="absolute top-6 left-6 w-8 h-8 text-slate-600 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <p className="text-slate-300 italic relative z-10 pt-6">"Our VA became a core part of our team quickly. The long-term matching approach HelloVA uses is incredibly effective."</p>
          </div>
        </div>
      </section>

      {/* ABOUT & FINAL CTA */}
      <section id="about" className="py-24 bg-indigo-900/20 border-y border-indigo-500/20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Support System?</h2>
          <p className="text-lg text-slate-300 mb-8">
            HelloVA exists to help businesses build reliable remote support systems through skilled Filipino virtual assistants. We believe delegation is not about doing less — it’s about growing better. Stop spending your time on tasks someone else can handle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://calendly.com/hellova-ph/30min" target="_blank" rel="noreferrer" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-600/20 transition">
              Book a Free Strategy Call
            </a>
            <a href="#services" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition">
              Get Matched with a VA Today
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className={`text-2xl uppercase tracking-tighter flex items-center mb-4 ${cinematicFont.className}`}>
              <span className="text-white">Hello</span>
              <span className="text-indigo-500 ml-1">VA</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Remote support solutions for growing businesses. Delegate smarter. Operate smoother. Grow faster.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-indigo-400 transition">Services</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition">About</a></li>
              <li><a href="#how-it-works" className="hover:text-indigo-400 transition">How It Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Email: <a href="mailto:support@hellova.co" className="hover:text-indigo-400 transition">support@hellova.co</a></li>
              <li><a href="https://linkedin.com/company/hellova-co" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/hellova.agency/" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">Instagram</a></li>
              <li><a href="https://facebook.com/hellova.solutions" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} HelloVA. All rights reserved.
        </div>
      </footer>
    </main>
  );
}