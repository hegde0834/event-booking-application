import { X, Check, Star, Users, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { CATS, money } from "../data.js";

export default function EventDetailModal({ ev, onClose, onBook }) {
  if (!ev) return null;
  const k = CATS[ev.category] || CATS.Other;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div
          className="modal-header-image"
          style={{ backgroundImage: `url(${ev.image || k.image})` }}
        >
          <div className="modal-header-overlay">
            <span
              className="badge-pill"
              style={{ background: k.c, color: "#fff", marginBottom: "0.5rem" }}
            >
              {k.e} {ev.category}
            </span>
            <h3 id="modal-title">{ev.name}</h3>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-specs-grid">
            <div className="modal-spec-col">
              <span>Rating</span>
              <strong>★ {ev.rating || 4.9} ({ev.reviewsCount || 45}+)</strong>
            </div>
            <div className="modal-spec-col">
              <span>Guest Capacity</span>
              <strong>{ev.capacity || "Up to 100 Guests"}</strong>
            </div>
            <div className="modal-spec-col">
              <span>Setup Duration</span>
              <strong>{ev.duration || "4 - 5 Hours"}</strong>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "1.1rem", marginBottom: "0.4rem", color: "var(--ink)" }}>About this Celebration Package</h4>
            <p style={{ color: "var(--ink-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              {ev.desc}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "1.1rem", marginBottom: "0.6rem", color: "var(--ink)" }}>What’s Handcrafted & Included</h4>
            <div className="modal-inclusions-list">
              {(ev.included || ev.features || []).map((item, idx) => (
                <div key={idx} className="modal-inclusion-item">
                  <Check size={16} color="var(--success)" strokeWidth={3} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--surface-hover)", padding: "0.9rem 1.1rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--line)", display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <ShieldCheck size={26} color="var(--success)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: "0.92rem", display: "block" }}>CelebrationCraft Promise</strong>
              <span style={{ fontSize: "0.82rem", color: "var(--mute)" }}>100% on-time setup, verified decor artisans, and fresh floral freshness guaranteed.</span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div>
            <span style={{ fontSize: "0.85rem", color: "var(--mute)", display: "block" }}>All-Inclusive Price</span>
            <strong style={{ fontSize: "1.5rem", fontFamily: "var(--font-heading)", color: "var(--ink)" }}>{money(ev.price)}</strong>
          </div>
          <button
            className="btn"
            style={{ background: k.gradient, color: "#fff" }}
            onClick={() => {
              onClose();
              onBook(ev.id);
            }}
          >
            <Sparkles size={16} /> Book This Package
          </button>
        </div>
      </div>
    </div>
  );
}
