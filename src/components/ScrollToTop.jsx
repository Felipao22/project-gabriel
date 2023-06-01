import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";



export const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      });
    }, []);

    const goTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <div className="relative">
      {showTopBtn && (
        <FaAngleUp className="fixed bottom-10 right-6 z-20 w-14 h-14 bg-primary border-solid border-2 border-black text-white rounded-full cursor-pointer animate-bounce hover:text-black hover:animate-none hover:bg-white hover:border-solid hover:border-2 hover:border-violet-600" onClick={goTop} />
      )}
    </div>
  );
}
