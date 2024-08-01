import Button from "../../common/Button";
import HeroDevider from "../../partial/HeroDevider.svg";
import HeroImage from "../../partial/HeroImage.svg";

const HeroSection = () => {
  return (
    <>
      <section className="relative m-auto flex h-[80vh] items-center gap-8 p-16 pt-4">
        <div className="hero-info flex max-w-[45%] flex-col items-start gap-4 text-primary">
          <h1 className="hero-title text-left text-[48px] font-semibold leading-[125%]">
            Clinic & beauty consultant
          </h1>
          <p className="hero-text mb-4 pr-4 text-left font-medium tracking-wider">
            It is a long established fact that a reader will be by the readable
            content of a page.
          </p>
          <Button>More Details</Button>
        </div>
        <div className="hero-image max-w-[60%]">
          <HeroImage />
        </div>
      </section>
      <HeroDevider />
    </>
  );
};

export default HeroSection;
