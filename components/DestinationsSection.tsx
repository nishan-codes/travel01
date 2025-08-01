"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import DestinationCard from "./DestinationCard";
import { TextAnimate } from "./magicui/text-animate";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const DestinationsSection = () => {
  const leftLineRef = useRef(null);
  const rightLineRef = useRef(null);
  const linesWrapperRef = useRef(null); // Container to observe for scroll trigger

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: linesWrapperRef.current,
        start: "top 80%", // When the top of the line container hits 80% of the viewport
        toggleActions: "play none none none", // Play only once
      },
    });

    tl.to(leftLineRef.current, {
      width: "40%",
      duration: 1,
      ease: "power2.out",
    }).to(
      rightLineRef.current,
      {
        width: "40%",
        duration: 1,
        ease: "power2.out",
      },
      "-=0.8"
    );
  }, []);

  const destinations = [
    {
      image: "/hero/1.webp",
      title: "1st place",
      subtitle: "Raja Ampat Papua Island",
      ranking: "1st place",
    },
    {
      image: "/hero/2.webp",
      title: "2nd place",
      subtitle: "Pura Ulun Danu Beratan Bali",
      ranking: "2nd place",
    },
    {
      image: "/hero/3.webp",
      title: "3rd place",
      subtitle: "Pamukkale Hot Springs",
      ranking: "3rd place",
    },
    {
      image: "/hero/4.webp",
      title: "4th place",
      subtitle: "Gunung Rinjani",
      ranking: "4th place",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div>
            <TextAnimate
              className="font-semibold text-md"
              animation="blurIn"
              as="h1"
            >
              confusion? These recommendations
            </TextAnimate>
          </div>
          <div>
            <TextAnimate
              className="text-2xl lg:text-3xl font-bold text-foreground"
              animation="blurIn"
              as="h1"
            >
              Destination Recommendations
            </TextAnimate>
          </div>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              image={destination.image}
              title={destination.title}
              subtitle={destination.subtitle}
              ranking={destination.ranking}
            />
          ))}
        </div>

        {/* Animated Lines with ScrollTrigger */}
        <div
          ref={linesWrapperRef}
          className="flex justify-between items-center mt-16"
        >
          {/* Left Line */}
          <div
            ref={leftLineRef}
            className="h-1 bg-white rounded"
            style={{ width: "0%" }}
          ></div>

          {/* Spacer */}
          <div className="w-1/4"></div>

          {/* Right Line */}
          <div
            ref={rightLineRef}
            className="h-1 bg-white rounded"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
