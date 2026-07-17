import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

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
              <div className="image-wrapper bg-[#141433]">
                <img
                  src="/images/ai-proctoring.webp"
                  alt="AI Proctoring System Illustration"
                  loading="lazy"
                  decoding="async"
                />
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
