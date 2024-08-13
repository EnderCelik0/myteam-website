import Header from "../components/about/header";
import GetStarted from "../components/home/get-started";
import Wrapper from "../components/wrapper";
import bgPattern6 from "../assets/bg-pattern/bg-pattern-home-6-about-5.svg";
import bgPattern7 from "../assets/bg-pattern/bg-pattern-about-1-mobile-nav-1.svg";
import MeetTeam from "../components/about/meet-team";
import bgPattern8 from "../assets/bg-pattern/bg-pattern-about-2-contact-1.svg";
import bgPattern9 from "../assets/bg-pattern/bg-pattern-home-4-about-3.svg";
import bgPattern10 from "../assets/bg-pattern/bg-pattern-about-4.svg";
import Clients from "../components/about/clients";

export default function About() {
  return (
    <div className="font-livvic">
      <Wrapper bg="bg-midnight-green">
        <img
          src={bgPattern7}
          alt="bg-patter-7"
          className="absolute -right-28 bottom-0 z-0"
        />
        <Header />
      </Wrapper>

      <Wrapper bg="bg-jungle-green">
        <img
          src={bgPattern9}
          alt="bg-pattern-8"
          className="absolute bottom-0 right-0"
        />
        <img
          src={bgPattern8}
          alt="bg-pattern-9"
          className="absolute -left-24 top-0"
        />
        <MeetTeam />
      </Wrapper>

      <Wrapper bg="bg-state-green">
        <img
          src={bgPattern10}
          alt="bg-pattern-10"
          className="absolute left-0 top-0"
        />
        <Clients />
      </Wrapper>

      <Wrapper bg="bg-light-coral">
        <img
          src={bgPattern6}
          alt="bg-pattern"
          className="absolute bottom-0 left-0 z-0"
        />
        <GetStarted />
      </Wrapper>
    </div>
  );
}
