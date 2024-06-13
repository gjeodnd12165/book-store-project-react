import { getTheme } from "@/style/theme";
import { useEffect, useState } from "react"

export const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.matchMedia(getTheme('light').mediaQuery.mobile).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(getTheme('light').mediaQuery.mobile);

    setIsMobile(mediaQuery.matches);
  }, []);

  return { isMobile };
}