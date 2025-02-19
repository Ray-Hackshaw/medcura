"use client";

import { useEffect, useState } from "react";

const LiveTimer = ({ timeOnly }: { timeOnly?: boolean }) => {
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
  });

  const dayDate = time.split("at")[0];
  const liveTime = time.split("at")[1];

  return (
    <div>
      <p>{liveTime}</p>
      {!timeOnly && <p className="text-sm md:px-0 px-4">{dayDate}</p>}
    </div>
  );
};

export default LiveTimer;
