import Button from "../common/Button";
import HeaderCurve from "../partial/Header.curve";
import Logo from "../partial/Logo.svg";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between px-16 pt-12">
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
      <div className="menu-wraper flex items-center justify-between gap-20">
        <nav className="main-menu">
          <ul className="flex gap-12">
            <li className="active font-semibold text-[#414880]">Home+</li>
            <li className="font-medium text-secondary">About</li>
            <li className="font-medium text-secondary">Service</li>
            <li className="font-medium text-secondary">Gallery</li>
            <li className="font-medium text-secondary">Blog</li>
          </ul>
        </nav>
        <Button>Contact</Button>
      </div>

      <HeaderCurve />
    </header>
  );
};

export default Header;
