import iconPerson from "../assets/icon/icon-person.svg";
import iconChart from "../assets/icon/icon-chart.svg";
import iconCog from "../assets/icon/icon-cog.svg";

export default function FeatureList(featureList) {
  const features = [
    {
      icon: iconPerson,
      title: "Experienced individuals",
      description:
        "Our network is made up of highly experienced professionals who are passionate about what they do.",
    },
    {
      icon: iconCog,
      title: "Easy to implement",
      description:
        "Our processes have been refined over years of implementation meaning our teams always deliver.",
    },
    {
      icon: iconChart,
      title: "Enhanced Productivity",
      description:
        "Our customized platform with in-built analytics helps you manage your distributed teams.",
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {features.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

export const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex gap-5">
        <img src={icon} alt="feature-icon" className="block max-w-full" />
        <div>
          <h1 className="text-bold-xs font-bold leading-none text-light-coral">
            {title}
          </h1>
          <p className="text-semibold-xs text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
};
