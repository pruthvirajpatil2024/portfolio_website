import { lazy, Suspense } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { socialLinks, words } from "../constants";

const HeroBallExperience = lazy(() =>
  import("../components/models/hero_models/HeroBallExperience")
);

const socialIconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  leetcode: SiLeetcode,
};

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.webp" alt="" fetchpriority="high" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center w-full md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Pruthviraj — a MERN Stack Developer with a strong passion for building modern, scalable web experiences.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                text="Download CV"
                className="md:w-80 md:h-16 w-60 h-12"
                href="/Pruthviraj_Patil_CV_B.pdf"
                download
              />

              <div className="flex items-center gap-3">
                {socialLinks.map(({ name, url }) => {
                  const Icon = socialIconMap[name];
                  return (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="icon"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D cricket-ball-to-photo animation */}
        <figure className="w-full xl:w-auto">
          <div className="hero-3d-layout">
            <Suspense fallback={null}>
              <HeroBallExperience />
            </Suspense>
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;