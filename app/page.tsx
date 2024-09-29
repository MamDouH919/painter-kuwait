import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";
import Banner from "@/components/sections/Banner";
import App from "@/components/sections/Gallary";
import Links from "@/components/sections/Links";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <App />
      <Links />
    </>
  );
}
