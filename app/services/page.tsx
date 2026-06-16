import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Services() {
  return (
    <main className={`min-h-screen bg-gray-50 text-black ${inter.className}`}>
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <img src="/logo-header.jpg" alt="HelloVA Logo" className="h-20 sm:h-24 md:h-28 w-auto object-contain" />
          </a>
          <div className="hidden md:flex gap-4 font-semibold text-sm">
            <a href="/" className="hover:text-[#F58220]">Home</a>
            <a href="/about" className="hover:text-[#F58220]">About Us</a>
            <a href="https://calendly.com/hellova-ph/30min" className="bg-[#F58220] text-white px-4 py-2 rounded font-bold">Book a Call</a>
          </div>
        </div>
      </nav>
      {/* ... rest of your services content ... */}
      <footer className="bg-black pt-12 pb-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-2">
            <a href="/" className="block w-fit">
              <img src="/4323.png" alt="HelloVA Logo" className="h-16 w-auto object-contain rounded-xl" />
            </a>
            <p className="text-gray-400 text-sm max-w-xs">Remote support solutions for growing businesses.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/services" className="hover:text-[#F58220]">Services</a></li>
                <li><a href="/about" className="hover:text-[#F58220]">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Connect</h4>
              <div className="flex items-center gap-4">
                <a href="mailto:support@hellova.co" className="text-gray-400 hover:text-[#F58220] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                </a>
                <a href="https://linkedin.com/company/hellova-co" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#F58220] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.instagram.com/hellova.agency/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#F58220] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com/hellova.solutions" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#F58220] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}