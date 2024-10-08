import Button from "../../common/Button";
import HeroDevider from "../../partial/HeroDevider.svg";
import HeroImage from "../../partial/HeroImage.svg";

const HeroSection = () => {
  return (
    <>
      <section className="relative m-auto flex min-h-[80vh] flex-1 flex-col-reverse items-center justify-center pt-4 md:mx-8 md:gap-4 lg:flex-row lg:p-16 xl:min-h-96">
        <div className="hero-info mx-8 flex flex-col items-start gap-4 text-primary sm:mx-0 lg:max-w-[50%]">
          <h1 className="hero-title m-auto text-left text-[48px] font-semibold leading-[125%] sm:max-w-[70%] lg:m-0">
            Clinic & beauty consultant
          </h1>
          <p className="hero-text m-auto mb-4 text-left font-medium tracking-widest sm:max-w-[70%] lg:m-0 lg:max-w-[90%]">
            It is a long established fact that a reader will be by the readable
            content of a page.
          </p>
          <Button className="mx-auto mt-6 py-6 lg:mx-0">More Details</Button>
        </div>
        <div className="hero-image md:max-w-[60%]">
          <HeroImage />
        </div>
      </section>
      <HeroDevider />
    </>
  );
};

export default HeroSection;
