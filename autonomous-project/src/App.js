import Wrapper from "./components/UI/wrapper/Wrapper";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import IntroductionSection from "./components/introductionSection/IntroductionSection";
// import CardSection from "./components/cardSection/CardSection";
import CardnTechnologies from "./components/card&technologies/Card&Technologies";

function App() {
  return (
    <div className='app'>
      <Wrapper>
        <Header />
        <HeroSection />
        <IntroductionSection />
        {/* <CardSection /> */}
        <CardnTechnologies />
      </Wrapper>
    </div>
  );
}

export default App;
