import { useEffect, useState } from "react";
import { CONTACT, DEFAULT_WA_MESSAGE, media, whatsappLink } from "../data";
import { CloseIcon, MenuIcon, PhoneIcon, SparkleIcon, WhatsAppIcon } from "./Icons";

const LINKS = [
	{ href: "#home", label: "Home" },
	{ href: "#rooms", label: "Rooms" },
	{ href: "#monthly", label: "Monthly Stay" },
	{ href: "#amenities", label: "Amenities" },
	{ href: "#gallery", label: "Gallery" },
	{ href: "#location", label: "Location" },
	{ href: "#booking", label: "Contact" },
];

export function Logo({ compact = false }: { compact?: boolean }) {
	return (
		<a href="#home" className={`logo ${compact ? "logo--compact" : ""}`} aria-label={`${CONTACT.name} — home`}>
			<img src={media("logo-emblem.png")} alt="" width={233} height={220} className="logo__mark" />
			<span className="logo__text">
				<span className="logo__royal">Royal</span>
				<span className="logo__sub">Executive Residency</span>
			</span>
		</a>
	);
}

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		if (!open) return;
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	return (
		<>
			<div className="offer-bar" role="note">
				<div className="offer-bar__track">
					{[0, 1].map((k) => (
						<span key={k} className="offer-bar__item" aria-hidden={k === 1}>
							<SparkleIcon size={15} /> Grand Opening Offer — save up to PKR 1,000 every night
							<span className="offer-bar__dot">◆</span> Rooms from <strong>PKR 3,500</strong>
							<span className="offer-bar__dot">◆</span> Monthly stay with meals <strong>PKR 30,000</strong>
							<span className="offer-bar__dot">◆</span> WhatsApp {CONTACT.phoneDisplay}
							<span className="offer-bar__dot">◆</span>
						</span>
					))}
				</div>
			</div>

			<header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
				<div className="container nav__inner">
					<Logo />
					<nav className="nav__links" aria-label="Main">
						{LINKS.map((l) => (
							<a key={l.href} href={l.href}>
								{l.label}
							</a>
						))}
					</nav>
					<div className="nav__actions">
						<a className="nav__phone" href={`tel:${CONTACT.phoneIntl}`}>
							<PhoneIcon size={17} />
							<span>{CONTACT.phoneDisplay}</span>
						</a>
						<a className="btn btn--gold btn--sm" href="#booking">
							Book Now
						</a>
						<button className="nav__burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
							<MenuIcon />
						</button>
					</div>
				</div>
			</header>

			<div className={`drawer ${open ? "drawer--open" : ""}`} aria-hidden={!open}>
				<div className="drawer__backdrop" onClick={() => setOpen(false)} />
				<aside className="drawer__panel" aria-label="Mobile menu">
					<div className="drawer__head">
						<Logo compact />
						<button className="icon-btn" aria-label="Close menu" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
							<CloseIcon />
						</button>
					</div>
					<nav className="drawer__links">
						{LINKS.map((l) => (
							<a key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
								{l.label}
							</a>
						))}
					</nav>
					<div className="drawer__cta">
						<a
							className="btn btn--whatsapp btn--block"
							href={whatsappLink(DEFAULT_WA_MESSAGE)}
							target="_blank"
							rel="noopener noreferrer"
							tabIndex={open ? 0 : -1}
						>
							<WhatsAppIcon size={20} /> Chat on WhatsApp
						</a>
						<a className="btn btn--outline btn--block" href={`tel:${CONTACT.phoneIntl}`} tabIndex={open ? 0 : -1}>
							<PhoneIcon size={18} /> Call {CONTACT.person}
						</a>
					</div>
				</aside>
			</div>
		</>
	);
}
