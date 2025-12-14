"use client";

interface ServiceCardProps {
    imageSrc: string;
    title: string;
}

export function ServiceCard({
    imageSrc,
    title,
}: ServiceCardProps) {
    return (
        <div className="relative w-full aspect-2/3 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer">
            {/* Background Image */}
            <img
                src={imageSrc}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            {/* Subtle Gradient Overlay - Only at bottom for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Text Content - Bottom left aligned */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="font-serif text-base md:text-lg text-white font-medium leading-snug">
                    {title}
                </h3>
            </div>
        </div>
    );
}

export default ServiceCard;
