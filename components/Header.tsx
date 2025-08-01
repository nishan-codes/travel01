"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (headerRef.current) {
      const navTween = gsap.timeline({
        scrollTrigger: {
          trigger: document.body, // Use document.body or a specific element
          start: "top -80px", // Animation starts after scrolling 80px down
          end: "+=100", // Animation ends after 100px more scroll
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });

      navTween.fromTo(
        headerRef.current,
        {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
        },
        {
          backdropFilter: "blur(20px)", // Fixed typo: was "backgroundFilter"
          duration: 1,
          ease: "power1.inOut",
        }
      );
    }
  }, []);

  const logoDotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (logoDotRef.current) {
      // Create a timeline for the logo animation
      const logoTl = gsap.timeline({ repeat: -1 });

      logoTl
        .to(logoDotRef.current, {
          borderColor: "#fb2c36", // teal-500
          duration: 1.5,
          ease: "power1.inOut",
        })
        .to(logoDotRef.current, {
          borderColor: "#c10007", // orange-400
          duration: 1.5,
          ease: "power1.inOut",
        });
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-[95%] sm:max-w-[78%] mx-auto box-border fixed top-0 left-0 right-0 z-50 border-b-2 border-white transition-all duration-300"
    >
      <div className="container mx-auto mt-8 mb-1">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-travel-teal rounded-full flex items-center justify-center">
              <span
                ref={logoDotRef}
                className="bg-red-800 rounded-full size-5 border-2 border-red-600"
                style={{ display: "inline-block" }}
              ></span>
            </div>
            <span className="font-semibold text-lg text-foreground">
              TRAVEL
            </span>
          </div>

          {/* Navigation */}
          <div className="text-foreground w-1/2 justify-center border-b-2 border-red-600 absolute left-1/2 bottom-[-2px] -translate-x-1/2 z-50 mx-auto hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="">
              Wide Sea
            </Button>
            <Button variant="ghost" className="">
              Mountains
            </Button>
            <Button variant="ghost" className="">
              Island
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
