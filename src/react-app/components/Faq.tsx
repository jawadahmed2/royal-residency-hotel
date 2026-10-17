import { useState } from "react";
import { CONTACT, MONTHLY, formatPKR } from "../data";
import { ChevronDownIcon } from "./Icons";
import Reveal from "./Reveal";

const FAQS = [
	{
		q: "How do I book a room?",
		a: `The quickest way is WhatsApp — tap the green button or send a message to ${CONTACT.phoneDisplay}. You can also call us directly or reserve through our Booking.com page.`,
	},
	{
		q: "What are the room rates?",
		a: "During our Grand Opening, the Deluxe Double is PKR 3,500 (was 4,500), the Deluxe Triple is PKR 4,000 (was 5,000) and the Deluxe Family Room is PKR 5,000 (was 6,000) — all per night.",
	},
	{
		q: "Do you offer monthly or hostel stays?",
		a: `Yes. Our monthly plan is ${formatPKR(MONTHLY.price)} per month and includes breakfast, dinner, free Wi-Fi and laundry. A security deposit of ${formatPKR(MONTHLY.depositMin)} – ${formatPKR(MONTHLY.depositMax)} applies.`,
	},
	{
		q: "Is the guest house suitable for families?",
		a: "Absolutely. We are a family-friendly guest house with secure gated premises, 24/7 support and spacious family rooms that sleep up to four guests.",
	},
	{
		q: "Is parking and Wi-Fi available?",
		a: "Yes — free Wi-Fi is available throughout the residency and a parking facility is available for guests.",
	},
	{
		q: "Where exactly are you located?",
		a: `${CONTACT.addressLine1}, ${CONTACT.addressLine2}. Message us on WhatsApp and we will share the live location pin.`,
	},
];

export default function Faq() {
	const [open, setOpen] = useState(0);
	return (
		<section className="section faq" id="faq">
			<div className="container faq__wrap">
				<Reveal className="section-head">
					<span className="eyebrow">Good to know</span>
					<h2 className="section-title">
						Frequently asked <span className="text-gold">questions</span>
					</h2>
				</Reveal>
				<div className="faq__list">
					{FAQS.map((f, i) => {
						const isOpen = open === i;
						return (
							<Reveal key={f.q} delay={i * 50}>
								<div className={`faq__item ${isOpen ? "is-open" : ""}`}>
									<button className="faq__q" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
										{f.q}
										<ChevronDownIcon size={20} />
									</button>
									<div id={`faq-${i}`} className="faq__a" role="region">
										<div>
											<p>{f.a}</p>
										</div>
									</div>
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
