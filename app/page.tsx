import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";
import Banner from "@/components/sections/Banner";
import App from "@/components/sections/Gallary";
import Links from "@/components/sections/Links";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <App />
      <Links />
      <Services />
      
      <Footer />
    </>
  );
}
