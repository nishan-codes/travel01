"use client";
import Image from "next/image";
import heroImage from "../public/hero/hero1.webp";
import { TextAnimate } from "./magicui/text-animate";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const nums = [
  { value: "03", active: false },
  { value: "04", active: false },
  { value: "05", active: true },
  { value: "06", active: false },
  { value: "07", active: false },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const redLineRef = useRef(null);
  const whiteLineRef = useRef(null);

  useGSAP(() => {
    // Animate the red progress line
    gsap.to(redLineRef.current, {
      width: "33.33%",
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5,
    });

    // Animate the white line in the header
    gsap.fromTo(
      whiteLineRef.current,
      { 
        width: "0%", 
        transformOrigin: "right center" 
      },
      {
        width: "90%",
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5,
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen pt-30 sm:pt-60 overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImage}
        fill
        alt="Hero Background"
        className="object-cover object-top"
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="w-[95%] sm:max-w-[78%] relative z-10 container mx-auto px-6">
        {/* First Section Done  */}
        <div className="relative flex justify-between">
          <h1
            className="text-3xl max-w-1/4 sm:text-5xl md:text-6xl font-bold lg:text-7xl lg:max-w-sm"
          >
            <TextAnimate animation="slideUp" by="word">
              VISIT INDONESIA
            </TextAnimate>
          </h1>
          <div className="shadow-2xl flex flex-col justify-center items-start space-y-2 bg-black/30 p-5 rounded-md">
            {nums.map((num, index) => (
              <div key={index}>
                <span
                  className={`${
                    num.active ? "active" : ""
                  } text-foreground inline-block text-lg sm:text-2xl md:text-3xl max-w-1/4 font-bold lg:text-4xl lg:max-w-sm`}
                >
                  <TextAnimate
                    animation="blurInUp"
                    by="character"
                    duration={4.5}
                  >
                    {num.value}
                  </TextAnimate>
                </span>
              </div>
            ))}
          </div>
          <div className="absolute w-full left-[calc(99%)] md:left-[calc(100%)] top-22 sm:top-24 md:top-27 lg:top-29 right-0">
            <span
              ref={whiteLineRef}
              className="w-0 right-0 border-b-2 border-white inline-block"
            ></span>
          </div>
        </div>

        {/* Second Section  */}
        <div className="flex flex-col sm:flex-row justify-between items-start mt-10 sm:mt-30 gap-5">
          <div className="max-w-[300px] text-foreground ">
            <TextAnimate
              animation="fadeIn"
              by="line"
              as="p"
              duration={15}
              delay={1}
            >
              Mount Semeru is a majestic volcanic located in eastern Java,
              Indonesia. It&rsquo;s known as Mahameru, The Great Mountain and is
              the highest peak on the island.
            </TextAnimate>
          </div>
          <div className="max-w-[300px] text-foreground">
            <TextAnimate
              animation="fadeIn"
              by="line"
              as="p"
              duration={45}
              delay={1.3}
            >
              Nusa Penida Island is in the southeastern part of the Indonesian
              island
            </TextAnimate>
          </div>
          <div className="max-w-[300px] text-foreground">
            <TextAnimate
              animation="fadeIn"
              by="line"
              as="p"
              duration={55}
              delay={1.6}
            >
              The Raja Ampat Islands are a group of islands located in the
              waters east of Bali in the territory of Indonesia in the Banda
              Sea, administratively.
            </TextAnimate>
          </div>
        </div>

        <h1 className="my-10 sm:mt-20 text-3xl text-foreground">
          <TextAnimate animation="slideLeft" by="character" delay={1.8}>
            SWIPE &gt;&gt;
          </TextAnimate>
        </h1>

        <div className="relative bottom-5 w-3/4 mx-auto h-2 mt-4">
          {/* White line */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white rounded"></div>
          {/* Red line covering 1/3rd */}
          <div
            ref={redLineRef}
            style={{ width: "0%" }}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-red-600 rounded"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;