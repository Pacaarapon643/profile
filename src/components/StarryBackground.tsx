"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function StarryBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <StarsBackground
        starDensity={0.00025}
        allStarsTwinkle
        twinkleProbability={0.8}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1.2}
      />
      <ShootingStars
        starColor="#818cf8"
        trailColor="#6366f1"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={5000}
        starWidth={12}
        starHeight={1}
      />
      <ShootingStars
        starColor="#a78bfa"
        trailColor="#7c3aed"
        minSpeed={8}
        maxSpeed={20}
        minDelay={3000}
        maxDelay={6000}
        starWidth={8}
        starHeight={1}
      />
    </div>
  );
}
