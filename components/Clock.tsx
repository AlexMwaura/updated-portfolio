"use client";

import { useEffect, useState } from "react";

export default function Clock({ timeZone }: { timeZone: string }) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setNow(new Date().toLocaleTimeString("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false }));
    tick();
    const t = setInterval(tick, 15000);
    return () => clearInterval(t);
  }, [timeZone]);

  return <span suppressHydrationWarning>{now ?? "--:--"} EAT</span>;
}
