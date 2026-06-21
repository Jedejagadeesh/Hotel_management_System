import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import RoomList from "../../components/RoomList/RoomList";
import Services from "../../components/Services/Services";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
import "../Home/Home.css"
function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar />

      <RoomList />

      <Services />

      <WhyChooseUs />

      <Testimonials />

      <Footer />
    </>
  );
}

export default Home;