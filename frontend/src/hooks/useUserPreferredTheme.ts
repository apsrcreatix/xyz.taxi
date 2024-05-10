import { useEffect, useState } from "react";

function useUserPreferrredTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    if (mq.matches) {
      setIsDark(true);
    }

    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener("change", (evt) => setIsDark(evt.matches));
  }, []);
  
  return isDark ? "dark" : "light";
}

export default useUserPreferrredTheme;
