import logoVerge from "../../assets/logo/logo-the-verge.png";
import logoGadgetsNow from "../../assets/logo/logo-gadgets-now.png";
import logoTechRadar from "../../assets/logo/logo-tech-radar.png";
import logoGuardian from "../../assets/logo/logo-the-guardian.png";
import logoJakarta from "../../assets/logo/logo-jakarta-post.png";

export default function Clients() {
  const clients = [
    logoVerge,
    logoJakarta,
    logoGadgetsNow,
    logoTechRadar,
    logoGuardian,
  ];

  return (
    <div className="z-10 flex h-[27.313rem] flex-col items-center justify-center">
      <div>
        <h2 className="mb-16 text-bold-sm font-bold text-white">
          Some of our clients
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-20">
        {clients.map((client, index) => (
          <Client key={index} image={client} />
        ))}
      </div>
    </div>
  );
}

const Client = ({ image }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={image} alt="client" className="object-cover" />
    </div>
  );
};
