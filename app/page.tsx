"use client";

import { DarkHomePage } from "@/components/home-page";
import { useEffect, useState } from "react";

export default function Page() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

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

  return <DarkHomePage theme={theme} onThemeChange={() => setTheme((current) => current === "dark" ? "light" : "dark")} />;
}
