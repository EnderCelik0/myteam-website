import AskUsAbout from "../components/contact/ask-us-about";
import Wrapper from "../components/wrapper";
import bgPattern11 from "../assets/bg-pattern/bg-pattern-about-2-contact-1.svg";
import bgPattern12 from "../assets/bg-pattern/bg-pattern-contact-2.svg";
import ContactForm from "../components/contact/contact-form";

export default function Contact() {
  return (
    <>
      <Wrapper bg="bg-midnight-green">
        <img
          src={bgPattern11}
          alt="bg-pattern-11"
          className="absolute -left-24 top-1/4 z-[-1]"
        />
        <img
          src={bgPattern12}
          alt="bg-pattern-12"
          className="absolute -right-24 bottom-0 z-[-1]"
        />
        <div className="grid grid-cols-2 gap-8 py-[120px]">
          <AskUsAbout />
          <ContactForm />
        </div>
      </Wrapper>
    </>
  );
}
