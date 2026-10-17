import { CONTACT, photoSrc } from "../data";
import { CheckIcon, CrownIcon, MapPinIcon } from "./Icons";
import Reveal from "./Reveal";

const POINTS = [
	"Family-friendly, safe & peaceful environment",
	"Elegant deluxe rooms with modern interiors",
	"Ideal for business trips, tourists & long stays",
	"Personal care from our host, " + CONTACT.person,
];

export default function About() {
	return (
		<section className="section about" id="about">
			<div className="container about__grid">
				<Reveal className="about__media">
					<figure className="about__img about__img--main">
						<img
							src={photoSrc("exterior-night", "lg")}
							alt="Royal Executive Residency main gate lit up at night"
							loading="lazy"
							decoding="async"
						/>
					</figure>
					<figure className="about__img about__img--small">
						<img
							src={photoSrc("exterior-day", "sm")}
							alt="The guest house courtyard and entrance during the day"
							loading="lazy"
							decoding="async"
						/>
					</figure>
					<div className="about__badge">
						<CrownIcon size={22} />
						<span>
							<strong>House 596</strong>
							G-9/1 Islamabad
						</span>
					</div>
				</Reveal>

				<Reveal className="about__copy" delay={120}>
					<span className="eyebrow">Welcome to Royal Executive Residency</span>
					<h2 className="section-title">
						A home of comfort, care <span className="text-gold">&amp; class</span>
					</h2>
					<p className="section-lead">
						Tucked away on Khurram Road in the green, central sector of G-9/1, our guest house brings together the warmth of a family home
						and the polish of a boutique hotel. Whether you are visiting Islamabad with your family, travelling for work, or looking for a
						reliable place for a long stay — you will feel right at home with us.
					</p>
					<ul className="checklist">
						{POINTS.map((p) => (
							<li key={p}>
								<span className="checklist__icon">
									<CheckIcon size={16} />
								</span>
								{p}
							</li>
						))}
					</ul>
					<div className="about__stats">
						<div>
							<strong>3</strong>
							<span>Deluxe room types</span>
						</div>
						<div>
							<strong>24/7</strong>
							<span>Security &amp; support</span>
						</div>
						<div>
							<strong>4</strong>
							<span>Guests per family room</span>
						</div>
					</div>
					<p className="about__address">
						<MapPinIcon size={18} /> {CONTACT.addressLine1}, {CONTACT.addressLine2}
					</p>
				</Reveal>
			</div>
		</section>
	);
}
