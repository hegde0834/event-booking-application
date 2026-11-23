import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  Sparkles,
  Sun,
  Moon,
  Calendar,
  PlusCircle,
  Compass,
  Layers,
  BookmarkCheck,
} from "lucide-react";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Book from "./pages/Book.jsx";
import Create from "./pages/Create.jsx";
import Bookings from "./pages/Bookings.jsx";
import EventDetailModal from "./components/EventDetailModal.jsx";
import { SEED_EVENTS } from "./data.js";

const DEFAULT_BOOKINGS = [
  {
    id: "CC-2026-9481",
    event: SEED_EVENTS[2], // Marigold Haldi Morning
    name: "Pooja Hegde",
    phone: "9876543210",
    email: "pooja@example.com",
    date: "2026-11-20",
    guests: "120",
    status: "Confirmed",
    addons: [{ id: "photo", name: "Professional Candid Photography & Reels", price: 12000 }],
    grandTotal: 34000,
    bookedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    notes: "Courtyard setup required by 8:30 AM before ritual starts.",
  },
];

export default function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [events, setEvents] = useState(SEED_EVENTS);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const [modalEvent, setModalEvent] = useState(null);

  // Bookings list state with localStorage
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("celebrationcraft_bookings");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {}
    }
    return DEFAULT_BOOKINGS;
  });

  useEffect(() => {
    localStorage.setItem("celebrationcraft_bookings", JSON.stringify(bookings));
  }, [bookings]);

  // Dark/Light theme state
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const pickCat = (k) => {
    setQuery(k);
    navigate("/events");
  };

  const onBook = (id) => {
    setSelected(String(id));
    navigate("/book");
  };

  const onBookCelebration = (bookingData) => {
    setBookings((prev) => [bookingData, ...prev]);
  };

  const onCancelBooking = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: "Cancelled" } : b))
    );
  };

  const onRebook = (eventId) => {
    if (eventId) {
      setSelected(String(eventId));
      navigate("/book");
    } else {
      navigate("/events");
    }
  };

  const onAddSampleBooking = () => {
    const sampleEvent = events[Math.floor(Math.random() * events.length)];
    const sampleRef = "CC-" + Math.floor(100000 + Math.random() * 900000);
    const newSample = {
      id: sampleRef,
      event: sampleEvent,
      name: "Sneha & Arjun Kapoor",
      phone: "9820011223",
      email: "sneha.k@example.com",
      date: "2026-12-05",
      guests: "150",
      status: "Confirmed",
      addons: [{ id: "floral", name: "Fresh Exotic Floral Upgrade", price: 8000 }],
      grandTotal: sampleEvent.price + 8000,
      bookedAt: new Date().toISOString(),
      notes: "Main ballroom setup with floral entrance arch.",
    };
    setBookings((prev) => [newSample, ...prev]);
  };

  const addEvent = (ev) => {
    const created = {
      ...ev,
      id: Date.now(),
      rating: 5.0,
      reviewsCount: 1,
      badge: "Custom Theme",
      features: ev.features || [ev.desc.slice(0, 45) + "..."],
    };
    setEvents((prev) => [created, ...prev]);
    return created;
  };

  const activeConfirmedCount = bookings.filter((b) => b.status === "Confirmed").length;

  const tabs = [
    { to: "/", label: "Home", icon: Compass },
    { to: "/events", label: "Celebrations", icon: Layers },
    {
      to: "/bookings",
      label: "My Bookings",
      icon: BookmarkCheck,
      badge: activeConfirmedCount > 0 ? String(activeConfirmedCount) : null,
    },
    { to: "/book", label: "Book", icon: Calendar, badge: selected ? "1" : null },
    { to: "/create", label: "Custom Studio", icon: PlusCircle },
  ];

  return (
    <div>
      <header>
        <div className="bar">
          <div className="logo-group">
            <button className="logo" onClick={() => navigate("/")} aria-label="CelebrationCraft Home">
              <span className="logo-badge" aria-hidden="true">
                <Sparkles size={18} />
              </span>
              <span>Celebration<b>Craft</b></span>
            </button>
          </div>

          <div className="nav-actions">
            <nav aria-label="Main Navigation">
              {tabs.map(({ to, label, icon: Icon, badge }) => (
                <NavLink key={to} to={to} end>
                  <Icon size={16} />
                  <span>{label}</span>
                  {badge && (
                    <span
                      style={{
                        background: to === "/bookings" ? "var(--success)" : "var(--accent)",
                        color: "#fff",
                        fontSize: "0.72rem",
                        padding: "0.1rem 0.45rem",
                        borderRadius: "99px",
                        fontWeight: 700,
                      }}
                    >
                      {badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            <button
              className="theme-toggle-btn"
              onClick={() => setIsDark((prev) => !prev)}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                events={events}
                pickCat={pickCat}
                onBook={onBook}
                onQuickView={setModalEvent}
              />
            }
          />
          <Route
            path="/events"
            element={
              <Events
                events={events}
                query={query}
                setQuery={setQuery}
                onBook={onBook}
                onQuickView={setModalEvent}
              />
            }
          />
          <Route
            path="/bookings"
            element={
              <Bookings
                bookings={bookings}
                onCancelBooking={onCancelBooking}
                onRebook={onRebook}
                onAddSampleBooking={onAddSampleBooking}
              />
            }
          />
          <Route
            path="/book"
            element={
              <Book
                events={events}
                selected={selected}
                setSelected={setSelected}
                onBookCelebration={onBookCelebration}
              />
            }
          />
          <Route
            path="/create"
            element={
              <Create
                addEvent={addEvent}
                onBook={onBook}
              />
            }
          />
          <Route
            path="*"
            element={
              <Home
                events={events}
                pickCat={pickCat}
                onBook={onBook}
                onQuickView={setModalEvent}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Event Detail Modal */}
      {modalEvent && (
        <EventDetailModal
          ev={modalEvent}
          onClose={() => setModalEvent(null)}
          onBook={onBook}
        />
      )}

      <footer>
        <div className="logo-group" style={{ justifyContent: "center" }}>
          <span className="logo-badge" aria-hidden="true" style={{ width: 28, height: 28 }}>
            <Sparkles size={15} />
          </span>
          <strong style={{ fontSize: "1.1rem" }}>CelebrationCraft</strong>
        </div>
        <p style={{ maxWidth: "500px", margin: "0 auto" }}>
          Crafting unforgettable celebrations, lavish Indian wedding mandaps, vibrant haldi mornings, milestone birthdays, and dreamy baby showers.
        </p>
        <div className="footer-links">
          <a href="#browse" onClick={(e) => { e.preventDefault(); navigate("/events"); }}>Catalog</a>
          <a href="#bookings" onClick={(e) => { e.preventDefault(); navigate("/bookings"); }}>My Bookings</a>
          <a href="#custom" onClick={(e) => { e.preventDefault(); navigate("/create"); }}>Custom Studio</a>
          <a href="#book" onClick={(e) => { e.preventDefault(); navigate("/book"); }}>Book Consultation</a>
        </div>
        <div style={{ fontSize: "0.82rem", opacity: 0.75, marginTop: "0.5rem" }}>
          © {new Date().getFullYear()} CelebrationCraft. All rights reserved. Made for the moments that matter.
        </div>
      </footer>
    </div>
  );
}
