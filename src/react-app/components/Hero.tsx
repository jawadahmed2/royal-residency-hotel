import { useEffect, useState } from "react";
import { CONTACT, DEFAULT_WA_MESSAGE, PHOTOS, photoSrc, whatsappLink } from "../data";
import { CrownIcon, ExternalIcon, ShieldIcon, CarIcon, WifiIcon, WhatsAppIcon, UtensilsIcon } from "./Icons";

const SLIDES = ["room-104-1", "exterior-night", "room-101-1", "room-102-2", "exterior-day"];

export default function Hero() {
	const [active, setActive] = useState(0);

	useEffect(() => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduce) return;
		const t = window.setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 5200);
		return () => window.clearInterval(t);
	}, []);

	return (
		<section id="home" className="hero">
			<div className="hero__bg" aria-hidden="true">
				<span className="hero__orb hero__orb--a" />
				<span className="hero__orb hero__orb--b" />
			</div>
			<div className="container hero__grid">
				<div className="hero__copy">
					<span className="pill pill--gold hero__pill">
						<span className="pill__pulse" /> New Opening · Limited-time rates
					</span>
					<p className="script hero__script">Your Comfort, Our Priority</p>
					<h1 className="hero__title">
						The Royal Way to
						<br />
						Stay in <span className="text-gold">Islamabad</span>
					</h1>
					<p className="hero__lead">
						A perfect place for families, business travellers and long stays — elegant deluxe rooms, a family-friendly home and
						round-the-clock care in the heart of <strong>G-9/1, Islamabad</strong>.
					</p>

					<div className="hero__price">
						<div>
							<span className="hero__price-label">Rooms from</span>
							<span className="hero__price-old">PKR 4,500</span>
						</div>
						<div className="hero__price-now">
							PKR 3,500<small>/night</small>
						</div>
						<span className="hero__price-save">Save PKR 1,000</span>
					</div>

					<div className="hero__ctas">
						<a className="btn btn--whatsapp btn--lg" href={whatsappLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer">
							<WhatsAppIcon size={22} /> Book on WhatsApp
						</a>
						<a className="btn btn--navy btn--lg" href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer">
							Booking.com <ExternalIcon size={18} />
						</a>
					</div>

					<ul className="hero__trust">
						<li>
							<ShieldIcon size={18} /> 24/7 Security
						</li>
						<li>
							<WifiIcon size={18} /> Free Wi-Fi
						</li>
						<li>
							<CarIcon size={18} /> Parking Available
						</li>
						<li>
							<UtensilsIcon size={18} /> Meals on monthly stay
						</li>
					</ul>
				</div>

				<div className="hero__visual">
					<div className="hero__arch">
						{SLIDES.map((id, i) => (
							<img
								key={id}
								src={photoSrc(id, "lg")}
								srcSet={`${photoSrc(id, "sm")} 900w, ${photoSrc(id, "lg")} 1920w`}
								sizes="(max-width: 1024px) 92vw, 46vw"
								alt={i === active ? PHOTOS[id].alt : ""}
								className={`hero__slide ${i === active ? "is-active" : ""}`}
								fetchPriority={i === 0 ? "high" : "auto"}
								decoding="async"
							/>
						))}
						<div className="hero__dots" role="tablist" aria-label="Hero photos">
							{SLIDES.map((id, i) => (
								<button
									key={id}
									role="tab"
									aria-selected={i === active}
									aria-label={`Show photo ${i + 1}`}
									className={i === active ? "is-active" : ""}
									onClick={() => setActive(i)}
								/>
							))}
						</div>
					</div>
					<div className="hero__seal" aria-hidden="true">
						<span>Grand</span>
						<strong>Opening</strong>
						<span>Offer</span>
					</div>
					<div className="hero__card">
						<span className="hero__card-icon" aria-hidden="true">
							<CrownIcon size={20} />
						</span>
						<p className="hero__card-title">Best Family Guest House</p>
						<p className="hero__card-sub">House 596 · Khurram Road · G-9/1</p>
					</div>
				</div>
			</div>
		</section>
	);
}
