"use client";

import Image from "next/image";
import { Heart, HeartCrack } from "lucide-react";

const problems = [
    "Confusion caused by endless trends and 10-step routines.",
    'Fear of looking "frozen," "filled," or unlike yourself.',
    "Hiding texture or pigmentation behind heavy makeup.",
    "Investing in luxury creams that never truly deliver results.",
];

const solutions = [
    'A "Less is More" philosophy prioritizing skin health first.',
    "Bespoke treatments that respect your unique anatomy.",
    "Subtle enhancements that have everyone guessing, not staring.",
    "A simplified, medical-grade regimen that actually works.",
];

export function TransformationSection() {
    return (
        <section className="bg-pearl py-20 md:py-28 lg:py-32">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-16 lg:mb-20">
                    {/* Main Title */}
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-navy max-w-2xl">
                        From Overwhelmed to Effortless: <span className="italic text-rose-gold-dark">Your Skin's New Narrative</span>
                    </h2>

                    {/* Subtitle Text - positioned on right, right-aligned on desktop */}
                    <p className="font-sans text-base md:text-lg text-navy/70 leading-relaxed max-w-[35ch] lg:text-right lg:mt-2">
                        Navigating modern aesthetics can feel chaotic. We silence the noise to reveal the refined, authentic version of you.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                    {/* Card 1: The Problem */}
                    <div className="bg-white/60 backdrop-blur-md rounded-lg p-8 md:p-10 border border-champagne/40 shadow-lg h-full">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                            {/* Text Content */}
                            <div className="flex-1 order-2 md:order-1">
                                <h3 className="font-serif text-2xl md:text-3xl text-navy mb-6">
                                    The Modern Skincare Fatigue
                                </h3>
                                <ul className="space-y-4">
                                    {problems.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <HeartCrack className="w-5 h-5 text-rose-gold mt-0.5 shrink-0" />
                                            <span className="font-sans text-sm md:text-base text-navy/80 leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Image */}
                            <div className="w-full md:w-56 lg:w-64 shrink-0 order-1 md:order-2 self-stretch">
                                <div className="relative h-full min-h-[200px] overflow-hidden rounded-lg">
                                    <Image
                                        src="/problem-image.jpg"
                                        alt="Modern skincare fatigue visualization"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 256px"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: The Solution */}
                    <div className="bg-white/60 backdrop-blur-md rounded-lg p-8 md:p-10 border border-champagne/40 shadow-lg h-full">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                            {/* Text Content */}
                            <div className="flex-1 order-2 md:order-1">
                                <h3 className="font-serif text-2xl md:text-3xl text-navy mb-6">
                                    The Alami Aesthetic Promise
                                </h3>
                                <ul className="space-y-4">
                                    {solutions.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Heart className="w-5 h-5 text-rose-gold mt-0.5 shrink-0" />
                                            <span className="font-sans text-sm md:text-base text-navy/80 leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Image */}
                            <div className="w-full md:w-56 lg:w-64 shrink-0 order-1 md:order-2 self-stretch">
                                <div className="relative h-full min-h-[200px] overflow-hidden rounded-lg">
                                    <Image
                                        src="/solution-image.jpg"
                                        alt="Refined aesthetic result"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 256px"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TransformationSection;
