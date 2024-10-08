import Card from "../../common/Card";
import { Icon1, Icon2, Icon3 } from "../../partial/ServicesIcon.svg";

const ServicesSection = () => {
  const services = [
    {
      title: "Beauty consultation",
      description:
        "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
      icon: Icon1,
    },
    {
      title: "Skin treatments",

      description:
        "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
      icon: Icon2,
    },
    {
      title: "Beauty product",
      description:
        "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
      icon: Icon3,
    },
  ];
  return (
    <section className="services flex flex-col gap-16">
      <div className="services-info m-auto flex flex-col items-center justify-center gap-4 sm:max-w-[80%]">
        <span className="px-8 font-semibold leading-[125%] text-accent">
          Main Services
        </span>
        <h2 className="px-8 text-2xl font-semibold leading-[125%] text-primary sm:max-w-[85%] sm:text-3xl md:text-4xl lg:max-w-[55%]">
          Learn services to focus on your beauty
        </h2>
        <p className="px-8 text-sm tracking-widest text-secondary md:text-base">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </p>
      </div>
      <div className="services-choice flex flex-wrap items-center justify-center gap-2 px-2 md:flex-nowrap lg:gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="max-w-60 bg-white shadow-xl shadow-[#E4E7FF] md:max-w-[22rem]"
          >
            <service.icon />
            <h5 className="text-lg font-semibold leading-[125%] text-primary">
              {service.title}
            </h5>
            <p className="tracking-widest text-secondary">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
