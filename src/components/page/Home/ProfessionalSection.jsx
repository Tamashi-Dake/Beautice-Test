import Card from "../../common/Card";
import Button from "../../common/Button";

import Pro1 from "../../../assets/pro1.png";
import Pro2 from "../../../assets/pro2.png";
import Pro3 from "../../../assets/pro3.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ProfessionalTeams = () => {
  const proData = [
    {
      img: Pro1,
      role: "Surgeon",
      title: "Briyan Nevalli",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    },
    {
      img: Pro2,
      role: "Dermatologist",
      title: "Bella sebastian",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    },
    {
      img: Pro3,
      role: "Stylist expert",
      title: "Lilly Adams",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    },
  ];

  return (
    <section className="professtional">
      <div className="professtional-info m-auto flex flex-col items-center justify-center gap-4">
        <span className="font-semibold leading-[125%] text-accent">
          Professional Teams
        </span>
        <h2 className="text-4xl font-semibold leading-[125%] text-primary">
          The Professional expert
        </h2>
        <p className="tracking-widest text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>
      </div>
      <div className="services-choice flex items-center justify-center gap-4">
        {proData.map((item, index) => (
          <Card
            key={index}
            className={`px-12 ${index === 1 ? `shadow-xl shadow-[#E4E7FF]` : `shadow-none`}`}
          >
            <img src={item.img} alt={item + index} />
            <div className="flex flex-col gap-4">
              <span className="pro-role font-semibold leading-[125%] text-accent">
                {item.role}
              </span>
              <h5 className="text-lg font-semibold leading-[125%] text-primary">
                {item.title}
              </h5>
            </div>
            <p className="tracking-normal text-secondary md:tracking-widest">
              {item.desc}
            </p>
            <div className="social-btns flex justify-between gap-4">
              <Button className="bg-white px-4 shadow-2xl">
                <FaTwitter className="text-2xl text-primary" />
              </Button>
              {/* face, instagrame */}
              <Button className="bg-white px-4 shadow-2xl">
                <FaFacebookF className="text-2xl text-primary" />
              </Button>
              <Button className="bg-white px-4 shadow-2xl">
                <FaInstagram className="text-2xl text-primary" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalTeams;
