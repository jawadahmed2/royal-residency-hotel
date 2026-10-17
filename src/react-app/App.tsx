import About from "./components/About";
import Amenities from "./components/Amenities";
import Booking from "./components/Booking";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Location from "./components/Location";
import MonthlyStay from "./components/MonthlyStay";
import Navbar from "./components/Navbar";
import OfferBanner from "./components/OfferBanner";
import Rooms from "./components/Rooms";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
	return (
		<>
			<a className="skip-link" href="#rooms">
				Skip to rooms
			</a>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Rooms />
				<OfferBanner />
				<MonthlyStay />
				<Amenities />
				<Gallery />
				<Booking />
				<Location />
				<Faq />
			</main>
			<Footer />
			<WhatsAppFloat />
		</>
	);
}
