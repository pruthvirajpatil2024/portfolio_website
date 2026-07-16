import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBookOpen, FaGithub, FaTrophy } from "react-icons/fa";

import { achievements } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  trophy: FaTrophy,
  branch: FaGithub,
  paper: FaBookOpen,
};

const Achievements = () => {
  const containerRef = useRef(null);
  // Hover flips the card on desktop, but touch devices don't have hover -
  // tapping toggles this instead so the back is still reachable on mobile.
  const [flippedIndex, setFlippedIndex] = useState(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".achievement-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".achievements-grid",
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="achievements"
      className="flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Achievements & Milestones" sub="🏆 Beyond the Code" />

        <div className="achievements-grid grid md:grid-cols-3 grid-cols-1 gap-8 mt-16">
          {achievements.map(({ icon, title, highlight, detail }, index) => {
            const Icon = iconMap[icon];
            return (
              <div
                key={index}
                className={`achievement-card ${flippedIndex === index ? "is-flipped" : ""}`}
                onClick={() =>
                  setFlippedIndex((current) => (current === index ? null : index))
                }
              >
                <div className="achievement-card-inner">
                  <div className="achievement-face achievement-front card-border rounded-xl">
                    <Icon className="size-12 text-amber-400" />
                    <h3 className="text-xl font-semibold mt-4">{title}</h3>
                    <p className="text-white-50 text-lg mt-1">{highlight}</p>
                    <span className="text-white-50/50 text-sm mt-6">
                      Hover or tap to read more
                    </span>
                  </div>
                  <div className="achievement-face achievement-back card-border rounded-xl">
                    <p className="text-white-50 text-base">{detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
