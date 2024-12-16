"use client";

import { useEffect, useState } from "react";

const LiveTimer = () => {
  const [time, setTime] = useState<string>("");

  const updateTime = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    setTime(now.toLocaleString("en-GB", options));
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="text-sm">{time}</p>
    </div>
  );
};

export default LiveTimer;
