"use client";

import { useEffect } from "react";

export default function TrackReferrer() {
  useEffect(() => {
    const hasTracked = sessionStorage.getItem("referrerTracked");
    const referrer = document.referrer;
    const pathname = window.location.pathname;
    const timestamp = new Date().toISOString();

    console.log("[TRACK REFERRER]", { referrer, pathname });

    if (!hasTracked) {
      fetch("/api/track-referrer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ referrer, pathname, timestamp }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("[TRACK RESPONSE]", data);
        })
        .catch((err) => {
          console.error("[TRACK ERROR]", err);
        });

      sessionStorage.setItem("referrerTracked", "true");
    }
  }, []);

  return null;
}
