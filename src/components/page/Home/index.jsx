import AboutUsSection from "./AboutUsSection";
import ContactUsSection from "./ContactUsSection";
import HeroSection from "./HeroSection";
import ProfessionalTeams from "./ProfessionalSection";
import ServicesSection from "./ServicesSection";
import ToTopBtn from "./ToTopBtn";

const Home = () => {
  return (
    <main className="mb-32 flex flex-col gap-32 md:m-8">
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
