import { CONTACT, DEFAULT_WA_MESSAGE, media, whatsappLink } from "../data";
import { ExternalIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__cta">
				<div className="container footer__cta-inner">
					<div>
						<p className="script footer__script">Your Comfort, Our Priority</p>
						<h2>Ready for a royal stay in Islamabad?</h2>
					</div>
					<a className="btn btn--whatsapp btn--lg" href={whatsappLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer">
						<WhatsAppIcon size={22} /> WhatsApp {CONTACT.phoneDisplay}
					</a>
				</div>
			</div>

			<div className="container footer__grid">
				<div className="footer__brand">
					<span className="footer__badge">
						<img src={media("logo-emblem.png")} alt="" width={233} height={220} />
					</span>
					<p className="footer__name">
						Royal
						<span>Executive Residency</span>
					</p>
					<p className="footer__tag">{CONTACT.tagline}. A perfect place for families, business travellers and long stays.</p>
				</div>

				<div>
					<h3>Explore</h3>
					<ul className="footer__links">
						<li>
							<a href="#rooms">Rooms &amp; Rates</a>
						</li>
						<li>
							<a href="#monthly">Monthly Hostel Stay</a>
						</li>
						<li>
							<a href="#amenities">Amenities</a>
						</li>
						<li>
							<a href="#gallery">Gallery</a>
						</li>
						<li>
							<a href="#faq">FAQ</a>
						</li>
					</ul>
				</div>

				<div>
					<h3>Contact</h3>
					<ul className="footer__contact">
						<li>
							<WhatsAppIcon size={18} />
							<a href={whatsappLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer">
								{CONTACT.phoneDisplay} ({CONTACT.person})
							</a>
						</li>
						<li>
							<PhoneIcon size={18} />
							<a href={`tel:${CONTACT.phoneIntl}`}>{CONTACT.phoneDisplay}</a>
						</li>
						<li>
							<MailIcon size={18} />
							<a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
						</li>
						<li>
							<MapPinIcon size={18} />
							<span>
								{CONTACT.addressLine1}, {CONTACT.addressLine2}
							</span>
						</li>
					</ul>
				</div>

				<div>
					<h3>Book Online</h3>
					<p className="footer__small">Reserve instantly with your Booking.com account.</p>
					<a className="btn btn--gold btn--sm" href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer">
						Booking.com <ExternalIcon size={16} />
					</a>
				</div>
			</div>

			<div className="footer__bottom">
				<div className="container footer__bottom-inner">
					<span>
						© {new Date().getFullYear()} {CONTACT.name}, Islamabad. All rights reserved.
					</span>
					<span className="footer__crest">Royal · Executive · Residency</span>
				</div>
			</div>
		</footer>
	);
}
