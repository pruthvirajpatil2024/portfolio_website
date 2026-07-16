import { FiRefreshCw, FiShield } from "react-icons/fi";
import { FaPuzzlePiece } from "react-icons/fa";

import { abilities } from "../constants";

const iconMap = {
  adaptability: FiRefreshCw,
  resilience: FiShield,
  "problem-solving": FaPuzzlePiece,
};

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ icon, title, desc }) => {
        const Icon = iconMap[icon];
        return (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            {/* ICON */}
            <div className="flex items-center">
              <Icon className="w-12 h-12 text-white-50" />
            </div>

            <h3 className="text-white text-2xl font-semibold mt-2">
              {title}
            </h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default FeatureCards;
