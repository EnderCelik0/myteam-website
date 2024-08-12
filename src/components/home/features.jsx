import FeatureList from "../feature-list";

export default function Features() {
  return (
    <div className="grid h-[42.75rem] grid-cols-2 items-center overflow-hidden py-40">
      <div className="relative self-start before:absolute before:-top-1/2 before:h-1 before:w-12 before:bg-light-coral">
        <h3 className="text-balance text-bold-sm leading-none text-white">
          Build & manage distributed teams like no one else.
        </h3>
      </div>

      <FeatureList />
    </div>
  );
}
