import avatar1 from "../../assets/avatar/avatar-nikita.jpg";
import avatar2 from "../../assets/avatar/avatar-christian.jpg";
import avatar3 from "../../assets/avatar/avatar-cruz.jpg";
import avatar4 from "../../assets/avatar/avatar-drake.jpg";
import avatar5 from "../../assets/avatar/avatar-griffin.jpg";
import avatar6 from "../../assets/avatar/avatar-aden.jpg";
import Plus from "../../assets/icon/icon-cross.svg";
import logoTwitter from "../../assets/icon/icon-twitter.svg";
import logoLinkedin from "../../assets/icon/icon-linkedin.svg";
import { useState } from "react";

export default function MeetTeam() {
  const directors = [
    {
      name: "Nikita Marks",
      title: "Founder & CEO",
      avatar: avatar1,
      desc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
    {
      name: "Christian Duncan",
      title: "Co-Founder & COO",
      avatar: avatar2,
      desc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
    {
      name: "Cruz Hammer",
      title: "Co-Founder & CTO",
      avatar: avatar3,
      desc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
    {
      name: "Drake Heaton",
      title: "Business Development Lead",
      avatar: avatar4,
      desc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
    {
      name: "Griffin Wise",
      title: "Lead Marketing",
      avatar: avatar5,
      desc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
    {
      name: "Aden Allan",
      title: "Head of Talent",
      avatar: avatar6,
      desc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
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

const TeamMember = ({ name, title, avatar, desc }) => {
  const [openDesc, setOpenDesc] = useState(false);

  return (
    <div className={`relative bg-state-green`}>
      <div
        className={`mb-3 flex flex-col items-center justify-center gap-5 py-10 text-white`}
      >
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

      {openDesc && (
        <CardDesc desc={desc} title={title} name={name} openDesc={openDesc} />
      )}

      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={() => setOpenDesc(!openDesc)}
      >
        <button
          className={`rounded-full bg-light-coral p-4 text-state-green transition-all duration-200 ${openDesc ? "rotate-45 bg-rapture-blue" : ""}`}
        >
          <img src={Plus} alt="plus--icon" className="h-4 w-4 object-cover" />
        </button>
      </div>
    </div>
  );
};

const CardDesc = ({ desc, title, name }) => {
  return (
    <div className="absolute inset-0 h-full bg-dark-green text-white">
      <div className="flex flex-col items-center justify-center gap-5 p-10">
        <div>
          <h4 className="text-semi-bold-sm text-rapture-blue">{name}</h4>
          <i className="text-[15px]">{title}</i>
        </div>
        <p className="text-semi-bold-xs">{desc}</p>
        <div className="flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
            <path
              fill="#FFF"
              className="cursor-pointer transition-colors duration-200 hover:fill-light-coral hover:stroke-light-coral"
              d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path
              className="cursor-pointer transition-colors duration-200 hover:fill-light-coral"
              fill="#FFF"
              d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
