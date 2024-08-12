import Features from "../components/home/features";
import GetStarted from "../components/home/get-started";
import Header from "../components/home/header";
import Testimonials from "../components/home/testimonials";
import Wrapper from "../components/wrapper";
// import bgPattern1 from "../assets/bg-pattern/bg-pattern-home-1.svg";
// import bgPattern2 from "../assets/bg-pattern/bg-pattern-home-2.svg";
import bgPattern3 from "../assets/bg-pattern/bg-pattern-home-3.svg";
import bgPattern4 from "../assets/bg-pattern/bg-pattern-home-4-about-3.svg";
import bgPattern5 from "../assets/bg-pattern/bg-pattern-home-5.svg";
import bgPattern6 from "../assets/bg-pattern/bg-pattern-home-6-about-5.svg";

export default function Home() {
  return (
    <main>
      <Wrapper bg="bg-midnight-green">
        <Header />
      </Wrapper>

      <Wrapper bg="bg-state-green">
        <img
          src={bgPattern3}
          alt="bg-pattern"
          className="absolute -right-28 bottom-0 "
        />
        <Features />
      </Wrapper>

      <Wrapper bg="bg-jungle-green">
        <img
          src={bgPattern4}
          alt="bg-pattern"
          className="absolute left-0 top-0"
        />
        <img
          src={bgPattern5}
          alt="bg-pattern"
          className="absolute bottom-0 right-0"
        />
        <Testimonials />
      </Wrapper>

      <Wrapper bg="bg-light-coral">
        <img
          src={bgPattern6}
          alt="bg-pattern"
          className="absolute bottom-0 left-0"
        />
        <GetStarted />
      </Wrapper>
    </main>
  );
}
