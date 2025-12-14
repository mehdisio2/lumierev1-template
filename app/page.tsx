import Image from "next/image";
import { LogoCarousel } from "@/components/logo-carousel";
import { EmpathySection } from "@/components/empathy-section";
import { TransformationSection } from "@/components/transformation-section";
import { ServicesSection } from "@/components/services-section";
import { BeforeAfterSection } from "@/components/before-after-section";
import { FAQSection } from "@/components/faq-section";
import { LastCTASection } from "@/components/last-cta-section";
import { Footer } from "@/components/footer";

const HeroSection = () => {
  return (
    <div>
      <section className="relative h-screen w-full overflow-hidden">
        {/* TOP NAVIGATION BAR */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">

          {/* 1. The Logo (Text-based luxury logo) */}
          <div className="flex flex-col">
            <span className="font-serif text-2xl text-white tracking-wider font-bold drop-shadow-sm">
              ALAMI
            </span>
            <span className="font-sans text-[8px] text-rose-gold uppercase tracking-[0.3em]">
              Aesthetics
            </span>
          </div>

          {/* 2. The "Menu" Trigger (Icon + Text) */}
          <button className="group flex items-center gap-3 cursor-pointer">
            {/* The text "MENU" - hidden on mobile, visible on desktop */}
            <span className="font-sans hidden md:block text-xs font-normal tracking-[0.2em] text-white group-hover:text-rose-gold transition-colors duration-300">
              MENU
            </span>

            {/* The Icon (Two simple lines, not a standard hamburger) */}
            <div className="flex flex-col gap-1.5 items-end">
              <div className="h-[2px] w-8 bg-white group-hover:w-10 group-hover:bg-rose-gold transition-all duration-300" />
              <div className="h-[2px] w-5 bg-white group-hover:w-10 group-hover:bg-rose-gold transition-all duration-300" />
            </div>
          </button>

        </nav>
        {/* 1. Background Image with "Luxury" Animation */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Water Texture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 animate-slow-zoom"
          />
        </div>

        {/* 2. Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 3. The Content: Centered and Elegant */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 md:px-4 text-center">
          {/* Top Tagline: Wide spacing, uppercase, Rose Gold color */}
          <span className="font-sans mb-6 tracking-[0.3em] text-rose-gold uppercase text-xs md:text-sm font-medium opacity-0 animate-fade-in-up delay-100">
            Aesthetic Medicine • Paris
          </span>

          {/* Main Headline: Big, Serif, White with enhanced text shadow for readability */}
          <h1 className="font-serif max-w-4xl text-4xl sm:text-5xl md:text-7xl leading-tight text-white text-shadow-soft opacity-0 animate-fade-in-up delay-300">
            Reveal Your <br />
            <span className="italic text-rose-gold">Timeless</span> Nature
          </h1>

          {/* Subtext: Thin, readable, Pearl color */}
          <p className="font-sans mt-6 max-w-lg text-lg text-white/90 font-light opacity-0 animate-fade-in-up delay-500">
            Advanced dermatology and facial rejuvenation tailored to your unique structure.
          </p>

          {/* 4. The "Glass" CTA Button */}
          <div className="mt-10 opacity-0 animate-fade-in-up delay-700">
            <button className="group relative px-8 py-4 overflow-hidden rounded-sm bg-white/10 backdrop-blur-sm border border-white/30 transition-all duration-500 hover:bg-white hover:border-white shadow-lg shadow-black/10">
              <span className="font-sans relative z-10 text-sm uppercase tracking-widest text-white group-hover:text-navy transition-colors duration-300">
                Book Consultation
              </span>
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-1000">

            {/* A. The "Vogue" Avatar Stack (Overlapping Circles) */}
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative h-10 w-10 rounded-full border-[2px] border-navy overflow-hidden">
                  <Image
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    alt="Patient"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover grayscale opacity-80"
                  />
                </div>
              ))}
            </div>

            {/* B. The Rating Text */}
            <div className="text-left flex flex-col justify-center">
              {/* 5 Stars in Rose Gold */}
              <div className="flex gap-0.5 text-rose-gold">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                ))}
              </div>

              {/* The Stat - Using "Perfect" instead of just a number looks more premium */}
              <p className="font-sans text-xs text-white/85 mt-1 font-light tracking-wide">
                <span className="text-white font-semibold">98%</span> Satisfaction Rate
              </p>
            </div>

          </div>
        </div>

        {/* --- Doctor Profile Card (Floating Glass) --- */}
        {/* Mobile: in-flow centered card | Desktop: absolute positioned */}
        <div className="relative w-[90%] mx-auto mt-10 md:absolute md:bottom-20 md:right-20 md:w-auto md:mx-0 md:mt-0 opacity-0 animate-fade-in-up delay-1000">
          {/* The Glass Container */}
          <div className="flex items-center gap-4 p-5 rounded-xl md:rounded-sm bg-white/10 md:bg-white/5 backdrop-blur-md border border-champagne/30 shadow-2xl max-w-xs mx-auto md:mx-0 transition-transform hover:scale-105 duration-500 cursor-default">

            {/* 1. Doctor Image (Circle) */}
            <div className="relative h-16 w-16 shrink-0">
              <Image
                src="/doctor-portrait.jpg"
                alt="Dr. Sarah"
                width={64}
                height={64}
                className="h-full w-full object-cover rounded-full border border-champagne/50 grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Verified Checkmark Badge */}
              <div className="absolute bottom-0 right-0 bg-champagne h-4 w-4 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-navy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
            </div>

            {/* 2. Doctor Text Details */}
            <div className="text-left">
              <h3 className="font-serif text-white text-xl leading-none">
                Dr. Sarah Alami
              </h3>
              <p className="font-sans text-rose-gold text-[10px] uppercase tracking-widest mt-1">
                Board Certified • Paris
              </p>
              <p className="text-white/70 text-[9px] mt-2 italic">
                "Artistry meets Science"
              </p>
            </div>
          </div>
        </div>
        {/* 7. The "Brand Story" Play Trigger (Bottom Left) - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-8 left-8 md:bottom-20 md:left-20 text-left opacity-0 animate-fade-in delay-1000">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-pearl/60">
            Coordinates
          </p>
          <p className="font-sans text-xs text-champagne mt-1 tracking-widest">
            48.8566° N • Paris
          </p>
        </div>

        {/* 5. Footer "Badge" (Scroll indicator) - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-8 w-full text-center">
          <p className="font-sans text-[10px] tracking-[0.2em] text-rose-gold/80">
            SCROLL TO DISCOVER
          </p>
        </div>
      </section >
      <LogoCarousel />
      <EmpathySection />
      <TransformationSection />
      <ServicesSection />
      <BeforeAfterSection />
      <FAQSection />
      <LastCTASection />
      <Footer />
    </div >
  );
};

export default HeroSection;