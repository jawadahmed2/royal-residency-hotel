import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: IconProps & { children: React.ReactNode }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.8}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...rest}
		>
			{children}
		</svg>
	);
}

export const WhatsAppIcon = ({ size = 24, ...rest }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...rest}>
		<path d="M16.003 3C8.832 3 3.01 8.82 3.01 15.99c0 2.293.6 4.533 1.74 6.51L3 29l6.68-1.72a12.95 12.95 0 0 0 6.32 1.62h.005C23.174 28.9 29 23.08 29 15.91 29 12.46 27.66 9.2 25.21 6.76A12.9 12.9 0 0 0 16.003 3Zm0 23.7h-.004a10.76 10.76 0 0 1-5.48-1.5l-.393-.233-3.965 1.02 1.058-3.865-.256-.397a10.7 10.7 0 0 1-1.65-5.735c0-5.93 4.83-10.76 10.77-10.76 2.873 0 5.574 1.12 7.605 3.153a10.68 10.68 0 0 1 3.15 7.61c-.003 5.93-4.833 10.707-10.835 10.707Zm5.906-8.055c-.324-.162-1.917-.946-2.214-1.054-.297-.108-.513-.162-.729.162-.216.324-.837 1.054-1.026 1.27-.189.216-.378.243-.702.081-.324-.162-1.368-.504-2.606-1.608-.963-.859-1.613-1.92-1.802-2.244-.189-.324-.02-.499.142-.66.146-.145.324-.378.486-.567.162-.189.216-.324.324-.54.108-.216.054-.405-.027-.567-.081-.162-.729-1.757-.999-2.405-.263-.632-.53-.546-.729-.556l-.621-.011a1.19 1.19 0 0 0-.864.405c-.297.324-1.134 1.108-1.134 2.702 0 1.594 1.161 3.134 1.323 3.35.162.216 2.285 3.49 5.536 4.894.774.334 1.378.534 1.849.683.777.247 1.484.212 2.043.129.623-.093 1.917-.784 2.187-1.54.27-.757.27-1.405.189-1.54-.081-.135-.297-.216-.621-.378Z" />
	</svg>
);

export const PhoneIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
	</Base>
);

export const MailIcon = (p: IconProps) => (
	<Base {...p}>
		<rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
		<path d="m3 6.5 9 6.5 9-6.5" />
	</Base>
);

export const MapPinIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
		<circle cx="12" cy="10" r="3" />
	</Base>
);

export const BedIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
		<path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
		<path d="M12 4v6" />
		<path d="M2 17h20" />
	</Base>
);

export const UsersIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
		<circle cx="9" cy="7" r="4" />
		<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
		<path d="M16 3.13a4 4 0 0 1 0 7.75" />
	</Base>
);

export const SofaIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
		<path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
		<path d="M4 18v2M20 18v2" />
	</Base>
);

export const ShieldIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
		<path d="m9 12 2 2 4-4" />
	</Base>
);

export const WifiIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M5 12.55a11 11 0 0 1 14 0" />
		<path d="M1.42 9a16 16 0 0 1 21.16 0" />
		<path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
		<path d="M12 20h.01" />
	</Base>
);

export const CarIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0 0 13.7 5.5H8.4a2 2 0 0 0-1.7 1L4.5 10.1 2.8 10.6A1.5 1.5 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
		<circle cx="7" cy="17" r="2" />
		<circle cx="17" cy="17" r="2" />
		<path d="M9 17h6" />
	</Base>
);

export const TvIcon = (p: IconProps) => (
	<Base {...p}>
		<rect x="2" y="7" width="20" height="13" rx="2" />
		<path d="m17 2-5 5-5-5" />
	</Base>
);

export const SnowIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9" />
	</Base>
);

export const UtensilsIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
		<path d="M7 2v20" />
		<path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
	</Base>
);

export const ShirtIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z" />
	</Base>
);

export const KeyIcon = (p: IconProps) => (
	<Base {...p}>
		<circle cx="7.5" cy="15.5" r="5.5" />
		<path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3" />
	</Base>
);

export const CheckIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M20 6 9 17l-5-5" />
	</Base>
);

export const ArrowRightIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M5 12h14M12 5l7 7-7 7" />
	</Base>
);

export const ExternalIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
	</Base>
);

export const CloseIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M18 6 6 18M6 6l12 12" />
	</Base>
);

export const ChevronLeftIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="m15 18-6-6 6-6" />
	</Base>
);

export const ChevronRightIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="m9 18 6-6-6-6" />
	</Base>
);

export const ChevronDownIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="m6 9 6 6 6-6" />
	</Base>
);

export const MenuIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M4 7h16M4 12h16M4 17h10" />
	</Base>
);

export const CameraIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
		<circle cx="12" cy="13" r="3" />
	</Base>
);

export const SparkleIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9Z" />
		<path d="M19 3v4M17 5h4M5 17v4M3 19h4" />
	</Base>
);

export const TagIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4Z" />
		<circle cx="7.5" cy="7.5" r="1.5" />
	</Base>
);

export const CalendarIcon = (p: IconProps) => (
	<Base {...p}>
		<rect x="3" y="4" width="18" height="18" rx="2" />
		<path d="M16 2v4M8 2v4M3 10h18" />
	</Base>
);

export const NavigationIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="m3 11 19-9-9 19-2-8-8-2Z" />
	</Base>
);

export const CrownIcon = (p: IconProps) => (
	<Base {...p}>
		<path d="m2 6 4.5 5L12 4l5.5 7L22 6l-2 13H4L2 6Z" />
		<path d="M4 19h16" />
	</Base>
);
