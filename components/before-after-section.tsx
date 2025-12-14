"use client";

import Image from "next/image";

const testimonials = [
    {
        image: "/before-after/image1.jpg",
        quote:
            "I had tried everything to address my skin concerns, but nothing worked until I came to Alami Aesthetics. The team truly listened and created a personalized plan for me. The results have been incredible – I finally feel like myself again!",
        name: "Sophie M.",
        duration: "12-week transformation",
    },
    {
        image: "/before-after/image2.jpg",
        quote:
            "I had struggled with skin texture for years and felt so self-conscious about it. Alami Aesthetics not only helped me understand the root cause but also gave me a clear path to recovery. Now, my skin is glowing, and I'm more confident than ever.",
        name: "Amélie L.",
        duration: "8-week transformation",
    },
    {
        image: "/before-after/image3.jpg",
        quote:
            "The personalized approach at Alami Aesthetics made all the difference. They didn't just treat my skin – they took time to understand my lifestyle and goals. I've never felt more radiant and confident.",
        name: "Claire D.",
        duration: "10-week transformation",
    },
];

export function BeforeAfterSection() {
    return (
        <section className="bg-pearl py-20 md:py-28 lg:py-32">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-16 lg:mb-20">
                    {/* Main Title */}
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-navy max-w-2xl">
                        Real Results, <span className="italic text-rose-gold-dark">Real Stories</span>
                    </h2>

                    {/* Subtitle Text */}
                    <p className="font-sans text-base md:text-lg text-navy/70 leading-relaxed max-w-[38ch] lg:text-right lg:mt-2">
                        We've supported countless clients in restoring their confidence and embracing the beauty of healthy skin. Explore their true stories of transformation and renewed hope.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white/60 backdrop-blur-md rounded-lg p-6 md:p-8 border border-champagne/40 shadow-lg"
                        >
                            {/* Single Image */}
                            <div className="relative aspect-4/5 overflow-hidden rounded-xl mb-5">
                                <Image
                                    src={testimonial.image}
                                    alt="Transformation result"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            {/* Quote */}
                            <blockquote className="font-sans text-sm text-navy/80 leading-relaxed mb-5">
                                "{testimonial.quote}"
                            </blockquote>

                            {/* Client Info */}
                            <div className="flex items-center gap-3">
                                <div className="h-px flex-1 bg-champagne/60"></div>
                                <p className="font-serif text-base text-navy italic">
                                    {testimonial.name}
                                </p>
                                <span className="text-champagne">•</span>
                                <p className="font-sans text-xs text-navy/60">
                                    ({testimonial.duration})
                                </p>
                                <div className="h-px flex-1 bg-champagne/60"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <button aria-label="View More Transformations" className="group relative px-8 py-4 overflow-hidden rounded-sm bg-navy text-white border border-navy transition-all duration-500 hover:bg-transparent hover:text-navy">
                        <span className="font-sans relative z-10 text-sm uppercase tracking-widest transition-colors duration-300">
                            View More Transformations
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BeforeAfterSection;
