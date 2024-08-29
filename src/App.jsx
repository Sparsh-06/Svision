import { ReactLenis, useLenis } from "lenis/react";
import Navbar from "./pages/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Info from "./pages/Info";
import Team from "./pages/Team";
import SecureVisionSection from "./pages/Exp";
import FaceBuddySection from "./pages/FaceBuddy";
import CustomCursor from "./pages/Cursor";  // Import the custom cursor component
import "./App.css";
import TechnologySection from "./pages/Techno";
import ServicesSection from "./pages/Services";
import TestimonialsSection from "./pages/Test";
import ContactPage from "./pages/Contact";

function App() {

  useLenis(({ scroll }) => {
    // Handle scrolling if needed
  });

  return (
    <ReactLenis root>
      <div>
        <CustomCursor /> {/* Add the custom cursor to the entire website */}
        <Navbar />
        <Landing />
        <About />
        <FaceBuddySection/>
        <TechnologySection/>
        <ServicesSection/>
        <TestimonialsSection/>
        <Info />
        {/* <Team /> */}
        <SecureVisionSection/>
        <ContactPage/>
      </div>
    </ReactLenis>
  );
}

export default App;
