import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPlay,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import LogoFooter from "../partial/LogoFooter.svg";
import FooterCurve from "../partial/Footer.curve";

const Footer = () => {
  return (
    <footer className="relative px-12 pb-4 pt-24 tracking-widest text-[#D7DBFF]">
      <div className="m-12 flex justify-between gap-8">
        <div className="company flex flex-col gap-8">
          <div className="logo flex items-center gap-4">
            <LogoFooter />
            <span className="text-2xl font-bold text-white">Beautice</span>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 pl-4">
            <p className="company-desc">
              <span className="font-bold">Beautice</span> is a Beauty Clinic
              WordPress Theme.
            </p>
            <div className="company-info flex flex-col items-start text-sm italic">
              <p className="address"> Baker Steet 101, NY, United States. </p>
              <div className="contact flex justify-between gap-12">
                <p className="phone"> +521 569 8966.</p>
                <p className="email">mail@company.com.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pages flex flex-col items-start gap-8">
          <span className="text-lg font-semibold text-white">Pages</span>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-start gap-2">
              <FaPlay className="text-[7px]" />
              Home
            </li>
            <li className="flex items-center justify-start gap-2">
              <FaPlay className="text-[7px]" />
              About
            </li>
            <li className="flex items-center justify-start gap-2">
              <FaPlay className="text-[7px]" />
              Services
            </li>
            <li className="flex items-center justify-start gap-2">
              <FaPlay className="text-[7px]" />
              Gallery
            </li>
            <li className="flex items-center justify-start gap-2">
              <FaPlay className="text-[7px]" />
              Team
            </li>
          </ul>
        </div>
        <div className="infomations flex flex-col items-start gap-8">
          <span className="text-lg font-semibold text-white">Infomations</span>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-start gap-2">
              <FaPlay className="text-[7px]" />
              Terms & conditions
            </li>
            <li className="flex items-center justify-start gap-2">
              <FaPlay className="text-[7px]" />
              Privacy policy
            </li>
            <li className="flex items-center justify-start gap-2">
              <FaPlay className="text-[7px]" />
              Blog
            </li>
            <li className="flex items-center justify-start gap-2">
              <FaPlay className="text-[7px]" />
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="m-12 mt-24 flex items-center justify-between">
        <div className="social text-white">
          <span className="sr-only">Social link</span>
          <div className="flex gap-12">
            <a href="#" className="social-link">
              <FaFacebookF className="text-3xl" />
            </a>
            <a href="#" className="social-link">
              <FaTwitter className="text-3xl" />
            </a>
            <a href="#" className="social-link">
              <FaLinkedinIn className="text-3xl" />
            </a>
            <a href="#" className="social-link">
              <FaYoutube className="text-3xl" />
            </a>
            <a href="#" className="social-link">
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </div>
        <div className="copy">
          <span className="">
            © AltDesain Studio 2021 - All right reserved.
          </span>
        </div>
      </div>
      <FooterCurve />
    </footer>
  );
};

export default Footer;
