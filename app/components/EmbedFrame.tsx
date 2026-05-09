"use client";

import { useEffect, useRef, useState } from "react";

type EmbedFrameProps = {
  src: string;
  title: string;
  viewportHeight?: string;
  iframeClassName?: string;
};

export default function EmbedFrame({
  src,
  title,
  viewportHeight = "h-[540px]",
  iframeClassName = "absolute left-0 top-0 h-[675px] w-[125%] origin-top-left scale-80 border-0",
}: EmbedFrameProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [zoomGuardActive, setZoomGuardActive] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) setZoomGuardActive(true);
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (!e.metaKey && !e.ctrlKey) setZoomGuardActive(false);
    };
    const onBlur = () => setZoomGuardActive(false);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="rounded-md overflow-hidden border border-neutral-200 bg-white">
      <div
        ref={wrapperRef}
        className={`relative ${viewportHeight} overflow-hidden`}
        style={{ touchAction: "none", overscrollBehavior: "contain" }}
      >
        <iframe src={src} title={title} className={iframeClassName} loading="lazy" />
        {zoomGuardActive && (
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10"
            onWheel={(e) => {
              if (e.ctrlKey || e.metaKey) e.preventDefault();
            }}
          />
        )}
      </div>
    </div>
  );
}
