import { useMemo, useState } from "react";
import { PHOTOS, photoSrc, type Photo } from "../data";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

const ORDER = [
	"exterior-night",
	"room-102-1",
	"room-101-1",
	"room-104-1",
	"exterior-day",
	"room-104-2",
	"room-101-2",
	"room-102-2",
	"room-101-3",
	"room-102-3",
	"exterior-street",
	"room-104-3",
	"room-101-4",
	"room-102-4",
];

const FILTERS: { key: "all" | Photo["category"]; label: string }[] = [
	{ key: "all", label: "All" },
	{ key: "exterior", label: "Exterior" },
	{ key: "rooms", label: "Rooms" },
	{ key: "bathrooms", label: "Bathrooms" },
];

export default function Gallery() {
	const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
	const [open, setOpen] = useState<number | null>(null);

	const ids = useMemo(() => ORDER.filter((id) => filter === "all" || PHOTOS[id].category === filter), [filter]);

	return (
		<section className="section gallery" id="gallery">
			<div className="container">
				<Reveal className="section-head">
					<span className="eyebrow">Gallery</span>
					<h2 className="section-title">
						Take a look <span className="text-gold">inside</span>
					</h2>
					<p className="section-lead">Real photos of our residency — what you see is exactly what you get.</p>
				</Reveal>

				<div className="gallery__filters" role="tablist" aria-label="Filter photos">
					{FILTERS.map((f) => (
						<button
							key={f.key}
							role="tab"
							aria-selected={filter === f.key}
							className={filter === f.key ? "is-active" : ""}
							onClick={() => setFilter(f.key)}
						>
							{f.label}
						</button>
					))}
				</div>

				<div className="gallery__grid" key={filter}>
					{ids.map((id, i) => (
						<button key={id} className="gallery__item" onClick={() => setOpen(i)} aria-label={`Open photo: ${PHOTOS[id].alt}`}>
							<img src={photoSrc(id, "sm")} alt={PHOTOS[id].alt} loading="lazy" decoding="async" />
							<span className="gallery__caption">{PHOTOS[id].alt}</span>
						</button>
					))}
				</div>
			</div>

			{open !== null && <Lightbox ids={ids} index={open} title="Gallery" onIndex={setOpen} onClose={() => setOpen(null)} />}
		</section>
	);
}
