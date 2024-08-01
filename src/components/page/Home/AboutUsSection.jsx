import aboutImage from "../../../assets/about.png";
import Button from "../../common/Button";
import { FaPlay } from "react-icons/fa";
import AboutUsCurve from "../../partial/AboutUs.curve";

const AboutUsSection = () => {
  return (
    <section className="about-us relative my-8 flex items-center justify-between gap-8 text-left">
      <div className="about-info m-auto flex max-w-[47%] flex-col justify-start gap-4">
        <span className="font-semibold leading-[125%] text-accent">
          About Us
        </span>
        <h2 className="text-4xl font-semibold leading-[125%] text-primary">
          We are the best beauty clinic
        </h2>
        <p className="max-w-[90%] tracking-widest text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
          suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
          ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat.
          <br />
          <br />
          Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
          cras tellus enim.
        </p>
        <div className="about-btns my-8 flex gap-12">
          <Button>Learn More</Button>
          <div className="watchVideo flex items-center gap-2">
            <Button className="bg-primary px-4">
              <FaPlay className="pl-1 text-lg" />
            </Button>
            <span className="font-semibold text-secondary">Watch Video</span>
          </div>
        </div>
      </div>
      <div className="about-image overflow-hidden pl-12">
        <img className="object-fill" src={aboutImage} alt="aboutImg" />
      </div>
      <AboutUsCurve />
    </section>
  );
};

export default AboutUsSection;
