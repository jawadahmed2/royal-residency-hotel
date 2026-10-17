import type { ComponentType } from "react";
import { BedIcon, CarIcon, ShieldIcon, SofaIcon, TvIcon, UsersIcon, WifiIcon, SnowIcon } from "./Icons";
import Reveal from "./Reveal";

type Item = { icon: ComponentType<{ size?: number }>; title: string; text: string };

const ITEMS: Item[] = [
	{ icon: BedIcon, title: "Clean & Spacious Rooms", text: "Freshly made beds, crisp white linen and rooms kept spotless for every guest." },
	{ icon: UsersIcon, title: "Family Friendly", text: "A respectful, peaceful environment that families trust for their stay." },
	{ icon: SofaIcon, title: "Modern Interiors", text: "Velvet upholstered beds, designer ceilings and elegant seating in every room." },
	{ icon: ShieldIcon, title: "24/7 Security & Support", text: "Secure gated premises and a host who is always just one call away." },
	{ icon: WifiIcon, title: "Free Wi-Fi & TV Lounge", text: "Stay connected with complimentary Wi-Fi and LED TVs for every room." },
	{ icon: CarIcon, title: "Parking Facility", text: "Convenient parking available for guests arriving by car." },
	{ icon: SnowIcon, title: "Air Conditioned", text: "Climate control in our triple and family rooms for year-round comfort." },
	{ icon: TvIcon, title: "Entertainment", text: "Wall-mounted LED TVs so you can unwind after a long day in the city." },
];

export default function Amenities() {
	return (
		<section className="section amenities" id="amenities">
			<div className="container">
				<Reveal className="section-head">
					<span className="eyebrow">Amenities</span>
					<h2 className="section-title">
						Everything you need, <span className="text-gold">thoughtfully provided</span>
					</h2>
					<p className="section-lead">The little things make a stay feel royal — here is what every guest enjoys.</p>
				</Reveal>
				<div className="amenities__grid">
					{ITEMS.map((it, i) => (
						<Reveal key={it.title} delay={(i % 4) * 80}>
							<div className="amenity">
								<span className="amenity__icon">
									<it.icon size={26} />
								</span>
								<h3>{it.title}</h3>
								<p>{it.text}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
