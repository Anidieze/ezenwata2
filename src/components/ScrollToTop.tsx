import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const waitForImages = () =>
    new Promise<void>((resolve) => {
      const pending = [...document.querySelectorAll<HTMLImageElement>("img")]
        .filter((img) => !img.complete);
      if (pending.length === 0) {
        resolve();
        return;
      }
      let remaining = pending.length;
      const done = () => {
        remaining -= 1;
        if (remaining === 0) resolve();
      };
      pending.forEach((img) => {
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
      });
    });

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const scrollToDescription = () => {
          const rect = el.getBoundingClientRect();
          const offset = window.pageYOffset + rect.top - window.innerHeight * 0.35;
          window.scrollTo({ top: offset, behavior: "instant" });
        };
        const timeout = setTimeout(scrollToDescription, 1500);
        waitForImages().then(() => {
          clearTimeout(timeout);
          scrollToDescription();
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;