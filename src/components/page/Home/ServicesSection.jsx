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
      <div className="services-info m-auto flex max-w-[80%] flex-col items-center justify-center gap-4">
        <span className="px-8 font-semibold leading-[125%] text-accent">
          Main Services
        </span>
        <h2 className="max-w-[85%] px-8 text-4xl font-semibold leading-[125%] text-primary lg:max-w-[55%]">
          Learn services to focus on your beauty
        </h2>
        <p className="px-8 tracking-widest text-secondary">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </p>
      </div>
      <div className="services-choice flex items-center justify-center gap-2 px-2 lg:gap-8">
        {services.map((service, index) => (
          <Card key={index} className="bg-white shadow-xl shadow-[#E4E7FF]">
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
