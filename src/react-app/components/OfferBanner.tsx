import { ROOMS, formatPKR, whatsappLink } from "../data";
import { SparkleIcon, TagIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function OfferBanner() {
	return (
		<section className="offer" id="offer" aria-labelledby="offer-title">
			<div className="container">
				<Reveal className="offer__card">
					<div className="offer__glow" aria-hidden="true" />
					<div className="offer__copy">
						<span className="offer__tag">
							<SparkleIcon size={16} /> New Opening · Limited Time
						</span>
						<h2 id="offer-title" className="offer__title">
							Grand Opening <span className="script">Discount</span>
						</h2>
						<p className="offer__lead">
							Celebrate our opening with <strong>flat PKR 1,000 off every night</strong> on all deluxe rooms. Message us on WhatsApp to lock
							in the discounted rate before it ends.
						</p>
						<a
							className="btn btn--whatsapp btn--lg"
							href={whatsappLink("Assalam o Alaikum! I would like to avail the Grand Opening discount. Which rooms are available?")}
							target="_blank"
							rel="noopener noreferrer"
						>
							<WhatsAppIcon size={22} /> Claim the Offer
						</a>
					</div>

					<ul className="offer__prices">
						{ROOMS.map((r) => (
							<li key={r.slug}>
								<span className="offer__room">
									<TagIcon size={18} />
									<span>
										{r.name}
										<small>Up to {r.guests} guests</small>
									</span>
								</span>
								<span className="offer__amounts">
									<s>{formatPKR(r.oldPrice)}</s>
									<strong>{formatPKR(r.price)}</strong>
									<small>per night</small>
								</span>
							</li>
						))}
					</ul>
				</Reveal>
			</div>
		</section>
	);
}
