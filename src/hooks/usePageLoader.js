import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Whenever the URL changes, kick off a clean loader sequence animation
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 650); // Gives a high-quality 650ms micro-loading feedback bounce

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return isLoading;
}