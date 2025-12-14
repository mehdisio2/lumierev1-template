"use client";

import Image from "next/image";

export function LastCTASection() {
    return (
        <section className="relative min-h-[90vh] w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/last-cta-img.jpg"
                    alt="Elegant aesthetic treatment experience"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center scale-105 animate-slow-zoom"
                />

            </div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full min-h-[90vh] items-center justify-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-center">
                    <div className="max-w-2xl space-y-8 text-center">
                        {/* Top Tagline */}
                        <span className="font-sans inline-block tracking-[0.3em] text-rose-gold uppercase text-xs md:text-sm font-medium opacity-0 animate-fade-in-up delay-100">
                            Your Transformation Awaits
                        </span>

                        {/* Main Headline */}
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white text-shadow-soft opacity-0 animate-fade-in-up delay-300">
                            Begin Your <br className="hidden md:block" />
                            <span className="italic text-rose-gold">Journey</span> Today
                        </h2>

                        {/* Description */}
                        <p className="font-sans text-base md:text-lg lg:text-xl text-white/85 leading-relaxed max-w-lg font-light opacity-0 animate-fade-in-up delay-500">
                            Experience personalized care that honors your unique beauty.
                            Schedule a private consultation and discover the artistry of
                            subtle, refined enhancement.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4 opacity-0 animate-fade-in-up delay-700">
                            <button className="group relative px-10 py-4 overflow-hidden rounded-sm bg-champagne border border-champagne transition-all duration-500 hover:bg-transparent hover:border-champagne cursor-pointer">
                                <span className="font-sans relative z-10 text-sm uppercase tracking-widest text-navy group-hover:text-white transition-colors duration-300">
                                    Book Consultation
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Element - Rose Gold Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-gold to-transparent opacity-50" />
        </section>
    );
}

export default LastCTASection;
