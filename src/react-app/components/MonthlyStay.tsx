import { MONTHLY, formatPKR, photoSrc, whatsappLink } from "../data";
import { CalendarIcon, CheckIcon, KeyIcon, ShirtIcon, UtensilsIcon, WhatsAppIcon, WifiIcon } from "./Icons";
import Reveal from "./Reveal";

export default function MonthlyStay() {
	const msg = "Assalam o Alaikum! I am interested in the monthly hostel stay (PKR 30,000 with breakfast & dinner). Is a room available?";

	return (
		<section className="section monthly" id="monthly">
			<div className="container monthly__grid">
				<Reveal className="monthly__copy">
					<span className="eyebrow">Hostel · Monthly Stay</span>
					<h2 className="section-title">
						Live comfortably, <span className="text-gold">month after month</span>
					</h2>
					<p className="section-lead">
						Students, professionals and anyone relocating to Islamabad can enjoy a fully managed monthly stay — a furnished room, two
						home-style meals a day, Wi-Fi and laundry, all in one simple price.
					</p>
					<div className="monthly__perks">
						<div>
							<UtensilsIcon size={22} />
							<span>
								<strong>2 meals daily</strong>Breakfast &amp; dinner
							</span>
						</div>
						<div>
							<WifiIcon size={22} />
							<span>
								<strong>Free Wi-Fi</strong>Always connected
							</span>
						</div>
						<div>
							<ShirtIcon size={22} />
							<span>
								<strong>Laundry</strong>Included in rent
							</span>
						</div>
						<div>
							<CalendarIcon size={22} />
							<span>
								<strong>Monthly plan</strong>Simple billing
							</span>
						</div>
					</div>
					<figure className="monthly__photo">
						<img src={photoSrc("room-104-2", "sm")} alt="Comfortable sitting area in a residency room" loading="lazy" decoding="async" />
					</figure>
				</Reveal>

				<Reveal className="plan" delay={120}>
					<div className="plan__ribbon">All-inclusive</div>
					<p className="plan__name">Monthly Hostel Plan</p>
					<p className="plan__price">
						{formatPKR(MONTHLY.price)}
						<small>/month</small>
					</p>
					<p className="plan__note">Breakfast &amp; dinner included every day</p>
					<ul className="plan__list">
						{MONTHLY.includes.map((i) => (
							<li key={i}>
								<span>
									<CheckIcon size={14} />
								</span>
								{i}
							</li>
						))}
					</ul>
					<div className="plan__deposit">
						<KeyIcon size={20} />
						<span>
							Security deposit
							<strong>
								{formatPKR(MONTHLY.depositMin)} – {formatPKR(MONTHLY.depositMax)}
							</strong>
						</span>
					</div>
					<a className="btn btn--whatsapp btn--block btn--lg" href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer">
						<WhatsAppIcon size={22} /> Enquire on WhatsApp
					</a>
				</Reveal>
			</div>
		</section>
	);
}
