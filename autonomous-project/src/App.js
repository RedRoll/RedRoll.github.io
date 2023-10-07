import Wrapper from "./components/UI/wrapper/Wrapper";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";

function App() {
  return (
    <div className='app'>
      <Wrapper>
        <Header />
        <HeroSection />
      </Wrapper>
    </div>
  );
}

export default App;
