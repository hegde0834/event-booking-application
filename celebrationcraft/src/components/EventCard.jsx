import { Star, Users, Clock, Check, Sparkles, Eye } from "lucide-react";
import TiltCard from "./TiltCard.jsx";
import { CATS, money } from "../data.js";

export default function EventCard({ ev, onBook, onQuickView, enable3D = true }) {
  const k = CATS[ev.category] || CATS.Other;
  const themeClass = "theme-" + ev.category.toLowerCase().replace(/\s+/g, "");

  const cardContent = (
    <article className={`card ${themeClass}`}>
      <div className="card-media">
        <img
          src={ev.image || k.image}
          alt={ev.name}
          className="card-img"
          loading="lazy"
        />
        <div className="card-overlay">
          <div className="card-top-badges">
            <span className="badge-pill badge-special">
              <Sparkles size={13} color={k.c} />
              {ev.badge || "Featured"}
            </span>
            <span className="badge-pill badge-rating">
              <Star size={12} fill="#fef08a" strokeWidth={0} />
              {ev.rating || 4.9} ({ev.reviewsCount || 40})
            </span>
          </div>

          <div className="card-cat-line">
            <span
              className="badge-pill"
              style={{ background: k.c, color: "#ffffff", fontWeight: 700 }}
            >
              {k.e} {ev.category}
            </span>
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="card-meta-tags">
          <span className="meta-item">
            <Users size={14} />
            {ev.capacity || "Up to 100 Guests"}
          </span>
          <span>•</span>
          <span className="meta-item">
            <Clock size={14} />
            {ev.duration || "4 - 5 Hours"}
          </span>
        </div>

        <h3>{ev.name}</h3>

        <p className="card-desc">
          {ev.tagline || ev.desc}
        </p>

        {ev.features && ev.features.length > 0 && (
          <div className="card-features">
            {ev.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="feature-point">
                <Check size={14} className="feature-check" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}

        <div className="card-footer">
          <div className="price-container">
            <div>
              <span className="price-tax">Package from</span>
              <div className="price-main">
                <span className="price-val">{money(ev.price)}</span>
                {ev.originalPrice && (
                  <span className="price-orig">{money(ev.originalPrice)}</span>
                )}
              </div>
            </div>
          </div>

          <div className="card-actions">
            {onQuickView && (
              <button
                className="btn secondary sm"
                onClick={() => onQuickView(ev)}
                aria-label={`View details of ${ev.name}`}
              >
                <Eye size={15} /> Details
              </button>
            )}
            <button
              className="btn sm"
              style={{
                background: k.gradient,
                gridColumn: onQuickView ? "auto" : "span 2",
              }}
              onClick={() => onBook(ev.id)}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </article>
  );

  if (!enable3D) return cardContent;

  return (
    <TiltCard maxTilt={8} glare={true} style={{ height: "100%", borderRadius: "var(--radius-lg)" }}>
      {cardContent}
    </TiltCard>
  );
}
