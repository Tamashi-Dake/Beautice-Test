import AboutUsSection from "./AboutUsSection";
import ContactUsSection from "./ContactUsSection";
import HeroSection from "./HeroSection";
import ProfessionalTeams from "./ProfessionalSection";
import ServicesSection from "./ServicesSection";

const Home = () => {
  return (
    <main className="m-8 mb-32 flex flex-col gap-32">
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ProfessionalTeams />
      <ContactUsSection />
    </main>
  );
};

export default Home;
