import Wrapper from "./components/UI/wrapper/Wrapper";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import IntroductionSection from "./components/introductionSection/IntroductionSection";
import CardSection from "./components/cardSection/CardSection";

function App() {
  return (
    <div className='app'>
      <Wrapper>
        <Header />
        <HeroSection />
        <IntroductionSection />
        <CardSection />
      </Wrapper>
    </div>
  );
}

export default App;
