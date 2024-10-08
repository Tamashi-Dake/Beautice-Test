import AboutUsSection from "./AboutUsSection";
import ContactUsSection from "./ContactUsSection";
import HeroSection from "./HeroSection";
import ProfessionalTeams from "./ProfessionalSection";
import ServicesSection from "./ServicesSection";
import ToTopBtn from "./ToTopBtn";

const Home = () => {
  return (
    <main className="mx-auto mb-32 flex max-w-[1280px] flex-col gap-32 overflow-x-visible md:my-8">
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ProfessionalTeams />
      <ContactUsSection />
      <ToTopBtn />
    </main>
  );
};

export default Home;
