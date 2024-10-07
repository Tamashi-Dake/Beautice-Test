import Button from "../../common/Button";
import HeroDevider from "../../partial/HeroDevider.svg";
import HeroImage from "../../partial/HeroImage.svg";

const HeroSection = () => {
  return (
    <>
      <section className="relative m-auto flex min-h-[80vh] flex-col-reverse items-center justify-center gap-4 pt-4 lg:flex-row lg:gap-8 lg:p-16 xl:min-h-96">
        <div className="hero-info flex min-w-[50%] flex-col items-start gap-4 text-primary lg:max-w-[45%]">
          <h1 className="hero-title m-auto max-w-[65%] text-left text-[48px] font-semibold leading-[125%] lg:m-0 lg:max-w-none">
            Clinic & beauty consultant
          </h1>
          <p className="hero-text m-auto mb-4 max-w-[65%] text-left font-medium tracking-widest lg:m-0 lg:max-w-[90%]">
            It is a long established fact that a reader will be by the readable
            content of a page.
          </p>
          <Button className="m-auto w-[45%] py-6 lg:m-0 lg:w-auto">
            More Details
          </Button>
        </div>
        <div className="hero-image w-fit lg:max-w-[60%] lg:scale-100">
          <HeroImage />
        </div>
      </section>
      <HeroDevider />
    </>
  );
};

export default HeroSection;
