import { useState, type FormEvent } from "react";
import { CONTACT, MONTHLY, ROOMS, formatPKR, whatsappLink } from "../data";
import { ArrowRightIcon, ExternalIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

const pad = (n: number) => String(n).padStart(2, "0");
const toISO = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const today = () => toISO(new Date());
const addDays = (iso: string, d: number) => {
	const t = new Date(iso + "T00:00:00");
	t.setDate(t.getDate() + d);
	return toISO(t);
};
const prettyDate = (iso: string) =>
	new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

const STAY_OPTIONS = [
	...ROOMS.map((r) => ({ value: r.slug, label: `${r.name} — ${formatPKR(r.price)}/night` })),
	{ value: "monthly", label: `Monthly Hostel Stay — ${formatPKR(MONTHLY.price)}/month` },
];

export default function Booking() {
	const [name, setName] = useState("");
	const [stay, setStay] = useState(ROOMS[0].slug);
	const [checkIn, setCheckIn] = useState(today());
	const [checkOut, setCheckOut] = useState(addDays(today(), 1));
	const [guests, setGuests] = useState("2");
	const [note, setNote] = useState("");

	const isMonthly = stay === "monthly";
	const room = ROOMS.find((r) => r.slug === stay);
	const nights = Math.max(0, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000));
	const estimate = room && nights > 0 ? room.price * nights : 0;

	const submit = (e: FormEvent) => {
		e.preventDefault();
		const lines = [
			"Assalam o Alaikum! I would like to make a booking at Royal Executive Residency.",
			"",
			`Name: ${name.trim()}`,
			`Stay: ${STAY_OPTIONS.find((o) => o.value === stay)?.label}`,
			isMonthly ? `Move-in date: ${prettyDate(checkIn)}` : `Check-in: ${prettyDate(checkIn)}`,
			...(isMonthly ? [] : [`Check-out: ${prettyDate(checkOut)} (${nights} night${nights === 1 ? "" : "s"})`]),
			`Guests: ${guests}`,
			...(estimate ? [`Estimated total: ${formatPKR(estimate)}`] : []),
			...(note.trim() ? ["", `Note: ${note.trim()}`] : []),
		];
		window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
	};

	return (
		<section className="section booking" id="booking">
			<div className="container">
				<Reveal className="section-head">
					<span className="eyebrow">Book Your Stay</span>
					<h2 className="section-title">
						Reserve in seconds on <span className="text-whatsapp">WhatsApp</span>
					</h2>
					<p className="section-lead">
						Fill in your details and we will open WhatsApp with your booking request ready to send — {CONTACT.person} replies personally and
						confirms availability.
					</p>
				</Reveal>

				<div className="booking__grid">
					<Reveal as="form" className="booking__form" onSubmit={submit}>
						<div className="field field--full">
							<label htmlFor="b-name">Your name</label>
							<input
								id="b-name"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="e.g. Ahmed Khan"
								autoComplete="name"
							/>
						</div>
						<div className="field field--full">
							<label htmlFor="b-stay">Room / stay type</label>
							<select id="b-stay" value={stay} onChange={(e) => setStay(e.target.value)}>
								{STAY_OPTIONS.map((o) => (
									<option key={o.value} value={o.value}>
										{o.label}
									</option>
								))}
							</select>
						</div>
						<div className="field">
							<label htmlFor="b-in">{isMonthly ? "Move-in date" : "Check-in"}</label>
							<input
								id="b-in"
								type="date"
								required
								min={today()}
								value={checkIn}
								onChange={(e) => {
									setCheckIn(e.target.value);
									if (e.target.value >= checkOut) setCheckOut(addDays(e.target.value, 1));
								}}
							/>
						</div>
						{!isMonthly && (
							<div className="field">
								<label htmlFor="b-out">Check-out</label>
								<input
									id="b-out"
									type="date"
									required
									min={addDays(checkIn, 1)}
									value={checkOut}
									onChange={(e) => setCheckOut(e.target.value)}
								/>
							</div>
						)}
						<div className="field">
							<label htmlFor="b-guests">Guests</label>
							<select id="b-guests" value={guests} onChange={(e) => setGuests(e.target.value)}>
								{["1", "2", "3", "4", "5+"].map((g) => (
									<option key={g}>{g}</option>
								))}
							</select>
						</div>
						<div className="field field--full">
							<label htmlFor="b-note">Special request (optional)</label>
							<textarea
								id="b-note"
								rows={3}
								value={note}
								onChange={(e) => setNote(e.target.value)}
								placeholder="Arrival time, extra bedding, family details…"
							/>
						</div>

						<div className="booking__summary field--full">
							{isMonthly ? (
								<span>
									<strong>{formatPKR(MONTHLY.price)}</strong> / month · meals, Wi-Fi &amp; laundry included
								</span>
							) : estimate ? (
								<span>
									{nights} night{nights === 1 ? "" : "s"} × {formatPKR(room!.price)} = <strong>{formatPKR(estimate)}</strong>
									<em>You save {formatPKR((room!.oldPrice - room!.price) * nights)}</em>
								</span>
							) : (
								<span>Select your dates to see the estimated total</span>
							)}
						</div>

						<button type="submit" className="btn btn--whatsapp btn--lg btn--block field--full">
							<WhatsAppIcon size={22} /> Send Booking Request on WhatsApp
						</button>
						<p className="booking__fine field--full">No payment is taken online. Your request opens in WhatsApp — just press send.</p>
					</Reveal>

					<Reveal className="booking__side" delay={120}>
						<a
							className="contact-card contact-card--whatsapp"
							href={whatsappLink("Assalam o Alaikum! I have a question about Royal Executive Residency.")}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="contact-card__icon">
								<WhatsAppIcon size={28} />
							</span>
							<span>
								<small>Fastest response · WhatsApp</small>
								<strong>{CONTACT.phoneDisplay}</strong>
								<em>Chat with {CONTACT.person}</em>
							</span>
							<ArrowRightIcon className="contact-card__arrow" />
						</a>

						<a className="contact-card" href={`tel:${CONTACT.phoneIntl}`}>
							<span className="contact-card__icon">
								<PhoneIcon size={24} />
							</span>
							<span>
								<small>Call us directly</small>
								<strong>{CONTACT.phoneDisplay}</strong>
								<em>Available 24/7</em>
							</span>
							<ArrowRightIcon className="contact-card__arrow" />
						</a>

						<a
							className="contact-card"
							href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Booking enquiry — Royal Executive Residency")}`}
						>
							<span className="contact-card__icon">
								<MailIcon size={24} />
							</span>
							<span>
								<small>Email</small>
								<strong className="contact-card__email">{CONTACT.email}</strong>
								<em>We reply as soon as possible</em>
							</span>
							<ArrowRightIcon className="contact-card__arrow" />
						</a>

						<div className="booking-com">
							<p className="booking-com__label">Prefer booking online?</p>
							<p className="booking-com__brand">
								Booking<span>.com</span>
							</p>
							<p className="booking-com__text">Find us on Booking.com and reserve with your account.</p>
							<a className="btn btn--navy btn--block" href={CONTACT.bookingUrl} target="_blank" rel="noopener noreferrer">
								Reserve on Booking.com <ExternalIcon size={17} />
							</a>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
