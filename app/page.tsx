// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import TravelSection from "@/components/TravelSection";

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DestinationsSection />
      <TravelSection />
    </div>
  );
};

export default page;
