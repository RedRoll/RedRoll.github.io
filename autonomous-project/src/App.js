import Wrapper from "./components/UI/wrapper/Wrapper";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import IntroductionSection from "./components/introductionSection/IntroductionSection";

function App() {
  return (
    <div className='app'>
      <Wrapper>
        <Header />
        <HeroSection />
        <IntroductionSection />
      </Wrapper>
    </div>
  );
}

export default App;
