import Card from "../../common/Card";
import { Icon1, Icon2, Icon3 } from "../../partial/ServicesIcon.svg";

const ServicesSection = () => {
  return (
    <section className="services flex flex-col gap-16">
      <div className="services-info m-auto flex max-w-[80%] flex-col items-center justify-center gap-4">
        <span className="px-8 font-semibold leading-[125%] text-accent">
          Main Services
        </span>
        <h2 className="max-w-[55%] px-8 text-4xl font-semibold leading-[125%] text-primary">
          Learn services to focus on your beauty
        </h2>
        <p className="px-8 tracking-widest text-secondary">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </p>
      </div>
      <div className="services-choice flex items-center justify-center gap-8">
        <Card className="bg-white shadow-xl shadow-[#E4E7FF]">
          <Icon1 />
          <h5 className="text-lg font-semibold leading-[125%] text-primary">
            Beauty consultation
          </h5>
          <p className="tracking-widest text-secondary">
            Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
            turpis.
          </p>
        </Card>
        <Card className="bg-white shadow-xl shadow-[#E4E7FF]">
          <Icon2 />
          <h5 className="text-lg font-semibold leading-[125%] text-primary">
            Skin treatments
          </h5>
          <p className="tracking-widest text-secondary">
            Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
            turpis.
          </p>
        </Card>
        <Card className="bg-white shadow-xl shadow-[#E4E7FF]">
          <Icon3 />
          <h5 className="text-lg font-semibold leading-[125%] text-primary">
            Beauty product
          </h5>
          <p className="tracking-widest text-secondary">
            Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
            turpis.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;
