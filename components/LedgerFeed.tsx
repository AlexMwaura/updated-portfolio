"use client";

import { useEffect, useState } from "react";

type Row = { id: number; time: string; event: string; market: string; amount: string; ms: number };

const EVENTS = ["LOAN.DISBURSED", "REPAYMENT.POSTED", "TOPUP.APPROVED", "IPN.RECEIVED", "PAYROLL.DEDUCTED", "SETTLEMENT.QUOTED"];
const MARKETS: [string, string, number][] = [
  ["KE", "KES", 40000],
  ["TZ", "TZS", 900000],
  ["UG", "UGX", 1200000],
  ["RW", "RWF", 400000],
  ["ZA", "ZAR", 6000],
  ["SZ", "SZL", 6000],
  ["BW", "BWP", 4500],
];

const SEED: Row[] = [
  { id: -1, time: "09:41:07", event: "LOAN.DISBURSED", market: "KE", amount: "KES 12,500", ms: 184 },
  { id: -2, time: "09:41:05", event: "IPN.RECEIVED", market: "RW", amount: "RWF 85,000", ms: 96 },
  { id: -3, time: "09:41:02", event: "REPAYMENT.POSTED", market: "SZ", amount: "SZL 1,240", ms: 142 },
  { id: -4, time: "09:40:58", event: "TOPUP.APPROVED", market: "UG", amount: "UGX 310,000", ms: 211 },
  { id: -5, time: "09:40:55", event: "PAYROLL.DEDUCTED", market: "BW", amount: "BWP 920", ms: 77 },
];

const fmt = new Intl.NumberFormat("en-US");

function nairobiTime() {
  return new Date().toLocaleTimeString("en-GB", { timeZone: "Africa/Nairobi", hour12: false });
}

function makeRow(id: number): Row {
  const [market, ccy, max] = MARKETS[Math.floor(Math.random() * MARKETS.length)];
  const raw = Math.max(max * 0.02, Math.random() * max);
  const step = max > 100000 ? 1000 : 10;
  const amount = `${ccy} ${fmt.format(Math.round(raw / step) * step)}`;
  return {
    id,
    time: nairobiTime(),
    event: EVENTS[Math.floor(Math.random() * EVENTS.length)],
    market,
    amount,
    ms: 60 + Math.floor(Math.random() * 180),
  };
}

export default function LedgerFeed() {
  const [rows, setRows] = useState<Row[]>(SEED);

  useEffect(() => {
    // Re-stamp the seed rows to the visitor's current Nairobi time so the feed reads consistently.
    const now = Date.now();
    setRows(
      SEED.map((r, i) => ({
        ...r,
        time: new Date(now - (i + 1) * 2700).toLocaleTimeString("en-GB", { timeZone: "Africa/Nairobi", hour12: false }),
      }))
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let id = 0;
    const timer = setInterval(() => {
      if (document.hidden) return;
      setRows((r) => [makeRow(id++), ...r].slice(0, 6));
    }, 1900);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ledger mono" aria-hidden="true">
      {rows.map((r) => (
        <div className="ledger-row" key={r.id}>
          <span className="t">{r.time}</span>
          <span>
            {r.event} <span className="t">· {r.market}</span>
          </span>
          <span className="amt">{r.amount}</span>
          <span className="ok">✓ {r.ms}ms</span>
        </div>
      ))}
    </div>
  );
}
