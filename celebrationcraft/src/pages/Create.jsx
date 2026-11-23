import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { Sparkles, Palette, Plus, ArrowRight, Eye, CheckCircle2 } from "lucide-react";
import Field from "../components/Field.jsx";
import EventCard from "../components/EventCard.jsx";
import { CATS } from "../data.js";

const BLANK = {
  name: "",
  category: "Birthday",
  price: "",
  duration: "4 - 5 Hours",
  capacity: "Up to 100 Guests",
  tagline: "",
  desc: "",
};

export default function Create({ addEvent, onBook }) {
  const navigate = useNavigate();
  const [f, setF] = useState(BLANK);
  const [inclusions, setInclusions] = useState(["Custom Entrance Arch", "Theme Cake Pedestal", "Ambient Lighting"]);
  const [newInclusion, setNewInclusion] = useState("");
  const [errs, setErrs] = useState({});
  const [added, setAdded] = useState(null);

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const addInclusionTag = () => {
    if (newInclusion.trim() && !inclusions.includes(newInclusion.trim())) {
      setInclusions([...inclusions, newInclusion.trim()]);
      setNewInclusion("");
    }
  };

  const removeInclusionTag = (index) => {
    setInclusions(inclusions.filter((_, i) => i !== index));
  };

  const validate = () => {
    const x = {};
    if (f.name.trim().length < 3) x.name = "Give the theme a title of at least 3 characters.";
    if (!f.price || Number(f.price) <= 0) x.price = "Enter a valid base package price above zero.";
    if (f.desc.trim().length < 15) x.desc = "Describe the decor concept in at least 15 characters.";
    return x;
  };

  const submit = (e) => {
    e.preventDefault();
    const x = validate();
    setErrs(x);
    if (Object.keys(x).length) return;

    const catInfo = CATS[f.category] || CATS.Other;
    const newEvent = addEvent({
      name: f.name.trim(),
      category: f.category,
      price: Number(f.price),
      duration: f.duration,
      capacity: f.capacity,
      tagline: f.tagline.trim() || f.desc.slice(0, 70) + "...",
      desc: f.desc.trim(),
      image: catInfo.image,
      features: inclusions.length > 0 ? inclusions : ["Custom Decor Setup", "On-site Manager"],
      included: inclusions,
    });

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (err) {}

    setAdded(newEvent);
    setF(BLANK);
  };

  // Preview event object for live rendering
  const previewCat = CATS[f.category] || CATS.Birthday;
  const previewEvent = {
    id: 999999,
    name: f.name.trim() || "Your Custom Dream Theme",
    category: f.category,
    price: Number(f.price) || 25000,
    duration: f.duration || "4 - 5 Hours",
    capacity: f.capacity || "Up to 100 Guests",
    image: previewCat.image,
    badge: "Custom Concept",
    rating: 5.0,
    reviewsCount: 1,
    tagline: f.tagline.trim() || "Custom handcrafted decor tailored specifically for your special day.",
    desc: f.desc.trim() || "Complete personalized ambiance, customized color palette, stage background, and coordinator.",
    features: inclusions.length > 0 ? inclusions : ["Custom Entrance Arch", "Theme Cake Table"],
  };

  return (
    <div>
      <div>
        <h2>Custom Theme Studio</h2>
        <p className="sub">
          Have a unique theme concept in mind? Design and configure your package with instant catalog inclusion.
        </p>
      </div>

      {added && (
        <div
          style={{
            background: "var(--surface)",
            border: "2px solid var(--success)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
          }}
          role="status"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--success)" }}>
            <CheckCircle2 size={22} />
            <h3 style={{ fontSize: "1.3rem", color: "var(--ink)" }}>“{added.name}” is now live in the catalog!</h3>
          </div>
          <p style={{ color: "var(--ink-secondary)" }}>
            Your custom theme is active and ready for immediate booking under the {added.category} category.
          </p>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "0.4rem" }}>
            <button className="btn sm" onClick={() => onBook(added.id)}>
              <Sparkles size={15} /> Book It Now
            </button>
            <button className="btn secondary sm" onClick={() => navigate("/events")}>
              View in Catalog
            </button>
          </div>
        </div>
      )}

      <div className="studio-layout">
        {/* Left: Design Form */}
        <form className="booking-form" onSubmit={submit} noValidate>
          <div className="form-section-title">
            <Palette size={18} color="var(--accent)" />
            <span>Theme Configuration</span>
          </div>

          <Field label="Theme / Package Name" error={errs.name}>
            <input
              value={f.name}
              onChange={set("name")}
              aria-invalid={!!errs.name}
              placeholder="e.g. Boho Botanical Garden Baby Shower"
            />
          </Field>

          <div className="form-row">
            <Field label="Celebration Category">
              <select value={f.category} onChange={set("category")}>
                {Object.keys(CATS).map((c) => (
                  <option key={c} value={c}>
                    {CATS[c].e} {c}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Base Price (₹)" error={errs.price}>
              <input
                type="number"
                min="1"
                value={f.price}
                onChange={set("price")}
                aria-invalid={!!errs.price}
                placeholder="e.g. 35000"
              />
            </Field>
          </div>

          <div className="form-row">
            <Field label="Setup Duration">
              <input
                value={f.duration}
                onChange={set("duration")}
                placeholder="e.g. 5 Hours"
              />
            </Field>

            <Field label="Guest Capacity">
              <input
                value={f.capacity}
                onChange={set("capacity")}
                placeholder="e.g. Up to 150 Guests"
              />
            </Field>
          </div>

          <Field label="Short Catchy Tagline (Optional)">
            <input
              value={f.tagline}
              onChange={set("tagline")}
              placeholder="e.g. Dreamy eucalyptus leaves, fairy light canopies & cozy floor cushions."
            />
          </Field>

          <Field label="Detailed Decor Concept & Inclusions" error={errs.desc}>
            <textarea
              rows="4"
              value={f.desc}
              onChange={set("desc")}
              aria-invalid={!!errs.desc}
              placeholder="Describe the mood, centerpiece setups, backdrop drapes, floral styles, lighting, and any customized interactive corners..."
            />
          </Field>

          <div>
            <label style={{ marginBottom: "0.5rem" }}>
              Key Included Items (Interactive Tags)
            </label>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.6rem" }}>
              <input
                value={newInclusion}
                onChange={(e) => setNewInclusion(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addInclusionTag(); }}}
                placeholder="Type item e.g. 'Photo Booth' and click Add"
              />
              <button
                type="button"
                className="btn secondary sm"
                onClick={addInclusionTag}
                style={{ flexShrink: 0 }}
              >
                <Plus size={16} /> Add
              </button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {inclusions.map((item, i) => (
                <span
                  key={i}
                  className="chip"
                  style={{ fontSize: "0.82rem", padding: "0.25rem 0.65rem", background: "var(--surface-hover)" }}
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => removeInclusionTag(i)}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginLeft: "0.3rem", color: "var(--mute)" }}
                    aria-label={`Remove ${item}`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button className="btn" type="submit" style={{ padding: "0.95rem", fontSize: "1.05rem" }}>
            <Sparkles size={18} /> Launch Custom Theme to Catalog
          </button>
        </form>

        {/* Right: Live Interactive Card Preview */}
        <aside className="live-preview-box">
          <div className="live-preview-badge">
            <span className="live-preview-pulse" />
            <span>Live Interactive Card Preview</span>
          </div>

          <EventCard
            ev={previewEvent}
            onBook={() => {}}
            onQuickView={() => {}}
          />
        </aside>
      </div>
    </div>
  );
}
