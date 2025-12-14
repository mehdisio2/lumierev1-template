"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What makes your approach different from other aesthetic clinics?",
        answer: "We believe in the art of subtlety. Our philosophy centers on enhancing your natural beauty rather than altering it. Each treatment is meticulously tailored to your unique facial anatomy, lifestyle, and aesthetic goals—ensuring results that look refreshed, never overdone.",
    },
    {
        question: "What can I expect during my first consultation?",
        answer: "Your initial consultation is a private, unhurried experience lasting approximately 45-60 minutes. We'll discuss your aesthetic journey, perform a detailed skin analysis, review your medical history, and develop a bespoke treatment roadmap tailored to your unique needs.",
    },
    {
        question: "How do you ensure natural-looking results?",
        answer: "Our technique prioritizes facial harmony and proportion. We use precise injection methods, premium products, and a conservative approach that can be built upon over time. The goal is always enhancement that looks like the best version of you—never an artificial transformation.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20 md:py-28 lg:py-32 border-t border-champagne/30">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <span className="font-sans inline-block tracking-[0.3em] text-rose-gold uppercase text-xs md:text-sm font-medium mb-4">
                        Questions & Answers
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-navy max-w-2xl mx-auto">
                        Frequently Asked{" "}
                        <span className="italic text-rose-gold-dark">Questions</span>
                    </h2>
                    <p className="font-sans text-base md:text-lg text-navy/70 leading-relaxed max-w-xl mx-auto mt-6">
                        Everything you need to know about your journey to refined, natural beauty.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/60 backdrop-blur-md rounded-xl border border-champagne/40 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-champagne/60"
                        >
                            {/* Question Header */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left cursor-pointer group"
                            >
                                <span className="font-serif text-lg md:text-xl text-navy leading-snug group-hover:text-rose-gold-dark transition-colors duration-300">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-rose-gold shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer Content - Animated */}
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                        <div className="border-t border-champagne/30 pt-6">
                                            <p className="font-sans text-base text-navy/80 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
