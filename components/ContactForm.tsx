"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";

// No backend needed: opens the visitor's mail app with the message pre-filled.
export default function ContactForm() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || "your portfolio"}`);
    const body = encodeURIComponent(msg);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="form" onSubmit={submit}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="msg">What are you building?</label>
        <textarea id="msg" rows={5} value={msg} onChange={(e) => setMsg(e.target.value)} required />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <button className="btn btn-primary" type="submit">
          Send message <span className="arrow">↗</span>
        </button>
        <p className="form-note">Opens your email app, nothing is stored.</p>
      </div>
    </form>
  );
}
