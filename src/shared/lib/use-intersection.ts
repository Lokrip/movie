"use client";

import { useCallback } from "react";

export function useIntersection(onIntersect: () => void) {
  return useCallback((el: HTMLDivElement | null) => {
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((intersection) => {
        //Intersect - Пересекаться
        if (intersection.isIntersecting) {
          onIntersect();
        }
      });
    });

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      observer.disconnect();
    };
  }, []);
}
