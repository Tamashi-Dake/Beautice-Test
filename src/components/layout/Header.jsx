import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../common/Button";
import HeaderCurve from "../partial/Header.curve";
import Logo from "../partial/Logo.svg";
import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(true);
  const hamburgerRef = useRef(null);

  // only show hambergurMenu when user scroll up, use ref to compare the previous scrollY
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < hamburgerRef.current) {
        setIsHamburgerVisible(true);
      } else {
        setIsHamburgerVisible(false);
      }
      hamburgerRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);
  return (
    <header className="relative flex items-center justify-between px-16 pt-12 lg:overflow-x-visible">
      <div className="main-logo flex items-center justify-between gap-4">
        <Logo />
        <span
          style={{
            textShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
          }}
          className="logo text-2xl font-bold"
        >
          Beautice
        </span>
      </div>
      <div
        className={`menu-wraper fixed right-0 top-0 z-10 flex h-screen flex-col items-center justify-between bg-white p-20 pt-40 transition-all lg:relative lg:h-auto lg:flex-row lg:gap-12 lg:bg-transparent lg:p-0 xl:gap-20 ${isOpen ? "w-full md:w-auto md:translate-x-0" : "w-0 overflow-hidden p-0 md:translate-x-full lg:w-auto lg:translate-x-0 lg:overflow-visible"}`}
      >
        <nav className="main-menu text-2xl lg:text-base">
          <ul className="flex flex-col items-start gap-8 lg:flex-row lg:items-center xl:gap-12">
            <li className="active font-semibold text-[#414880] after:block after:origin-left after:scale-x-0 after:border-b-4 after:transition-all after:duration-500 after:ease-in-out hover:after:scale-x-100 hover:after:border-primary">
              Home+
            </li>
            <li className="font-medium text-secondary after:block after:origin-left after:scale-x-0 after:border-b-4 after:transition-all after:duration-500 after:ease-in-out hover:after:scale-x-100 hover:after:border-primary">
              About
            </li>
            <li className="font-medium text-secondary after:block after:origin-left after:scale-x-0 after:border-b-4 after:transition-all after:duration-500 after:ease-in-out hover:after:scale-x-100 hover:after:border-primary">
              Service
            </li>
            <li className="font-medium text-secondary after:block after:origin-left after:scale-x-0 after:border-b-4 after:transition-all after:duration-500 after:ease-in-out hover:after:scale-x-100 hover:after:border-primary">
              Gallery
            </li>
            <li className="font-medium text-secondary after:block after:origin-left after:scale-x-0 after:border-b-4 after:transition-all after:duration-500 after:ease-in-out hover:after:scale-x-100 hover:after:border-primary">
              Blog
            </li>
          </ul>
        </nav>
        <Button className="">Contact</Button>
      </div>
      {/* hambergurMenu */}
      <div
        className={`hambergurMenu fixed right-12 top-12 z-10 transition-all lg:hidden ${isHamburgerVisible ? "" : "-translate-y-40"}`}
      >
        <Button
          className="translate-y-0 px-6 py-6 shadow-none"
          onClick={handleMenu}
        >
          {isOpen ? (
            <IoCloseOutline size={30} />
          ) : (
            <RxHamburgerMenu size={30} />
          )}
        </Button>
      </div>

      <HeaderCurve />
    </header>
  );
};

export default Header;
