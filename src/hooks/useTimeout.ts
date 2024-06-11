import { useEffect } from "react";

export const useTimeout = (callback: () => void, delay: number) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();

      return () => clearTimeout(timer);
    }, delay);
  }, [callback, delay]);
}