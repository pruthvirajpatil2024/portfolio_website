import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineCameraAlt } from "react-icons/md";
import { TbBrain } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

// TODO: replace the "#" placeholders below with each project's real repo/demo URL.
const ProjectLinks = ({ sourceCodeUrl = "#", liveUrl = "#" }) => (
  <div className="project-links">
    <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">
      <FaGithub size={16} />
      Source Code
    </a>
    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
      <FiExternalLink size={16} />
      View Live
    </a>
  </div>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const aiProctoringRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, aiProctoringRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img
                src="/images/project1.webp"
                alt="Ryde App Interface"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-content">
              <h2>
                Real time code collaboration environment for remotely working professionals to give them seamless teamwork experience.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React, Express, & MySQL for a fast,
                user-friendly experience.
              </p>
              <ProjectLinks
                sourceCodeUrl="https://github.com/pruthvirajpatil2024/code-sync"
                liveUrl="https://code-sync-1-t1y2.onrender.com/"
              />
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.webp"
                  alt="Library Management Platform"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h2>The Cloud Migration Project</h2>
              <ProjectLinks sourceCodeUrl="https://github.com/pruthvirajpatil2024/AWS-Cloud-Migration" />
            </div>

            <div className="project" ref={aiProctoringRef}>
              {/* No screenshot available yet, so this is a custom icon
                  composition (360deg camera + ML model) standing in for one. */}
              <div className="image-wrapper bg-gradient-to-br from-[#0f1024] to-[#1b1b3a] flex items-center justify-center">
                <div className="absolute inset-0 scan-grid rounded-xl" />

                <div className="relative flex items-center gap-6">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute inline-flex size-20 rounded-full bg-cyan-400/30 animate-ping" />
                    <div className="relative bg-cyan-500/20 border border-cyan-400/50 rounded-full p-4">
                      <MdOutlineCameraAlt className="text-4xl text-cyan-300" />
                    </div>
                    <span className="absolute -bottom-2 -right-2 bg-cyan-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      360°
                    </span>
                  </div>

                  <div className="bg-purple-500/20 border border-purple-400/50 rounded-full p-4">
                    <TbBrain className="text-4xl text-purple-300" />
                  </div>
                </div>
              </div>
              <h2>AI Proctoring System — 360° Camera & ML Models</h2>
              <ProjectLinks
                sourceCodeUrl="https://github.com/pruthvirajpatil2024/IntelliProc-Dual-proctoring-system"
                liveUrl="https://intelliproc-dual-proctoring-system.onrender.com/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
