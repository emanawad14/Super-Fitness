import AboutSection from "./App/About";
import Home from "./App/Home";
import WhyUsSection from "./App/WhyUs";
import MarqueeCarousel from "./shared/Slider";

export default function App() {
  return (
    <div>
       <Home/>
        <AboutSection/>
           <WhyUsSection></WhyUsSection>
           <MarqueeCarousel></MarqueeCarousel>
    </div>
  )
}
