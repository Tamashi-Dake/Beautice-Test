import Button from "../../common/Button";
import Input from "../../common/Input";
import ContactUs from "../../partial/ContactUs";
import ContactUsCurve from "../../partial/ContactUs.curve";

const ContactUsSection = () => {
  return (
    <section className="contact-us relative flex items-center justify-between gap-8 text-left">
      <div className="contact-image w-[60%]">
        <ContactUs />
      </div>
      <div className="contact-info m-auto flex flex-col justify-start gap-4">
        <span className="font-semibold leading-[125%] text-accent">
          Contact Us
        </span>
        <h2 className="max-w-[70%] text-4xl font-semibold leading-[125%] text-primary">
          Send your inquiry to our expert team
        </h2>
        <p className="tracking-widest text-secondary">
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </p>
        <form className="contact-form my-8 flex flex-col gap-12">
          <div className="name flex justify-between">
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
          <Button type="submit" className="w-fit">
            Send Message
          </Button>
        </form>
      </div>
      <ContactUsCurve />
    </section>
  );
};

export default ContactUsSection;
