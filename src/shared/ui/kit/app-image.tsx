"use client";

// shared/ui/image-skeleton/image-skeleton.tsx
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

interface ImageSkeletonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  skeletonHeight?: string;
  skeletonWidth?: string;
  isContainerFullWidth?: boolean;
}

export function AppImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  skeletonWidth = "w-80",
  skeletonHeight = "h-80",
  isContainerFullWidth = true,
}: ImageSkeletonProps) {
  const [loading, setLoading] = useState(true);

  const classes = clsx("relative", isContainerFullWidth && "w-full");

  return (
    <div className={classes}>
      {loading && (
        <div
          className={`absolute top-0 left-0 ${skeletonWidth} ${skeletonHeight} bg-accent animate-pulse rounded-t-lg`}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={() => setLoading(false)}
        className={`rounded-t-lg ${skeletonHeight} ${
          loading ? "invisible" : "visible"
        } ${className}`}
        priority={priority}
      />
    </div>
  );
}
