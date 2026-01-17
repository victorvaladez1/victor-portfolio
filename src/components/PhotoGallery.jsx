import React, { useEffect, useMemo, useState } from "react";

function clampIndex(i, len) {
  if (len <= 0) return 0;
  return (i + len) % len;
}

export default function PhotographyGallery() {

  const photos = useMemo(
    () => [
        { src: "/photos/photography/sf-street.jpg", alt: "San Francisco Street" },
        { src: "/photos/photography/air-jordan-6.jpg", alt: "Air Jordan 6" },
        { src: "/photos/photography/bobcat.jpg", alt: "Bobcat" },
        { src: "/photos/photography/frog.jpg", alt: "Frog" },

        { src: "/photos/photography/bmw-street.jpg", alt: "BMW Street" },
        { src: "/photos/photography/bmw-e30.jpg", alt: "BMW E30" },
        { src: "/photos/photography/snake.jpg", alt: "Snake" },
        { src: "/photos/photography/sea-lions.jpg", alt: "Sea Lions" },

        { src: "/photos/photography/golden-gate.jpg", alt: "Golden Gate Bridge" },
        { src: "/photos/photography/porsche-911-silver.jpg", alt: "Silver Porsche 911" },
        { src: "/photos/photography/porsche-911-white.jpg", alt: "White Porsche 911" },
        { src: "/photos/photography/vw-beetle.jpg", alt: "Volkswagen Beetle" },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;
  const current = isOpen ? photos[openIndex] : null;

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? 0 : clampIndex(i + 1, photos.length)));
      }
      if (e.key === "ArrowLeft") {
        setOpenIndex((i) => (i === null ? 0 : clampIndex(i - 1, photos.length)));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, photos.length]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 xl:max-w-7xl 2xl:max-w-[1400px]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Photography</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-500">
          Selected work — curated, not comprehensive.
        </p>
      </div>

      {/* Masonry-style columns */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((p, idx) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="group mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl bg-neutral-100 shadow-sm ring-1 ring-black/5 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/20"
            aria-label={`Open photo: ${p.alt}`}
          >
            <div className="relative">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.01]"
              />
              {/* subtle hover overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs text-white/70">
                {openIndex + 1} / {photos.length}
              </p>
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                className="rounded-full bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
              >
                Close
              </button>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[78vh] w-full object-contain"
              />
            </div>

            {/* Bottom controls */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setOpenIndex((i) => clampIndex((i ?? 0) - 1, photos.length))}
                className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
              >
                ← Prev
              </button>

              <p className="hidden max-w-[70%] truncate text-center text-xs text-white/70 sm:block">
                {current.alt}
              </p>

              <button
                type="button"
                onClick={() => setOpenIndex((i) => clampIndex((i ?? 0) + 1, photos.length))}
                className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}