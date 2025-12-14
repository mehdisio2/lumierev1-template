"use client"

import Image from "next/image"

const logos = [
    { name: "Vogue", src: "/logos/vogue.svg", width: 120, height: 40 },
    { name: "Elle", src: "/logos/Elle.svg", width: 80, height: 40 },
    { name: "Harper's Bazaar", src: "/logos/harper.svg", width: 140, height: 40, needsInvert: true },
    { name: "Allure", src: "/logos/allure.svg", width: 100, height: 40, needsInvert: true },
    { name: "Dermatology Times", src: "/logos/dermatologytimes.webp", width: 160, height: 40, needsInvert: true },
    { name: "Cosmopolitan", src: "/logos/cosmopolitan.svg", width: 140, height: 40 },
    { name: "Marie Claire", src: "/logos/marie.svg", width: 130, height: 40 },
]

const Logo = ({ name, src, width, height, needsInvert }: { name: string; src: string; width: number; height: number; needsInvert?: boolean }) => {
    return (
        <Image
            src={src}
            alt={name}
            width={width}
            height={height}
            className={`transition-opacity duration-300 opacity-40 hover:opacity-100 object-contain ${needsInvert ? 'invert' : ''}`}
        />
    )
}

export function LogoCarousel() {
    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos]

    return (
        <section className="w-full py-12 overflow-hidden relative" style={{ backgroundColor: "var(--color-pearl)" }}>
            {/* Left gradient fade - positioned at viewport edge */}
            <div
                className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                style={{
                    background: `linear-gradient(to right, var(--color-pearl), transparent)`,
                }}
            />

            {/* Right gradient fade - positioned at viewport edge */}
            <div
                className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                style={{
                    background: `linear-gradient(to left, var(--color-pearl), transparent)`,
                }}
            />

            {/* Scrolling container */}
            <div className="flex">
                <div className="flex items-center gap-16 animate-marquee">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0">
                            <Logo name={logo.name} src={logo.src} width={logo.width} height={logo.height} needsInvert={logo.needsInvert} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

