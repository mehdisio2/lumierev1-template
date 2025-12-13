"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { Playfair_Display, Lato } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600"] })
const lato = Lato({ subsets: ["latin"], weight: ["300", "400"] })

// Service data
interface ServiceItem {
    id: string
    title: string
    description: string
    treatments: string[]
    imageSrc: string
    imageAlt: string
}

const services: ServiceItem[] = [
    {
        id: "facial-architecture",
        title: "FACIAL ARCHITECTURE & CONTOUR",
        description:
            "Restoring volume and defining structure with precision injectables. Our approach analyzes the geometry of your face to deliver results that enhance your natural features.",
        treatments: [
            "Dermal Fillers",
            "Anti-Wrinkle Injections",
            "Sculptra Aesthetic",
            "Non-Surgical Rhinoplasty",
        ],
        imageSrc: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Clinical facial treatment procedure",
    },
    {
        id: "skin-quality",
        title: "SKIN QUALITY & RESURFACING",
        description:
            "Advanced modalities to improve texture, tone, and luminosity. We utilize state-of-the-art technology tailored to your skin's unique needs.",
        treatments: [
            "Radiofrequency Microneedling",
            "CO2 Laser",
            "Chemical Peels",
            "Hydrafacial MD",
        ],
        imageSrc: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Laser skincare treatment device",
    },
    {
        id: "body-definition",
        title: "BODY DEFINITION",
        description:
            "Non-invasive technologies for targeted fat reduction and skin tightening. Sculpt and define your silhouette without surgery or downtime.",
        treatments: [
            "CoolSculpting Elite",
            "Emsculpt NEO",
            "Skin Tightening Therapies",
        ],
        imageSrc: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Body contouring procedure",
    },
]

// Rose Gold Diamond bullet component
function DiamondBullet() {
    return (
        <span
            className="inline-block w-2 h-2 bg-[#e6c6b3] rotate-45 mr-3 shrink-0"
            aria-hidden="true"
        />
    )
}

// Accordion Trigger component
function AccordionTrigger({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof Accordion.Trigger>) {
    return (
        <Accordion.Header className="flex">
            <Accordion.Trigger
                className={`
                    group flex flex-1 items-center justify-between py-6 px-8
                    text-left transition-all duration-300 cursor-pointer
                    ${className}
                `}
                {...props}
            >
                <span className={`${playfair.className} text-xl md:text-2xl text-[#0f172a] tracking-wide`}>
                    {children}
                </span>
                <Plus
                    className="h-6 w-6 shrink-0 text-[#0f172a]/40 transition-all duration-300 
                    group-hover:text-[#e6c6b3] 
                    group-data-[state=open]:rotate-45 
                    group-data-[state=open]:text-[#e6c6b3]"
                    strokeWidth={1.5}
                />
            </Accordion.Trigger>
        </Accordion.Header>
    )
}

// Accordion Content component with smooth animation
function AccordionContent({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof Accordion.Content>) {
    return (
        <Accordion.Content
            className={`
                overflow-hidden 
                data-[state=open]:animate-accordion-down 
                data-[state=closed]:animate-accordion-up
                ${className}
            `}
            {...props}
        >
            <div className="px-8 pb-8">{children}</div>
        </Accordion.Content>
    )
}

// Individual service accordion item
function ServiceAccordionItem({ service }: { service: ServiceItem }) {
    return (
        <Accordion.Item
            value={service.id}
            className="
                bg-white rounded-lg shadow-sm 
                border border-transparent 
                transition-all duration-300 
                hover:border-[#e6c6b3]
                data-[state=open]:border-[#e6c6b3]
                overflow-hidden
            "
        >
            <AccordionTrigger>{service.title}</AccordionTrigger>
            <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Image Column - 40% (2/5) */}
                    <div className="md:col-span-2">
                        <div className="aspect-4/3 overflow-hidden rounded-lg bg-[#0f172a]/5">
                            <img
                                src={service.imageSrc}
                                alt={service.imageAlt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Column - 60% (3/5) */}
                    <div className="md:col-span-3 flex flex-col justify-center">
                        <p className={`${lato.className} text-[#0f172a]/80 text-base md:text-lg leading-relaxed mb-6`}>
                            {service.description}
                        </p>

                        {/* Treatment List */}
                        <ul className="space-y-3">
                            {service.treatments.map((treatment, index) => (
                                <li
                                    key={index}
                                    className={`${lato.className} flex items-center text-[#0f172a] text-sm md:text-base`}
                                >
                                    <DiamondBullet />
                                    {treatment}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </AccordionContent>
        </Accordion.Item>
    )
}

export default function ServicesDarkBento() {
    return (
        <section className="w-full bg-[#fbfaf8] py-24 md:py-32 lg:py-40">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className={`${lato.className} text-[10px] tracking-[0.3em] uppercase text-[#0f172a]/40 mb-4 block`}>
                        Our Expertise
                    </span>
                    <h2 className={`${playfair.className} text-4xl md:text-5xl text-[#0f172a]`}>
                        Curated <span className="italic text-[#d4af37]">Services</span>
                    </h2>
                </div>

                {/* Glass Accordion */}
                <Accordion.Root
                    type="single"
                    collapsible
                    className="space-y-4"
                >
                    {services.map((service) => (
                        <ServiceAccordionItem key={service.id} service={service} />
                    ))}
                </Accordion.Root>
            </div>
        </section>
    )
}
