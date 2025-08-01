"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import DestinationCard from "./DestinationCard";
import { TextAnimate } from "./magicui/text-animate";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const DestinationsSection = () => {
  useGSAP(() => {
    const isSmallScreen = window.innerWidth < 1024;

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#parent",
        start: "top bottom",
      },
    });

    // scrollTimeline.from(".card", {
    //   opacity: 0,
    //   duration: 3,
    //   ease: "power1.inOut",
    //   stagger: 0.04,
    // });

    gsap.utils.toArray(".card").forEach((card, index) => {
      const animationProps = isSmallScreen
        ? { x: index % 2 === 0 ? -100 : 100, opacity: 0 }
        : { x: index < 2 ? -100 : 100, opacity: 0 };

      const finalProps = {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top center",
          toggleActions: "play none none none",
        },
      };

      gsap.fromTo(card, animationProps, finalProps);

      // gsap.fromTo(
      //   card,
      //   {
      //     x: direction,
      //     opacity: 0,
      //   },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     duration: 1,
      //     ease: "power3.out",
      //     scrollTrigger: {
      //       trigger: card,
      //       start: "top center",
      //       toggleActions: "play none none none",
      //     },
      //   }
      // );
    });

    gsap.to("#left", {
      width: "33.3333%", // 1/3 of 100%
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#lines",
        start: "top bottom",
      },
    });

    gsap.to("#right", {
      width: "33.3333%",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#lines",
        start: "top bottom",
      },
    });
  });

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
              by="character"
              duration={2}
            >
              confusion? These recommendations
            </TextAnimate>
          </div>
          <div>
            <TextAnimate
              className="text-2xl lg:text-3xl font-bold text-foreground"
              animation="blurIn"
              as="h1"
              by="character"
              duration={2}
            >
              Destination Recommendations
            </TextAnimate>
          </div>
        </div>

        {/* Destination Cards */}
        <div
          id="parent"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {destinations.map((destination, index) => (
            <div className="card" key={index}>
              <DestinationCard
                image={destination.image}
                title={destination.title}
                subtitle={destination.subtitle}
                ranking={destination.ranking}
              />
            </div>
          ))}
        </div>

        {/* Animated Lines with ScrollTrigger */}
        <div id="lines" className="flex justify-between items-center mt-16">
          {/* Left Line */}
          <div id="left" className="h-1 bg-white rounded w-0"></div>

          {/* Spacer */}
          <div className="w-1/4"></div>

          {/* Right Line */}
          <div id="right" className="h-1 bg-white rounded w-0"></div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
