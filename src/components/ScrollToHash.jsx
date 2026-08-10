import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const id = hash.replace("#", "");

    requestAnimationFrame(() => {
      const elemento = document.getElementById(id);

      if (elemento) {
        elemento.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
