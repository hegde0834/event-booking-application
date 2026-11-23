import { CATS } from "../data.js";

export default function Bunting() {
  const cols = [
    CATS.Birthday.c,
    CATS.Haldi.c,
    CATS.Marriage.c,
    CATS["Baby Shower"].c,
    CATS.Other.c,
    "#ec4899",
    "#eab308",
    "#06b6d4"
  ];

  return (
    <div className="bunting" aria-hidden="true">
      {Array.from({ length: 28 }, (_, i) => (
        <i
          key={i}
          style={{
            background: cols[i % cols.length],
            animationDelay: `${(i % 5) * 0.25}s`,
            opacity: 0.92,
          }}
        />
      ))}
    </div>
  );
}
