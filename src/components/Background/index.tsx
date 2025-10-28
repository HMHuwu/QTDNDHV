"use client";

import { useEffect } from "react";

const Background = () => {
  useEffect(() => {
    const loadParticles = async () => {
      const Particles = await import("particlesjs");
      Particles.init({
        selector: ".background",
        color: "#DA0463",
      });
    };

    if (typeof window !== "undefined") {
      loadParticles();
    }
  }, []);

  return (
    <>
      <canvas className="background fixed inset-0 -z-10" />
    </>
  );
};

export default Background;
