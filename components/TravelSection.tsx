"use client";
import Image from "next/image";
import heroImage from "../public/end.webp";
import { CirclePlay } from "lucide-react";
import VideoPlayerDemo from "./Video";
import { TextAnimate } from "./magicui/text-animate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#end p', {
      type: 'words'
    })

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#end",
        start: "top bottom",
      },
    });

    scrollTimeline
    .from(titleSplit.words, {
      opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
    })
    .from("#end1 div", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.04,
    }, '-=0.5');
  });

  return (
    <section className="relative min-h-screen pt-20 sm:pt-40 overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImage}
        fill
        alt="Hero Background"
        className="object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-transparent" />

      {/* Content */}
      <div className="w-[95%] sm:max-w-[78%] relative z-10 container mx-auto px-6">
        <div className="flex flex-col gap-5">
          <TextAnimate
            className="text-foreground text-3xl sm:text-5xl md:text-6xl font-bold lg:text-7xl max-w-1/2"
            animation="fadeIn"
            duration={3}
            delay={1}
            by="line"
            as="p"
          >
            TRAVEL AND ENJOY YOUR HOLIDAY
          </TextAnimate>
          {/* <h1 className="text-foreground text-3xl sm:text-5xl md:text-6xl font-bold lg:text-7xl max-w-1/2">
          </h1> */}
          <div className="flex items-center gap-3">
            <CirclePlay stroke="white" size={28} />
            <p className="text-foreground">Choose your fun holiday</p>
          </div>
          <div id="end" className="flex flex-col md:flex-row gap-3">
            <p className="text-foreground sm:max-w-1/3">
              The Raja Ampat Islands are a group of islands located in the
              waters east of Bali in the territory of Indonesia in the Banda
              Sea, administratively. The cluster is under the Raja Ampat
              Regency.
            </p>
            <div id="end1" className="flex flex-col md:flex-row gap-3">
              <VideoPlayerDemo />
              <div className="relative w-full max-w-2xl mx-auto p-4">
                <div className="rounded-lg overflow-hidden group">
                  <Image
                    src="/6.webp"
                    alt="End image"
                    width={500}
                    height={500}
                    style={{ aspectRatio: "16/9" }}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <a
                  href="https://instagram.com/algyspace_"
                  className="block text-white text-sm text-right mt-[4px] ml-2"
                >
                  http://instagram.com/algyspace_
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
