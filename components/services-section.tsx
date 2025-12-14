"use client";

import { ServiceCard } from "./service-card";

const services = [
    {
        imageSrc: "/services/clinical-dermatology.jpg",
        title: "Clinical Dermatology",
    },
    {
        imageSrc: "/services/facial-harmonization.jpg",
        title: "Aesthetic Harmonization",
    },
    {
        imageSrc: "/services/lazer.jpg",
        title: "Advanced Laser & Light",
    },
    {
        imageSrc: "/services/resuraface.jpg",
        title: "Resurfacing & Regeneration",
    },
];

export function ServicesSection() {
    return (
        <section className="bg-white py-20 md:py-28 lg:py-32 border-t border-champagne/30">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-navy max-w-4xl mx-auto">
                        Science-Led. <span className="italic text-rose-gold-dark">Artfully</span> Applied.
                    </h2>
                    <p className="font-sans text-base md:text-lg text-navy/60 leading-relaxed max-w-2xl mx-auto mt-6">
                        A curated portfolio of clinical treatments designed to restore health, balance, and confidence.
                    </p>
                </div>

                {/* Cards Grid - 4 columns for 4 services */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            imageSrc={service.imageSrc}
                            title={service.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
