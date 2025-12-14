"use client";

import Image from "next/image";

export function EmpathySection() {
    return (
        <section className="bg-white py-20 md:py-28 lg:py-32 border-t border-champagne/30">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Text Content */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Heading */}
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-navy">
                            You're Not Alone
                            <br />
                            in <span className="italic text-rose-gold-text">This journey</span>
                        </h2>

                        {/* Body Text */}
                        <p className="font-sans text-base md:text-lg text-navy-muted leading-relaxed max-w-xl">
                            We see you. The nights spent worrying over thinning hair, the
                            frustration of products that promise change but never deliver, and
                            the loss of joy when it comes to styling your hair. It's not just
                            about hair loss—it's about the confidence and identity that go
                            with it. At Hair Wellness Studio, we've helped thousands regain
                            their hair and their confidence. We're here to walk with you every
                            step of the way.
                        </p>

                        {/* CTA Button - Matching Hero section style */}
                        <div className="pt-2">
                            <button aria-label="View Transformation Stories" className="group relative px-8 py-4 overflow-hidden rounded-sm border border-champagne/50 bg-transparent transition-all duration-500 hover:bg-champagne hover:border-champagne cursor-pointer">
                                <span className="font-sans relative z-10 text-sm uppercase tracking-widest text-navy group-hover:text-navy transition-colors duration-300">
                                    View Transformation Stories
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] lg:aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src="/empathy-group.jpg"
                                alt="A group of diverse women smiling and embracing, representing community and support"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EmpathySection;

