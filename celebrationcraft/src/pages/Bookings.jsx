import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Users,
  Phone,
  Clock,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldAlert,
  Printer,
  RotateCcw,
  Plus
} from "lucide-react";
import TiltCard from "../components/TiltCard.jsx";
import { CATS, money } from "../data.js";

export default function Bookings({ bookings, onCancelBooking, onRebook, onAddSampleBooking }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all"); // 'all' | 'confirmed' | 'cancelled'
  const [cancellingBooking, setCancellingBooking] = useState(null);

  const filteredBookings = bookings.filter((b) => {
    if (filter === "confirmed") return b.status === "Confirmed";
    if (filter === "cancelled") return b.status === "Cancelled";
    return true;
  });

  const confirmedCount = bookings.filter((b) => b.status === "Confirmed").length;
  const cancelledCount = bookings.filter((b) => b.status === "Cancelled").length;

  const handleConfirmCancel = () => {
    if (cancellingBooking) {
      onCancelBooking(cancellingBooking.id);
      setCancellingBooking(null);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
        <div>
          <h2>My Booked Celebrations</h2>
          <p className="sub">
            Review your confirmed milestone setups, manage dates, or cancel reservations anytime.
          </p>
        </div>

        <button
          className="btn secondary sm"
          onClick={() => navigate("/events")}
        >
          <Plus size={16} /> Book Another Event
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="chips" style={{ marginBottom: "1.8rem" }}>
        <button
          className="chip"
          aria-pressed={filter === "all"}
          onClick={() => setFilter("all")}
        >
          <span>All Reservations</span>
          <span className="chip-count">{bookings.length}</span>
        </button>

        <button
          className="chip"
          aria-pressed={filter === "confirmed"}
          onClick={() => setFilter("confirmed")}
        >
          <span>🟢 Confirmed & Active</span>
          <span className="chip-count">{confirmedCount}</span>
        </button>

        <button
          className="chip"
          aria-pressed={filter === "cancelled"}
          onClick={() => setFilter("cancelled")}
        >
          <span>⚪ Cancelled</span>
          <span className="chip-count">{cancelledCount}</span>
        </button>
      </div>

      {/* Bookings List */}
      {filteredBookings.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
          {filteredBookings.map((b) => {
            const cat = CATS[b.event?.category] || CATS.Other;
            const isConfirmed = b.status === "Confirmed";

            return (
              <TiltCard key={b.id} maxTilt={4} glare={true}>
                <div
                  className="booking-manage-card"
                  style={{
                    background: "var(--surface)",
                    border: `1.5px solid ${isConfirmed ? "var(--line)" : "var(--line-strong)"}`,
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-md)",
                    display: "grid",
                    gridTemplateColumns: "240px 1fr",
                    opacity: isConfirmed ? 1 : 0.78,
                  }}
                >
                  {/* Left: Event Themed Banner */}
                  <div
                    style={{
                      backgroundImage: `url(${b.event?.image || cat.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                      minHeight: "180px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        color: "#fff",
                      }}
                    >
                      <span className="badge-pill" style={{ background: cat.c, color: "#fff", alignSelf: "flex-start" }}>
                        {cat.e} {b.event?.category}
                      </span>

                      <div>
                        <span style={{ fontSize: "0.78rem", opacity: 0.85, display: "block" }}>Reference</span>
                        <strong style={{ fontFamily: "monospace", fontSize: "1.05rem" }}>{b.id}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Right: Booking Details & Action Buttons */}
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "1rem" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
                        <div>
                          <h3 style={{ fontSize: "1.4rem", color: "var(--ink)", marginBottom: "0.3rem" }}>
                            {b.event?.name}
                          </h3>
                          <span style={{ fontSize: "0.88rem", color: "var(--mute)" }}>
                            Booked on {new Date(b.bookedAt || Date.now()).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                        </div>

                        {/* Status Badge */}
                        {isConfirmed ? (
                          <span
                            className="badge-pill"
                            style={{
                              background: "var(--success-bg)",
                              color: "var(--success)",
                              border: "1px solid var(--success)",
                              fontWeight: 700,
                            }}
                          >
                            <CheckCircle2 size={14} /> Confirmed & Scheduled
                          </span>
                        ) : (
                          <span
                            className="badge-pill"
                            style={{
                              background: "rgba(225, 29, 72, 0.1)",
                              color: "#e11d48",
                              border: "1px solid rgba(225, 29, 72, 0.3)",
                              fontWeight: 700,
                            }}
                          >
                            <XCircle size={14} /> Booking Cancelled
                          </span>
                        )}
                      </div>

                      {/* Detail Metrics */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                          gap: "0.8rem",
                          margin: "1rem 0",
                          padding: "0.9rem",
                          background: "var(--surface-hover)",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--line)",
                        }}
                      >
                        <div>
                          <span style={{ fontSize: "0.78rem", color: "var(--mute)", display: "block" }}>Event Date</span>
                          <strong style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.95rem" }}>
                            <Calendar size={15} color="var(--accent)" />
                            {b.date}
                          </strong>
                        </div>

                        <div>
                          <span style={{ fontSize: "0.78rem", color: "var(--mute)", display: "block" }}>Guest Count</span>
                          <strong style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.95rem" }}>
                            <Users size={15} color="var(--accent)" />
                            {b.guests} Guests
                          </strong>
                        </div>

                        <div>
                          <span style={{ fontSize: "0.78rem", color: "var(--mute)", display: "block" }}>Contact</span>
                          <strong style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.95rem" }}>
                            <Phone size={15} color="var(--accent)" />
                            {b.name} ({b.phone})
                          </strong>
                        </div>

                        <div>
                          <span style={{ fontSize: "0.78rem", color: "var(--mute)", display: "block" }}>Total Amount</span>
                          <strong style={{ fontSize: "1.1rem", color: "var(--ink)", fontFamily: "var(--font-heading)" }}>
                            {money(b.grandTotal)}
                          </strong>
                        </div>
                      </div>

                      {/* Addons list if present */}
                      {b.addons && b.addons.length > 0 && (
                        <div style={{ fontSize: "0.85rem", color: "var(--ink-secondary)", marginBottom: "0.6rem" }}>
                          <span style={{ fontWeight: 600 }}>Includes Add-ons: </span>
                          {b.addons.map((a) => a.name).join(", ")}
                        </div>
                      )}

                      {b.notes && (
                        <div style={{ fontSize: "0.82rem", color: "var(--mute)", fontStyle: "italic" }}>
                          Notes: “{b.notes}”
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Buttons */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "0.8rem",
                        borderTop: "1px solid var(--line)",
                        flexWrap: "wrap",
                        gap: "0.6rem",
                      }}
                    >
                      <button
                        className="btn ghost sm"
                        onClick={() => window.print()}
                      >
                        <Printer size={15} /> Print Receipt
                      </button>

                      <div style={{ display: "flex", gap: "0.6rem" }}>
                        {isConfirmed ? (
                          <button
                            className="btn sm"
                            style={{
                              background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                              color: "#fff",
                              boxShadow: "0 2px 8px rgba(225, 29, 72, 0.3)",
                            }}
                            onClick={() => setCancellingBooking(b)}
                          >
                            <AlertTriangle size={15} /> Cancel Booking
                          </button>
                        ) : (
                          <button
                            className="btn sm"
                            style={{ background: cat.gradient, color: "#fff" }}
                            onClick={() => onRebook(b.event?.id)}
                          >
                            <RotateCcw size={15} /> Re-book Celebration
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      ) : (
        <div className="empty">
          <Sparkles size={44} color="var(--accent)" />
          <div>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>
              {filter === "all"
                ? "No Booked Celebrations Yet"
                : `No ${filter} celebrations found`}
            </h3>
            <p style={{ maxWidth: "450px", margin: "0 auto", color: "var(--mute)" }}>
              Explore our handcrafted event packages for birthdays, haldi ceremonies, royal weddings, and baby showers.
            </p>
          </div>

          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "0.6rem" }}>
            <button className="btn sm" onClick={() => navigate("/events")}>
              Browse Event Catalog <ArrowRight size={15} />
            </button>
            {onAddSampleBooking && (
              <button className="btn secondary sm" onClick={onAddSampleBooking}>
                <Plus size={15} /> Add Sample Booking (for Testing)
              </button>
            )}
          </div>
        </div>
      )}

      {/* Cancel Booking Confirmation Modal */}
      {cancellingBooking && (
        <div className="modal-backdrop" onClick={() => setCancellingBooking(null)} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "520px" }}>
            <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "var(--radius-full)",
                  background: "rgba(225, 29, 72, 0.12)",
                  color: "#e11d48",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <ShieldAlert size={28} />
              </div>

              <div>
                <h3 style={{ fontSize: "1.45rem", color: "var(--ink)", marginBottom: "0.4rem" }}>
                  Cancel This Celebration?
                </h3>
                <p style={{ color: "var(--ink-secondary)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  Are you sure you want to cancel booking <strong>{cancellingBooking.id}</strong> for <strong>{cancellingBooking.event?.name}</strong> on <strong>{cancellingBooking.date}</strong>?
                </p>
              </div>

              <div
                style={{
                  background: "var(--surface-hover)",
                  padding: "0.85rem 1rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--line)",
                  fontSize: "0.85rem",
                  color: "var(--mute)",
                }}
              >
                ✨ <strong>Zero Cancellation Penalty:</strong> As per our CelebrationCraft guarantee, full cancellation is completely free.
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.8rem", marginTop: "0.5rem" }}>
                <button
                  className="btn secondary"
                  onClick={() => setCancellingBooking(null)}
                >
                  Keep Booking
                </button>
                <button
                  className="btn"
                  style={{
                    background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                    color: "#fff",
                  }}
                  onClick={handleConfirmCancel}
                >
                  Yes, Cancel Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
