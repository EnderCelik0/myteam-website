import iconPerson from "../../assets/icon/icon-person.svg";
import iconChart from "../../assets/icon/icon-chart.svg";
import iconCog from "../../assets/icon/icon-cog.svg";

export default function Features() {
  return (
    <div className="grid h-[42.75rem] grid-cols-2 items-center overflow-hidden py-40">
      <div className="relative self-start before:absolute before:-top-1/2 before:h-1 before:w-12 before:bg-light-coral">
        <h3 className="text-white text-balance text-bold-sm leading-none">
          Build & manage distributed teams like no one else.
        </h3>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex gap-5">
          <img
            src={iconPerson}
            alt="feature-icon"
            className="block max-w-full"
          />
          <div className="flex flex-col">
            <h1 className="text-bold-xs font-bold leading-none text-light-coral">
              Experienced individuals
            </h1>
            <p className="text-white/80 text-semibold-xs">
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <img src={iconCog} alt="feature-icon" className="block max-w-full" />

          <div>
            <h1 className="text-bold-xs font-bold leading-none text-light-coral">
              Easy to implement
            </h1>
            <p className="text-white/80 text-semibold-xs">
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <img
            src={iconChart}
            alt="feature-icon"
            className="block max-w-full"
          />
          <div>
            <h1 className="mb-4 text-bold-xs font-bold leading-none text-light-coral">
              Enhanced Productivity{" "}
            </h1>
            <p className="text-white/80 text-semibold-xs">
              Our customized platform with in-built analytics helps you manage
              your distributed teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
