import avatar1 from "../../assets/avatar/avatar-nikita.jpg";
import avatar2 from "../../assets/avatar/avatar-christian.jpg";
import avatar3 from "../../assets/avatar/avatar-cruz.jpg";
import avatar4 from "../../assets/avatar/avatar-drake.jpg";
import avatar5 from "../../assets/avatar/avatar-griffin.jpg";
import avatar6 from "../../assets/avatar/avatar-aden.jpg";
import Plus from "../../assets/icon/icon-cross.svg";
import Close from "../../assets/icon/icon-close.svg";
import { useState } from "react";

export default function MeetTeam() {
  const directors = [
    {
      name: "Nikita Marks",
      title: "Founder & CEO",
      avatar: avatar1,
    },
    {
      name: "Christian Duncan",
      title: "Co-Founder & COO",
      avatar: avatar2,
    },
    {
      name: "Cruz Hammer",
      title: "Co-Founder & CTO",
      avatar: avatar3,
    },
    {
      name: "Drake Heaton",
      title: "Business Development Lead",
      avatar: avatar4,
    },
    {
      name: "Griffin Wise",
      title: "Lead Marketing",
      avatar: avatar5,
    },
    {
      name: "Aden Allan",
      title: "Head of Talent",
      avatar: avatar6,
    },
  ];

  return (
    <div className="flex h-[62.625rem] items-center justify-center text-center text-white">
      <div>
        <div className="mb-16">
          <h1 className="text-bold-sm font-bold">Meet the directors</h1>
        </div>
        <div className="grid grid-cols-[repeat(3,21.875rem)] grid-rows-2 gap-x-5 gap-y-12">
          {directors.map((director, index) => (
            <TeamMember key={index} {...director} />
          ))}
        </div>
      </div>
    </div>
  );
}

const TeamMember = ({ name, title, avatar }) => {
  const [openDesc, setOpenDesc] = useState(false);

  return (
    <div className={`relative bg-state-green transition-colors duration-200`}>
      <div className="flex flex-col items-center justify-center gap-5 py-10 text-white mb-3">
        <div>
          <img
            src={avatar}
            alt="avatar"
            className="h-24 w-24 max-w-full rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-semi-bold-sm text-rapture-blue">{name}</h4>
          <i className="text-[15px]">{title}</i>
        </div>
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={() => setOpenDesc(!openDesc)}
      >
        <button
          className={`rounded-full bg-light-coral p-4 text-state-green transition-all duration-200 hover:bg-rapture-blue ${openDesc ? "rotate-45" : ""}`}
        >
          <img src={Plus} alt="plus--icon" className="h-4 w-4 object-cover" />
        </button>
      </div>
    </div>
  );
};
