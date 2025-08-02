import Image from "next/image";

interface DestinationCardProps {
  image: string;
  title: string;
  subtitle: string;
  ranking: string;
  className?: string;
}

const DestinationCard = ({
  image,
  title,
  subtitle,
  ranking,
  className,
}: DestinationCardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer ${className}`}
    >
      {/* Optimized Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover transition-transform duration-250 group-hover:scale-105"
        priority={false} // Optional: Set to true for above-the-fold content
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
        <div className="space-y-1 text-center">
          <h3 className="text-2xl font-bold text-foreground">{ranking}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-travel-teal/0 group-hover:bg-travel-teal/10 transition-colors duration-300" />
    </div>
  );
};

export default DestinationCard;
