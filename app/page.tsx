"use client";

import { DarkHomePage } from "@/components/home-page";
import { useTheme } from "@/components/theme-provider";
import { useEffect } from "react";

export default function Page() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const resetScroll = () => window.scrollTo(0, 0);
    window.addEventListener("beforeunload", resetScroll);
    window.addEventListener("pageshow", resetScroll);

    return () => {
      window.removeEventListener("beforeunload", resetScroll);
      window.removeEventListener("pageshow", resetScroll);
    };
  }, []);

  return <DarkHomePage theme={theme} onThemeChange={toggleTheme} />;
}
