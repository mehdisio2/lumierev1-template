export const Footer = () => {
    return (
        <footer className="bg-navy text-pearl">
            {/* Top Section: Logo + Newsletter */}
            <div className="px-6 py-12 md:px-12 lg:px-20">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                    {/* Logo */}
                    <div className="flex flex-col">
                        <span className="font-serif text-3xl md:text-4xl text-white tracking-wider font-bold">
                            ALAMI
                        </span>
                        <span className="font-serif text-2xl md:text-3xl text-white tracking-wider font-bold">
                            Aesthetics
                        </span>
                        <span className="font-sans text-[9px] text-rose-gold uppercase tracking-[0.25em] mt-1">
                            Paris • Est. 2018
                        </span>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="max-w-md">
                        <p className="font-sans text-white text-lg md:text-xl">
                            Subscribe to get{" "}
                            <span className="font-serif italic text-rose-gold">
                                our special offers
                            </span>
                        </p>

                        <div className="mt-4 flex items-center gap-2">
                            <input
                                type="email"
                                placeholder="E-mail adress"
                                className="flex-1 bg-white/10 border border-champagne/30 rounded-sm px-4 py-3 text-sm text-white placeholder:text-pearl/50 focus:outline-none focus:border-rose-gold transition-colors duration-300"
                            />
                            <button className="bg-champagne hover:bg-rose-gold text-navy p-3 rounded-full transition-all duration-300 hover:scale-105">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="mx-6 md:mx-12 lg:mx-20 border-t border-pearl/10" />

            {/* Bottom Section: Links */}
            <div className="px-6 py-10 md:px-12 lg:px-20">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {/* Company */}
                    <div>
                        <p className="font-sans text-xs uppercase tracking-[0.15em] text-pearl/60 mb-5">
                            Company
                        </p>
                        <ul className="space-y-3 font-sans text-sm">
                            <li>
                                <a href="#" className="text-pearl/80 hover:text-rose-gold transition-colors duration-300">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-pearl/80 hover:text-rose-gold transition-colors duration-300">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-pearl/80 hover:text-rose-gold transition-colors duration-300">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-pearl/80 hover:text-rose-gold transition-colors duration-300">
                                    Before/After
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Terms & Policy */}
                    <div>
                        <p className="font-sans text-xs uppercase tracking-[0.15em] text-pearl/60 mb-5">
                            Terms & Policy
                        </p>
                        <ul className="space-y-3 font-sans text-sm">
                            <li>
                                <a href="#" className="text-pearl/80 hover:text-rose-gold transition-colors duration-300">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-pearl/80 hover:text-rose-gold transition-colors duration-300">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-pearl/80 hover:text-rose-gold transition-colors duration-300">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-2">
                        <p className="font-sans text-xs uppercase tracking-[0.15em] text-pearl/60 mb-5">
                            Contact
                        </p>
                        <ul className="space-y-3 font-sans text-sm">
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-rose-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:contact@alami-aesthetics.com" className="text-pearl/80 hover:text-rose-gold transition-colors duration-300">
                                    contact@alami-aesthetics.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-rose-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+33155123456" className="text-pearl/80 hover:text-rose-gold transition-colors duration-300">
                                    +33 1 55 12 34 56
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-4 h-4 text-rose-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-pearl/80">
                                    123 Avenue Montaigne, 75008 Paris
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="px-6 py-6 md:px-12 lg:px-20 border-t border-pearl/5">
                <p className="font-sans text-xs text-pearl/40 text-center">
                    ALAMI Aesthetics ©2024. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
