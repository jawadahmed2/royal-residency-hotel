export const CONTACT = {
	name: "Royal Executive Residency",
	tagline: "Best Family Guest House in Islamabad",
	person: "Faisal",
	phoneDisplay: "0319 5418054",
	phoneIntl: "+923195418054",
	whatsapp: "923195418054",
	email: "malikfasil7770@gmail.com",
	bookingUrl: "https://www.booking.com/Share-4XYBpP",
	addressLine1: "House No. 596, Khurram Road",
	addressLine2: "G-9/1, Islamabad",
	mapQuery: "House 596 Khurram Road G-9/1 Islamabad",
};

export const media = (name: string) => `/media/${name}`;

export function whatsappLink(message?: string) {
	const base = `https://wa.me/${CONTACT.whatsapp}`;
	return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WA_MESSAGE =
	"Assalam o Alaikum! I found Royal Executive Residency online and would like to know about room availability.";

export type Photo = { id: string; alt: string; category: "exterior" | "rooms" | "bathrooms" };

export const PHOTOS: Record<string, Photo> = {
	"exterior-night": {
		id: "exterior-night",
		alt: "Illuminated main gate of Royal Executive Residency, House 596 G-9/1",
		category: "exterior",
	},
	"exterior-day": { id: "exterior-day", alt: "Entrance and tiled courtyard of the guest house in daylight", category: "exterior" },
	"exterior-street": { id: "exterior-street", alt: "Street view of the residency on Khurram Road, G-9/1", category: "exterior" },
	"room-101-1": { id: "room-101-1", alt: "Deluxe Family Room with one double and two single beds", category: "rooms" },
	"room-101-2": { id: "room-101-2", alt: "Deluxe Family Room with air conditioning and seating", category: "rooms" },
	"room-101-3": { id: "room-101-3", alt: "Attached bathroom of the Deluxe Family Room", category: "bathrooms" },
	"room-101-4": { id: "room-101-4", alt: "Spacious tiled bathroom with shower in the Family Room", category: "bathrooms" },
	"room-102-1": { id: "room-102-1", alt: "Deluxe Double Room with royal blue velvet bed and TV", category: "rooms" },
	"room-102-2": { id: "room-102-2", alt: "Deluxe Double Room with king bed and sitting area", category: "rooms" },
	"room-102-3": { id: "room-102-3", alt: "Built-in wooden wardrobe with dressing mirror in Room 102", category: "rooms" },
	"room-102-4": { id: "room-102-4", alt: "Attached bathroom of the Deluxe Double Room", category: "bathrooms" },
	"room-104-1": { id: "room-104-1", alt: "Deluxe Triple Room with gold velvet double and single beds", category: "rooms" },
	"room-104-2": { id: "room-104-2", alt: "Sitting area with carved chairs and TV in the Triple Room", category: "rooms" },
	"room-104-3": { id: "room-104-3", alt: "Full-length built-in wardrobe in the Deluxe Triple Room", category: "rooms" },
};

export const photoSrc = (id: string, size: "sm" | "lg" = "lg") => media(`${id}-${size}.webp`);

export type Room = {
	slug: string;
	number: string;
	name: string;
	guests: number;
	beds: string;
	size: string;
	price: number;
	oldPrice: number;
	blurb: string;
	features: string[];
	photos: string[];
	highlight?: string;
};

export const ROOMS: Room[] = [
	{
		slug: "deluxe-double",
		number: "102",
		name: "Deluxe Double Room",
		guests: 2,
		beds: "1 King-size double bed",
		size: "Ideal for couples",
		price: 3500,
		oldPrice: 4500,
		blurb: "A calm royal-blue retreat with a velvet king bed, private sitting area and a full built-in wardrobe.",
		features: ["King bed", "LED TV", "Sitting area", "Built-in wardrobe", "Attached bath", "Free Wi-Fi"],
		photos: ["room-102-1", "room-102-2", "room-102-3", "room-102-4"],
	},
	{
		slug: "deluxe-triple",
		number: "104",
		name: "Deluxe Triple Room",
		guests: 3,
		beds: "1 Double + 1 Single bed",
		size: "Small families & friends",
		price: 4000,
		oldPrice: 5000,
		blurb: "Warm gold velvet furnishings, an air-conditioned room with a lounge corner and a full-length wardrobe.",
		features: ["Air conditioned", "LED TV", "Lounge chairs", "Full-length wardrobe", "Attached bath", "Free Wi-Fi"],
		photos: ["room-104-1", "room-104-2", "room-104-3"],
	},
	{
		slug: "deluxe-family",
		number: "101",
		name: "Deluxe Family Room",
		guests: 4,
		beds: "1 Double + 2 Single beds",
		size: "Perfect for families",
		price: 5000,
		oldPrice: 6000,
		blurb: "Our largest room — three beds, a designer false ceiling, air conditioning and a spacious attached bathroom.",
		features: ["3 beds", "Air conditioned", "LED TV", "Sitting area", "Large attached bath", "Free Wi-Fi"],
		photos: ["room-101-1", "room-101-2", "room-101-3", "room-101-4"],
		highlight: "Largest Room",
	},
];

export const MONTHLY = {
	price: 30000,
	depositMin: 2000,
	depositMax: 5000,
	includes: ["Furnished room", "Breakfast every morning", "Dinner every night", "Free Wi-Fi", "Laundry service", "24/7 security & support"],
};

export const formatPKR = (n: number) => `PKR ${n.toLocaleString("en-PK")}`;
