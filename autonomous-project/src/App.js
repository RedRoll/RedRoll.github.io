
import Wrapper from "./components/UI/wrapper/Wrapper";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import IntroductionSection from "./components/introductionSection/IntroductionSection";
import CardnTechnologies from "./components/card&technologies/Card&Technologies";
import NumbersSection from "./components/numbersSection/NumbersSection";
import HydraForm from "./components/hydraForm/HydraFrom";

function App() {
  return (
    <div className="app">
      <Wrapper>
        <Header />
        <HeroSection />
        <IntroductionSection />
        <CardnTechnologies />
        <NumbersSection />
        <HydraForm />
      </Wrapper>
      
    </div>
  );
}

export default App;
