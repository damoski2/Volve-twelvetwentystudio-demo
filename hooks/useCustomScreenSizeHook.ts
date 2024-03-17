import { useState, useEffect } from "react";
import { ScreenMobileType } from "../types";

type ReturnType = {
  isMobile: ScreenMobileType;
  isMobileBool: boolean;
};

const useCustomScreenSizeHook = (screenSize: string): ReturnType => {
  const [isMobile, setIsMobile] = useState<ScreenMobileType>("unactive");
  const [isMobileBool, setIsMobileBool] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${screenSize}px)`);
    if (mediaQuery.matches) {
      setIsMobile("true");
      setIsMobileBool(true);
    } else {
      setIsMobile("false");
      setIsMobileBool(false);
    }
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return { isMobile, isMobileBool };
};

export default useCustomScreenSizeHook;
