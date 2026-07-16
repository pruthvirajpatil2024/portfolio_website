import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { socialLinks } from "../constants";

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  leetcode: SiLeetcode,
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-start">
            Let&apos;s build something great together.
          </p>
        </div>
        <div className="socials">
          {socialLinks.map(({ name, url }) => {
            const Icon = iconMap[name];
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
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Pruthviraj Patil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
