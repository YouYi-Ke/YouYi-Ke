"use client";
import { useEffect, useRef } from "react";

export default function InfiniteScroll({
  items,
  isTilted,
  tiltDirection = "left",
  autoplay,
  autoplaySpeed = 0.1,
  autoplayDirection = "down",
  pauseOnHover = true,
}) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !autoplay) return;

    let animationFrameId;
    let paused = false;

    const scroll = () => {
      if (!paused) {
        if (autoplayDirection === "down") {
          el.scrollTop += autoplaySpeed;
        } else {
          el.scrollTop -= autoplaySpeed;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    const handleMouseEnter = () => (paused = true);
    const handleMouseLeave = () => (paused = false);

    if (pauseOnHover) {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (pauseOnHover) {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [autoplay, autoplaySpeed, autoplayDirection, pauseOnHover]);

  return (
    <div
      ref={scrollRef}
      className="overflow-y-auto h-full w-full space-y-4 p-4"
      style={{
        transform: isTilted
          ? `rotate(${tiltDirection === "left" ? "-" : ""}2deg)`
          : "none",
      }}
    >
      {[...items, ...items].map((item, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          {item.content}
        </div>
      ))}
    </div>
  );
} 