import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chill'in DK | Café & Brunch à Dunkerque",
    short_name: "Chill'in DK",
    description: "Brunch, café et lunch au cœur de Dunkerque.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e0c0b",
    theme_color: "#B17541",
    lang: "fr",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
