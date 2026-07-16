import { FaAws, FaCss3Alt, FaDatabase, FaHtml5, FaJava } from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiJavascript,
  SiReact,
  SiSelenium,
  SiTypescript,
} from "react-icons/si";

import { logoIconsList } from "../constants";

const iconMap = {
  expressjs: SiExpress,
  html5: FaHtml5,
  css3: FaCss3Alt,
  cplusplus: SiCplusplus,
  java: FaJava,
  typescript: SiTypescript,
  javascript: SiJavascript,
  selenium: SiSelenium,
  sql: FaDatabase,
  aws: FaAws,
  react: SiReact,
};

const LogoIcon = ({ icon }) => {
  const Icon = iconMap[icon.name];
  return (
    <div className="flex-none flex flex-col items-center justify-center gap-3 marquee-item">
      <Icon size={56} color={icon.color} />
      <span className="text-white-50 text-sm font-medium">{icon.label}</span>
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
