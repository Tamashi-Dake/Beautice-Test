import Button from "../../common/Button";
import Input from "../../common/Input";
import ContactUs from "../../partial/ContactUs.svg";
import ContactUsCurve from "../../partial/ContactUs.curve";

const ContactUsSection = () => {
  return (
    <section className="contact-us relative flex flex-1 flex-col flex-wrap items-center justify-between text-left sm:mx-8 md:flex-row lg:overflow-x-visible">
      <div className="contact-image mx-auto lg:min-w-[45%]">
        <ContactUs />
      </div>
      <div className="contact-info mx-8 flex flex-1 flex-col justify-start gap-4 sm:m-auto sm:max-w-[80%]">
        <span className="font-semibold leading-[125%] text-accent">
          Contact Us
        </span>
        <h2 className="max-w-[70%] text-4xl font-semibold leading-[125%] text-primary">
          Send your inquiry to our expert team
        </h2>
        <p className="tracking-widest text-secondary">
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </p>
        <form className="contact-form my-8 flex flex-col gap-8 sm:gap-12">
          <div className="name flex flex-1 flex-wrap justify-between gap-4">
            <Input
              elementType="input"
              inputType="text"
              placeholder="First name"
              inputID="first-name"
              classname=""
            />
            <Input
              elementType="input"
              inputType="text"
              placeholder="Last name"
              inputID="last-name"
              classname=""
            />
          </div>
          <Input
            elementType="input"
            inputType="email"
            placeholder="Email address"
            inputID="email"
            classname=""
          />
          <Input
            elementType="input"
            inputType="text"
            placeholder="Subject"
            inputID="subject"
            classname=""
          />
          <Input
            elementType="textarea"
            inputType="text"
            placeholder="Your inquiry here"
            inputID="inquiry"
            classname=""
          />
          <Button type="submit" className="lg:w-fit">
            Send Message
          </Button>
        </form>
      </div>
      <ContactUsCurve />
    </section>
  );
};

export default ContactUsSection;
