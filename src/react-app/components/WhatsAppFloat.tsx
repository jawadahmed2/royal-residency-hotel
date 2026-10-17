import { useEffect, useState } from "react";
import { CONTACT, DEFAULT_WA_MESSAGE, whatsappLink } from "../data";
import { CloseIcon, WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
	const [bubble, setBubble] = useState(false);

	useEffect(() => {
		const show = window.setTimeout(() => setBubble(true), 3500);
		const hide = window.setTimeout(() => setBubble(false), 14000);
		return () => {
			window.clearTimeout(show);
			window.clearTimeout(hide);
		};
	}, []);

	return (
		<div className="wa-float">
			<div className={`wa-float__bubble ${bubble ? "is-visible" : ""}`} role="status">
				<button className="wa-float__bubble-close" aria-label="Dismiss" onClick={() => setBubble(false)}>
					<CloseIcon size={14} />
				</button>
				<strong>Need a room? Chat with {CONTACT.person}</strong>
				<span>WhatsApp {CONTACT.phoneDisplay} · tap to chat now</span>
			</div>
			<a
				className="wa-float__btn"
				href={whatsappLink(DEFAULT_WA_MESSAGE)}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`Chat on WhatsApp with ${CONTACT.person}, ${CONTACT.phoneDisplay}`}
				onMouseEnter={() => setBubble(true)}
			>
				<span className="wa-float__ring" aria-hidden="true" />
				<span className="wa-float__ring wa-float__ring--2" aria-hidden="true" />
				<WhatsAppIcon size={34} />
				<span className="wa-float__badge" aria-hidden="true">
					1
				</span>
			</a>
		</div>
	);
}
