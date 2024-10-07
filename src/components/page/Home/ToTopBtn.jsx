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
      className={`bottom-10 right-4 z-[1] block rounded-full px-4 py-4 hover:shadow-none md:bottom-10 md:right-8 ${isVisible ? "fixed" : "hidden"}`}
    >
      <FaArrowUp className="text-lg" />
    </Button>
  );
};

export default ToTopBtn;
