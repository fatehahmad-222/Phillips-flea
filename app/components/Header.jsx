import Image from "next/image";
export default function Header() {
return(
    <header className="bg-[#f5f1e8] border-b border-gray-200 px-6 py-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
    
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1778610627/phillips_flea_logo_tyfycm.png"
                  alt="Phillips Flea Market"
                  width={220}
                  height={80}
                  priority
                  className="object-contain h-20 md:h-24"
                />
              </div>
    
              {/* Contact strip */}
              <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
    
                {/* Hours */}
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg>
                  <p className="text-sm text-black font-semibold leading-none">
                    Saturday &amp; Sunday 7AM - 3PM
                  </p>
                </div>
    
                <div className="hidden sm:block w-px h-12 bg-gray-300" />
    
                {/* Email */}
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7" />
                  </svg>
                  <div>
                    <a href="mailto:junkdrunkflea@gmail.com" className="text-black text-sm font-semibold hover:underline">
                      junkdrunkflea@gmail.com
                    </a>
                  </div>
                </div>
    
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.45 11.45 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 7a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                  <div>
                    <a href="tel:+19086270152" className="font-semibold text-gray-800 text-sm hover:underline">
                      908 344 5061
                    </a>
                  </div>
                </div>

                {/* Divider + Social Icons together */}
                <div className="hidden sm:flex items-center gap-3">
                  <div className="w-px h-12 bg-gray-300" />
                  <div className="flex items-center gap-3">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-blue-600 transition-colors">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-pink-500 transition-colors">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                  </div>
                </div>
    
              </div>
            </div>
          </header>
);}