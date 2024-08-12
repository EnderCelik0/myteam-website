import iconPerson from "../../assets/icon/icon-person.svg";
import iconChart from "../../assets/icon/icon-chart.svg";
import iconCog from "../../assets/icon/icon-cog.svg";
import FeatureList from "../feature-list";

export default function AskUsAbout() {
  const features = [
    {
      icon: iconPerson,
      title: "The quality of our talent network",
    },
    {
      icon: iconCog,
      title: "Usage & implementation of out software",
    },
    {
      icon: iconChart,
      title: "How we help drive innovation",
    },
  ];

  return (
    <div className="h-[26.75rem] text-white">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-bold-md font-bold">Contact</h2>
        </div>
        <div>
          <p className="mb-[2rem] text-[2rem] text-light-coral">Ask us about</p>
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <Feature key={index} icon={feature.icon} title={feature.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Feature = ({ icon, title }) => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <img src={icon} alt="feature-icon" className="block max-w-full" />
        <div>
          <h1 className="text-bold-xs font-bold leading-none">{title}</h1>
        </div>
      </div>
    </div>
  );
};
