import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";
import Banner from "@/components/sections/Banner";
import App from "@/components/sections/Gallary";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <App />
      <div style={{ height: 1000 }}></div>
    </>
  );
}
