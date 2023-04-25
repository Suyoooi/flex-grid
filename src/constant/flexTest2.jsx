import React, { useEffect, useState } from "react";
import { debounce } from "lodash";

const FlexTest2 = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 1000);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      브라우저 화면 사이즈 x : {window.width}, y : {window.height}
    </div>
  );
};

export default FlexTest2;
