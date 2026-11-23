import { useState, useMemo } from "react";
import { Search, X, Sparkles, Filter, SlidersHorizontal } from "lucide-react";
import EventCard from "../components/EventCard.jsx";
import { CATS } from "../data.js";

export default function Events({ events, query, setQuery, onBook, onQuickView }) {
  const [selectedCat, setSelectedCat] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const cats = ["All", ...Object.keys(CATS)];

  // Filtered and sorted event list
  const filteredList = useMemo(() => {
    let result = [...events];
    const q = query.trim().toLowerCase();

    // Category filter
    if (selectedCat !== "All") {
      result = result.filter(
        (e) => e.category.toLowerCase() === selectedCat.toLowerCase()
      );
    }

    // Search query filter
    if (q) {
      result = result.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q) ||
          (e.desc && e.desc.toLowerCase().includes(q)) ||
          (e.tagline && e.tagline.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [events, query, selectedCat, sortBy]);

  const getCatCount = (cat) => {
    if (cat === "All") return events.length;
    return events.filter((e) => e.category.toLowerCase() === cat.toLowerCase()).length;
  };

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2>Event Packages & Themes</h2>
        <p className="sub">
          Explore handcrafted packages with transparent pricing, full setup, floral arrangements, and coordination.
        </p>
      </div>

      <div className="tools-bar">
        <div className="search-row">
          <div className="search-input-wrap">
            <Search size={18} className="search-icon" />
            <input
              type="search"
              aria-label="Search events"
              placeholder="Search packages, e.g. 'Haldi', 'Balloon Arch', 'Royal Mandap'..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button
                className="clear-search-btn"
                onClick={() => setQuery("")}
                aria-label="Clear search query"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <SlidersHorizontal size={16} color="var(--mute)" />
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort packages by"
            >
              <option value="featured">Sort by: Featured & Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="chips" role="tablist" aria-label="Celebration Categories">
          {cats.map((c) => {
            const catInfo = CATS[c];
            const isSelected = selectedCat === c;
            return (
              <button
                key={c}
                role="tab"
                className="chip"
                aria-pressed={isSelected}
                aria-selected={isSelected}
                onClick={() => {
                  setSelectedCat(c);
                  if (query) setQuery("");
                }}
                style={
                  isSelected && catInfo
                    ? { borderColor: catInfo.c, background: catInfo.c, color: "#fff" }
                    : undefined
                }
              >
                <span>{catInfo ? catInfo.e : "✨"}</span>
                <span>{c}</span>
                <span className="chip-count">{getCatCount(c)}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <span style={{ fontSize: "0.92rem", color: "var(--mute)", fontWeight: 600 }}>
          Showing {filteredList.length} celebration {filteredList.length === 1 ? "package" : "packages"}
        </span>
      </div>

      {filteredList.length > 0 ? (
        <div className="event-grid">
          {filteredList.map((ev) => (
            <EventCard
              key={ev.id}
              ev={ev}
              onBook={onBook}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <Sparkles size={40} color="var(--mute)" />
          <div>
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.3rem" }}>No packages found</h3>
            <p>We couldn't find any celebration packages matching your search criteria.</p>
          </div>
          <button
            className="btn secondary sm"
            onClick={() => {
              setQuery("");
              setSelectedCat("All");
            }}
          >
            Clear Filters & View All
          </button>
        </div>
      )}
    </div>
  );
}
