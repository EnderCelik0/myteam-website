import avatar1 from "../../assets/avatar/avatar-kady.jpg";
import avatar2 from "../../assets/avatar/avatar-aiysha.jpg";
import avatar3 from "../../assets/avatar/avatar-arthur.jpg";
import quote from "../../assets/icon/icon-quotes.svg";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kady Baker",
      title: "Product Manager at Bookmark",
      testimony:
        " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
      avatar: avatar1,
    },
    {
      name: "Aiysha Reese",
      title: "Founder of Manage",
      testimony:
        "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
      avatar: avatar2,
    },
    {
      name: "Arthur Clarke",
      title: "Co-founder of MyPhysio",
      testimony:
        "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
      avatar: avatar3,
    },
  ];

  return (
    <div className="text-white flex h-[46.563rem] flex-col items-center justify-center gap-20 text-center">
      <div>
        <div className="text-balance">
          <h1 className="text-bold-sm font-bold">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-rapture-blue">success stories.</span>
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {testimonials.map((testimony) => (
          <div
            key={testimony.testimony}
            className="relative flex flex-col items-center gap-6"
          >
            <img src={quote} alt="quote-svg" className="absolute -top-9" />
            <div className="z-0">
              <p>{testimony.testimony}</p>
            </div>
            <div>
              <h3 className="text-bold-xs text-rapture-blue">
                {testimony.name}
              </h3>
              <i className="font-medium">{testimony.title}</i>
            </div>
            <div>
              <img
                src={testimony.avatar}
                alt="testimony avatar"
                className="border-white max-w-16 rounded-full border-2 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
