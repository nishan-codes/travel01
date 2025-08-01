interface DestinationCardProps {
  image: string;
  title: string;
  subtitle: string;
  ranking: string;
}

const DestinationCard = ({ image, title, subtitle, ranking }: DestinationCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-250 group-hover:scale-105"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
        <div className="space-y-1 text-center">
          <h3 className="text-2xl font-bold text-foreground">{ranking}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-travel-teal/0 group-hover:bg-travel-teal/10 transition-colors duration-300" />
    </div>
  );
};

export default DestinationCard;