import { CONTACT, whatsappLink } from "../data";
import { MapPinIcon, NavigationIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

const q = encodeURIComponent(CONTACT.mapQuery);

export default function Location() {
	return (
		<section className="section location" id="location">
			<div className="container location__grid">
				<Reveal className="location__info">
					<span className="eyebrow">Location</span>
					<h2 className="section-title">
						In the heart of <span className="text-gold">G-9/1, Islamabad</span>
					</h2>
					<p className="section-lead">
						A quiet, residential street in one of Islamabad’s most central sectors — close to markets, main avenues and easy routes across
						the twin cities.
					</p>
					<div className="address-card">
						<span className="address-card__icon">
							<MapPinIcon size={24} />
						</span>
						<div>
							<strong>{CONTACT.name}</strong>
							<p>
								{CONTACT.addressLine1}
								<br />
								{CONTACT.addressLine2}
							</p>
						</div>
					</div>
					<div className="location__actions">
						<a
							className="btn btn--navy"
							href={`https://www.google.com/maps/search/?api=1&query=${q}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<NavigationIcon size={18} /> Get Directions
						</a>
						<a
							className="btn btn--whatsapp"
							href={whatsappLink("Assalam o Alaikum! Could you please share the exact location pin of the residency?")}
							target="_blank"
							rel="noopener noreferrer"
						>
							<WhatsAppIcon size={19} /> Ask for Location Pin
						</a>
					</div>
				</Reveal>
				<Reveal className="location__map" delay={120}>
					<div className="location__map-fallback" aria-hidden="true">
						<MapPinIcon size={40} />
						<span>
							{CONTACT.addressLine1}, {CONTACT.addressLine2}
						</span>
					</div>
					<iframe
						title="Map showing Royal Executive Residency, G-9/1 Islamabad"
						src={`https://www.google.com/maps?q=${q}&z=16&output=embed`}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						allowFullScreen
					/>
				</Reveal>
			</div>
		</section>
	);
}
