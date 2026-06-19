"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type HlsPlayer = {
  loadSource: (source: string) => void;
  attachMedia: (media: HTMLVideoElement) => void;
  on: (event: string, callback: () => void) => void;
  destroy: () => void;
};

type HlsConstructor = {
  new (): HlsPlayer;
  isSupported: () => boolean;
  Events: { MANIFEST_PARSED: string };
};

declare global {
  interface Window {
    Hls?: HlsConstructor;
  }
}

const streamUrl = "https://customer-8z1yg93quaaa9ooh.cloudflarestream.com/dc6329cb804efbabcce7f0e9705fd3a4/manifest/video.m3u8";

export function StreamHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<HlsPlayer | null>(null);
  const [soundOn, setSoundOn] = useState(false);

  const setupStream = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.currentSrc || hlsRef.current) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
      void video.play().catch(() => undefined);
      return;
    }

    if (!window.Hls?.isSupported()) return;
    const hls = new window.Hls();
    hlsRef.current = hls;
    hls.loadSource(streamUrl);
    hls.attachMedia(video);
    hls.on(window.Hls.Events.MANIFEST_PARSED, () => void video.play().catch(() => undefined));
  }, []);

  useEffect(() => {
    setupStream();
    return () => hlsRef.current?.destroy();
  }, [setupStream]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    const turningOn = !soundOn;
    video.volume = 1;
    video.muted = !turningOn;
    if (turningOn) void video.play().catch(() => undefined);
    setSoundOn(turningOn);
  };

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/hls.js@1.6.15/dist/hls.min.js" strategy="afterInteractive" onReady={setupStream} />
      <motion.div
        initial={{ opacity: 0, x: 90 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="stream-feature-wrap"
      >
        <div className="stream-feature">
          <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" aria-label="La vie chez Chill'in" />
          <div className="stream-feature-shade" />
          <button onClick={toggleSound} className="feature-sound-button" aria-label={soundOn ? "Couper le son" : "Activer le son"}>
            {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
            <span>{soundOn ? "Son activé" : "Activer le son"}</span>
          </button>
        </div>
      </motion.div>
    </>
  );
}
