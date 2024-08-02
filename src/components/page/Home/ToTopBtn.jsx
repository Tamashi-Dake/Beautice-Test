import { useEffect, useState } from "react";
import Button from "../../common/Button";
import { FaArrowUp } from "react-icons/fa";

const ToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleVisibleButton = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      return setIsVisible(true);
    }
    return setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);

    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  return (
    <Button
      onClick={handleScrollToTop}
      className={`bottom-32 right-12 z-[1] block rounded-lg px-2 py-2 hover:shadow-none ${isVisible ? "fixed" : "hidden"}`}
    >
      <FaArrowUp className="text-lg" />
    </Button>
  );
};

export default ToTopBtn;
