import { useState } from "react";
import { CONTACT, PHOTOS, ROOMS, formatPKR, photoSrc, whatsappLink, type Room } from "../data";
import { BedIcon, CameraIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon, ExternalIcon, UsersIcon, WhatsAppIcon } from "./Icons";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

function RoomCard({ room, onOpen }: { room: Room; onOpen: (i: number) => void }) {
	const [slide, setSlide] = useState(0);
	const n = room.photos.length;
	const save = room.oldPrice - room.price;
	const pct = Math.round((save / room.oldPrice) * 100);
	const msg = `Assalam o Alaikum! I would like to book the ${room.name} (Room ${room.number}) at the opening offer of ${formatPKR(room.price)}/night. Please share availability.`;

	return (
		<article className={`room-card ${room.highlight ? "room-card--highlight" : ""}`}>
			<div className="room-card__media">
				{room.photos.map((id, i) => (
					<img
						key={id}
						src={photoSrc(id, "sm")}
						alt={PHOTOS[id].alt}
						className={i === slide ? "is-active" : ""}
						loading="lazy"
						decoding="async"
					/>
				))}
				<button className="room-card__open" onClick={() => onOpen(slide)} aria-label={`View ${room.name} photos`}>
					<CameraIcon size={16} /> {n} photos
				</button>
				<span className="room-card__ribbon">Save {pct}%</span>
				{room.highlight && <span className="room-card__highlight">{room.highlight}</span>}
				<button
					className="room-card__arrow room-card__arrow--prev"
					aria-label="Previous photo"
					onClick={() => setSlide((slide - 1 + n) % n)}
				>
					<ChevronLeftIcon size={20} />
				</button>
				<button className="room-card__arrow room-card__arrow--next" aria-label="Next photo" onClick={() => setSlide((slide + 1) % n)}>
					<ChevronRightIcon size={20} />
				</button>
				<div className="room-card__dots">
					{room.photos.map((id, i) => (
						<span key={id} className={i === slide ? "is-active" : ""} />
					))}
				</div>
			</div>

			<div className="room-card__body">
				<div className="room-card__meta">
					<span>Room {room.number}</span>
					<span>{room.size}</span>
				</div>
				<h3 className="room-card__title">{room.name}</h3>
				<p className="room-card__blurb">{room.blurb}</p>
				<div className="room-card__specs">
					<span>
						<UsersIcon size={17} /> Up to {room.guests} guests
					</span>
					<span>
						<BedIcon size={17} /> {room.beds}
					</span>
				</div>
				<ul className="room-card__features">
					{room.features.map((f) => (
						<li key={f}>
							<CheckIcon size={14} /> {f}
						</li>
					))}
				</ul>

				<div className="room-card__price">
					<div>
						<span className="room-card__was">{formatPKR(room.oldPrice)}</span>
						<span className="room-card__now">
							{formatPKR(room.price)}
							<small>/night</small>
						</span>
					</div>
					<span className="room-card__save">You save {formatPKR(save)}</span>
				</div>

				<div className="room-card__actions">
					<a className="btn btn--whatsapp" href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer">
						<WhatsAppIcon size={19} /> Book on WhatsApp
					</a>
					<a className="btn btn--ghost" href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer">
						Booking.com <ExternalIcon size={16} />
					</a>
				</div>
			</div>
		</article>
	);
}

export default function Rooms() {
	const [viewer, setViewer] = useState<{ room: Room; index: number } | null>(null);

	return (
		<section className="section rooms" id="rooms">
			<div className="container">
				<Reveal className="section-head">
					<span className="eyebrow">Rooms &amp; Rates</span>
					<h2 className="section-title">
						Deluxe rooms at <span className="text-gold">opening prices</span>
					</h2>
					<p className="section-lead">
						Three beautifully furnished room types — every one with an attached bathroom, fresh linen and free Wi-Fi. All prices are per
						night.
					</p>
				</Reveal>

				<div className="rooms__grid">
					{ROOMS.map((room, i) => (
						<Reveal key={room.slug} delay={i * 110}>
							<RoomCard room={room} onOpen={(index) => setViewer({ room, index })} />
						</Reveal>
					))}
				</div>
			</div>

			{viewer && (
				<Lightbox
					ids={viewer.room.photos}
					index={viewer.index}
					title={`${viewer.room.name} · Room ${viewer.room.number}`}
					onIndex={(index) => setViewer({ ...viewer, index })}
					onClose={() => setViewer(null)}
				/>
			)}
		</section>
	);
}
