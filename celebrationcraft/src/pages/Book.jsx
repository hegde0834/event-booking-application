import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Calendar,
  Users,
  CheckCircle2,
  Printer,
  ArrowRight,
  ShieldCheck,
  Check,
  Phone,
  Mail,
  User,
  Plus,
  BookmarkCheck
} from "lucide-react";
import Field from "../components/Field.jsx";
import { money, today, ADD_ONS, CATS } from "../data.js";

export default function Book({ events, selected, setSelected, onBookCelebration }) {
  const navigate = useNavigate();

  const [f, setF] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guests: "100",
    notes: "",
  });

  const [selectedAddons, setSelectedAddons] = useState([]);
  const [errs, setErrs] = useState({});
  const [done, setDone] = useState(null);

  // Selected event object
  const currentEvent = useMemo(() => {
    return events.find((e) => e.id === Number(selected)) || null;
  }, [events, selected]);

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const toggleAddon = (addonId) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  // Price calculations
  const basePrice = currentEvent ? currentEvent.price : 0;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = ADD_ONS.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);
  const grandTotal = basePrice + addonsTotal;

  const validate = () => {
    const x = {};
    if (f.name.trim().length < 2) x.name = "Please enter your full name.";
    if (!f.phone.trim() || f.phone.trim().length < 10) x.phone = "Enter a valid 10-digit mobile number.";
    if (!selected) x.type = "Please select a celebration package.";
    if (!f.date) x.date = "Please select an event date.";
    else if (f.date < today()) x.date = "Event date must be today or in the future.";
    const g = Number(f.guests);
    if (!f.guests) x.guests = "Enter the estimated number of guests.";
    else if (!Number.isInteger(g) || g < 1 || g > 10000) x.guests = "Guests must be between 1 and 10,000.";
    return x;
  };

  const submit = (e) => {
    e.preventDefault();
    const x = validate();
    setErrs(x);
    if (!Object.keys(x).length) {
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#e11d74", "#f59e0b", "#10b981", "#7c3aed"],
        });
      } catch (err) {}

      const bookingRef = "CC-" + Math.floor(100000 + Math.random() * 900000);
      const bookingData = {
        id: bookingRef,
        ...f,
        event: currentEvent,
        addons: selectedAddons.map((id) => ADD_ONS.find((a) => a.id === id)),
        grandTotal,
        bookingRef,
        status: "Confirmed",
        bookedAt: new Date().toISOString(),
      };

      if (onBookCelebration) {
        onBookCelebration(bookingData);
      }

      setDone(bookingData);
    }
  };

  const printVoucher = () => {
    window.print();
  };

  if (done) {
    const cat = CATS[done.event.category] || CATS.Other;
    return (
      <div className="booking-voucher">
        <div className="voucher-header">
          <div className="voucher-badge">
            <CheckCircle2 size={16} /> Booking Request Confirmed
          </div>
          <h3>Celebration Reserved!</h3>
          <p style={{ opacity: 0.9, marginTop: "0.4rem" }}>
            Thank you, {done.name.trim()}. Your dedicated celebration manager will contact you within 24 hours.
          </p>
        </div>

        <div className="voucher-body">
          <div className="voucher-code-box">
            <div>
              <span>Booking Reference Number</span>
              <strong>{done.bookingRef}</strong>
            </div>
            <span className="badge-pill" style={{ background: cat.c, color: "#fff" }}>
              {cat.e} {done.event.category}
            </span>
          </div>

          <div className="voucher-dl">
            <div className="voucher-dl-item">
              <dt>Package</dt>
              <dd>{done.event.name}</dd>
            </div>
            <div className="voucher-dl-item">
              <dt>Event Date</dt>
              <dd>{done.date}</dd>
            </div>
            <div className="voucher-dl-item">
              <dt>Expected Guests</dt>
              <dd>{done.guests} People</dd>
            </div>
            <div className="voucher-dl-item">
              <dt>Contact Phone</dt>
              <dd>{done.phone}</dd>
            </div>
          </div>

          {done.addons && done.addons.length > 0 && (
            <div style={{ background: "var(--surface-hover)", padding: "1rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--line)" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--mute)", display: "block", marginBottom: "0.4rem", fontWeight: 700 }}>
                Selected Add-ons & Upgrades:
              </span>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.92rem", color: "var(--ink-secondary)" }}>
                {done.addons.map((a) => (
                  <li key={a.id}>
                    <strong>{a.name}</strong> ({money(a.price)})
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1.5px dashed var(--line)", paddingTop: "1rem" }}>
            <span style={{ fontSize: "1.1rem", fontWeight: 700 }}>Estimated Total Investment</span>
            <span style={{ fontSize: "1.8rem", fontWeight: 800, fontFamily: "var(--font-heading)", color: "var(--accent)" }}>
              {money(done.grandTotal)}
            </span>
          </div>

          <div className="voucher-actions">
            <button
              className="btn"
              onClick={() => navigate("/bookings")}
              style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "#fff" }}
            >
              <BookmarkCheck size={16} /> View in My Bookings
            </button>
            <button className="btn secondary" onClick={printVoucher}>
              <Printer size={16} /> Print Voucher
            </button>
            <button
              className="btn secondary"
              onClick={() => {
                setDone(null);
                setF({ name: "", phone: "", email: "", date: "", guests: "100", notes: "" });
                setSelectedAddons([]);
                setSelected("");
              }}
            >
              Book Another Event
            </button>
            <button className="btn ghost" onClick={() => navigate("/events")}>
              Back to Catalog
            </button>
          </div>
        </div>
      </div>
    );
  }

  const catStyle = currentEvent ? CATS[currentEvent.category] || CATS.Other : null;

  return (
    <div>
      <div>
        <h2>Book Your Celebration</h2>
        <p className="sub">
          Lock in your preferred date and design details. Our master decorators coordinate everything seamlessly.
        </p>
      </div>

      <div className="book-layout">
        {/* Left Column: Form */}
        <form className="booking-form" onSubmit={submit} noValidate>
          <div className="form-section-title">
            <User size={18} color="var(--accent)" />
            <span>1. Contact Details</span>
          </div>

          <Field label="Full Name" error={errs.name}>
            <input
              value={f.name}
              onChange={set("name")}
              aria-invalid={!!errs.name}
              placeholder="e.g. Priyadarshini Rao"
            />
          </Field>

          <div className="form-row">
            <Field label="Mobile Phone" error={errs.phone}>
              <input
                type="tel"
                value={f.phone}
                onChange={set("phone")}
                aria-invalid={!!errs.phone}
                placeholder="e.g. 9876543210"
              />
            </Field>

            <Field label="Email Address (Optional)">
              <input
                type="email"
                value={f.email}
                onChange={set("email")}
                placeholder="name@example.com"
              />
            </Field>
          </div>

          <div className="form-section-title">
            <Calendar size={18} color="var(--accent)" />
            <span>2. Celebration Package & Date</span>
          </div>

          <Field label="Celebration Package" error={errs.type}>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              aria-invalid={!!errs.type}
            >
              <option value="">-- Choose a Celebration Package --</option>
              {events.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name} ({e.category}) — {money(e.price)}
                </option>
              ))}
            </select>
          </Field>

          <div className="form-row">
            <Field label="Event Date" error={errs.date}>
              <input
                type="date"
                min={today()}
                value={f.date}
                onChange={set("date")}
                aria-invalid={!!errs.date}
              />
            </Field>

            <Field label="Estimated Guests" error={errs.guests}>
              <input
                type="number"
                min="1"
                value={f.guests}
                onChange={set("guests")}
                aria-invalid={!!errs.guests}
                placeholder="100"
              />
            </Field>
          </div>

          <div className="form-section-title">
            <Sparkles size={18} color="var(--accent)" />
            <span>3. Enhancements & Add-ons</span>
          </div>

          <div className="addons-grid">
            {ADD_ONS.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  className={`addon-card ${isChecked ? "selected" : ""}`}
                  onClick={() => toggleAddon(addon.id)}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggleAddon(addon.id); }}
                >
                  <input
                    type="checkbox"
                    className="addon-checkbox"
                    checked={isChecked}
                    onChange={() => {}}
                    tabIndex={-1}
                  />
                  <div className="addon-content">
                    <div className="addon-header">
                      <span className="addon-title">{addon.name}</span>
                      <span className="addon-price">+{money(addon.price)}</span>
                    </div>
                    <p className="addon-desc">{addon.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Field label="Special Requests or Venue Notes (Optional)">
            <textarea
              rows="3"
              value={f.notes}
              onChange={set("notes")}
              placeholder="e.g. Outdoor garden lawn, need setup completed by 9:00 AM, color preference..."
            />
          </Field>

          <button className="btn" type="submit" style={{ padding: "0.95rem", fontSize: "1.05rem" }}>
            <Sparkles size={18} /> Confirm & Send Booking Request
          </button>
        </form>

        {/* Right Column: Dynamic Order Summary Box */}
        <aside className="summary-card">
          <h3 style={{ fontSize: "1.25rem", color: "var(--ink)" }}>Booking Summary</h3>

          {currentEvent ? (
            <div className="summary-event-preview">
              <img
                src={currentEvent.image || (catStyle ? catStyle.image : "/images/haldi.jpg")}
                alt={currentEvent.name}
                className="summary-preview-img"
              />
              <div className="summary-preview-details">
                <span
                  className="badge-pill"
                  style={{
                    background: catStyle ? catStyle.c : "var(--accent)",
                    color: "#fff",
                    alignSelf: "flex-start",
                  }}
                >
                  {catStyle ? catStyle.e : "✨"} {currentEvent.category}
                </span>
                <strong style={{ fontSize: "1.1rem" }}>{currentEvent.name}</strong>
                <span style={{ fontSize: "0.82rem", color: "var(--mute)" }}>
                  {currentEvent.duration || "4 - 5 Hours"} • {currentEvent.capacity || "Up to 100 Guests"}
                </span>
              </div>
            </div>
          ) : (
            <div
              style={{
                padding: "2rem 1rem",
                textAlign: "center",
                background: "var(--surface-hover)",
                borderRadius: "var(--radius-sm)",
                border: "1.5px dashed var(--line)",
                color: "var(--mute)",
              }}
            >
              Please select a package on the left to see live pricing & inclusions.
            </div>
          )}

          <div className="summary-line-items">
            <div className="summary-line">
              <span>Base Package Price</span>
              <strong>{money(basePrice)}</strong>
            </div>

            {selectedAddons.map((id) => {
              const a = ADD_ONS.find((item) => item.id === id);
              if (!a) return null;
              return (
                <div key={id} className="summary-line">
                  <span style={{ fontSize: "0.85rem" }}>+ {a.name}</span>
                  <span>{money(a.price)}</span>
                </div>
              );
            })}

            <div className="summary-line" style={{ fontSize: "0.82rem", color: "var(--mute)" }}>
              <span>Delivery, Setup & Teardown</span>
              <span style={{ color: "var(--success)", fontWeight: 700 }}>FREE (Included)</span>
            </div>
          </div>

          <div className="summary-total">
            <span className="summary-total-label">Total Investment</span>
            <span className="summary-total-val">{money(grandTotal)}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "var(--surface-hover)",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-sm)",
              fontSize: "0.82rem",
              color: "var(--mute)",
            }}
          >
            <ShieldCheck size={20} color="var(--success)" style={{ flexShrink: 0 }} />
            <span>Zero cancellation fee up to 7 days before event.</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
