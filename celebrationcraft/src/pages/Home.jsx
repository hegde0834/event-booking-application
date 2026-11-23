import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Star, Heart, Award, ShieldCheck, Clock, Palette } from "lucide-react";
import Bunting from "../components/Bunting.jsx";
import EventCard from "../components/EventCard.jsx";
import TiltCard from "../components/TiltCard.jsx";
import Celebration3DCanvas from "../components/Celebration3DCanvas.jsx";
import { CATS, TESTIMONIALS, money } from "../data.js";

export default function Home({ events, pickCat, onBook, onQuickView }) {
  const navigate = useNavigate();

  // Signature featured celebrations across different categories
  const featuredEvents = events.slice(0, 4);

  const categories = [
    { key: "Marriage", starting: 60000 },
    { key: "Haldi", starting: 22000 },
    { key: "Birthday", starting: 18000 },
    { key: "Baby Shower", starting: 28000 },
  ];

  return (
    <div>
      <Bunting />

      {/* Hero Section with Interactive 3D Celebration Canvas */}
      <section className="hero hero-3d-container">
        {/* Three.js 3D Floating Geometry & Particles Layer */}
        <Celebration3DCanvas />

        <div className="hero-content-layer">
          <div className="hero-pill">
            <Sparkles size={16} />
            <span>Interactive 3D Milestone Decor Experience</span>
          </div>

          <h1>
            Your Milestone, <br />
            <span className="gradient-text">Beautifully Crafted.</span>
          </h1>

          <p className="hero-desc">
            From opulent royal wedding mandaps and sunny marigold haldi courtyards to milestone birthdays and dreamy baby showers. Choose a mastercrafted package or design your bespoke theme in minutes.
          </p>

          <div className="hero-buttons">
            <button className="btn" onClick={() => navigate("/events")}>
              <span>Explore All Packages</span>
              <ArrowRight size={18} />
            </button>
            <button className="btn ghost" onClick={() => navigate("/create")}>
              <Sparkles size={16} />
              <span>Design Custom Theme</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon" style={{ background: "var(--cat-marriage-bg)", color: "var(--cat-marriage)" }}>
                <Heart size={20} />
              </div>
              <div className="stat-info">
                <h4>1,200+</h4>
                <p>Milestone Events</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon" style={{ background: "var(--cat-haldi-bg)", color: "var(--cat-haldi)" }}>
                <Star size={20} />
              </div>
              <div className="stat-info">
                <h4>4.98 / 5</h4>
                <p>Verified Rating</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon" style={{ background: "var(--cat-babyshower-bg)", color: "var(--cat-babyshower)" }}>
                <Award size={20} />
              </div>
              <div className="stat-info">
                <h4>100%</h4>
                <p>Fresh Floral & Artisan Decor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Celebration Categories Showcase with 3D Tilt */}
      <section style={{ marginTop: "3rem" }}>
        <div className="section-header">
          <div>
            <h2 className="section-title">Select Your Celebration</h2>
            <p className="section-sub">Immersive aesthetics, color palettes, and ritual-ready styling for every milestone.</p>
          </div>
          <button className="btn secondary sm" onClick={() => navigate("/events")}>
            View All ({events.length})
          </button>
        </div>

        <div className="cat-grid">
          {categories.map(({ key, starting }) => {
            const catInfo = CATS[key];
            return (
              <TiltCard key={key} maxTilt={10} glare={true} style={{ height: "100%", borderRadius: "var(--radius-lg)" }}>
                <div
                  className="cat-card"
                  style={{ backgroundImage: `url(${catInfo.image})`, height: "100%" }}
                  onClick={() => pickCat(key)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") pickCat(key); }}
                  aria-label={`Explore ${key} packages starting from ${money(starting)}`}
                >
                  <div className="cat-card-content">
                    <span className="cat-top-tag">
                      {catInfo.e} {key}
                    </span>
                    <h3>{key}</h3>
                    <p>{catInfo.tagline}</p>
                    <div className="cat-bottom-action">
                      <span>From {money(starting)}</span>
                      <span>Browse themes <ArrowRight size={14} /></span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* Featured Packages Showcase with 3D Tilt */}
      <section style={{ marginTop: "4rem" }}>
        <div className="section-header">
          <div>
            <h2 className="section-title">Featured Milestone Packages</h2>
            <p className="section-sub">Most beloved handcrafted packages curated with full decor, lighting, and stage flow.</p>
          </div>
          <button className="btn secondary sm" onClick={() => navigate("/events")}>
            See all packages <ArrowRight size={15} />
          </button>
        </div>

        <div className="event-grid">
          {featuredEvents.map((ev) => (
            <EventCard
              key={ev.id}
              ev={ev}
              onBook={onBook}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </section>

      {/* Why Choose CelebrationCraft */}
      <section style={{ marginTop: "4.5rem" }}>
        <div className="section-header" style={{ marginBottom: "0.5rem" }}>
          <div>
            <h2 className="section-title">The CelebrationCraft Standard</h2>
            <p className="section-sub">Why thousands of families trust us with their sacred and once-in-a-lifetime moments.</p>
          </div>
        </div>

        <div className="pillars-grid">
          <TiltCard maxTilt={6} glare={false}>
            <div className="pillar-card" style={{ height: "100%" }}>
              <div className="pillar-icon">
                <Palette size={24} />
              </div>
              <h3>Artisan Decorators</h3>
              <p>Every floral garland, mandap drape, and balloon installation is handcrafted by veteran event artisans.</p>
            </div>
          </TiltCard>

          <TiltCard maxTilt={6} glare={false}>
            <div className="pillar-card" style={{ height: "100%" }}>
              <div className="pillar-icon">
                <Award size={24} />
              </div>
              <h3>Fresh Floral Guarantee</h3>
              <p>We source authentic fragrant marigolds, tuberoses, and roses on the morning of your event for maximum freshness.</p>
            </div>
          </TiltCard>

          <TiltCard maxTilt={6} glare={false}>
            <div className="pillar-card" style={{ height: "100%" }}>
              <div className="pillar-icon">
                <Clock size={24} />
              </div>
              <h3>Zero Day-Of Stress</h3>
              <p>Our dedicated on-site coordinator manages complete delivery, setup 2 hours prior, and tear-down after the event.</p>
            </div>
          </TiltCard>

          <TiltCard maxTilt={6} glare={false}>
            <div className="pillar-card" style={{ height: "100%" }}>
              <div className="pillar-icon">
                <ShieldCheck size={24} />
              </div>
              <h3>Transparent Pricing</h3>
              <p>No hidden travel fees or surprise costs. All prices are transparent and customizable to your guest count.</p>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Real Customer Stories & Testimonials */}
      <section style={{ marginTop: "4.5rem" }}>
        <div className="section-header" style={{ marginBottom: "0.5rem" }}>
          <div>
            <h2 className="section-title">Cherished Moments & Reviews</h2>
            <p className="section-sub">Real stories from brides, parents, and party hosts.</p>
          </div>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <TiltCard key={idx} maxTilt={6} glare={true} style={{ height: "100%", borderRadius: "var(--radius-md)" }}>
              <div className="testimonial-card" style={{ height: "100%" }}>
                <div>
                  <div className="testimonial-stars">
                    {Array.from({ length: t.stars }, (_, s) => (
                      <Star key={s} size={15} fill="#f59e0b" strokeWidth={0} />
                    ))}
                  </div>
                  <p style={{ marginTop: "0.8rem" }}>“{t.quote}”</p>
                </div>

                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {t.avatar}
                  </div>
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.event} ({t.date})</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </div>
  );
}
