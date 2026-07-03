"use client";

import { useEffect } from "react";

export default function BodyBackground() {
  useEffect(() => {
    const previous = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#0D0D0D";
    return () => {
      document.body.style.backgroundColor = previous;
    };
  }, []);

  return null;
}
