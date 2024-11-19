import HeroSection from "@/app/components/HeroSection";
import Navbar from "./components/Navbar"
import About from "./components/about";
import Imageslider from "./components/Imageslider";
import Courses from "./components/Courses";
import AdvancedCourses from "./components/Advanced Courses";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <About />

      <div className="mb-8 flex items-center justify-center">
        <Imageslider />
      </div>

      <Courses />

      <AdvancedCourses />

      <Footer/>

    </div>
  );
}
