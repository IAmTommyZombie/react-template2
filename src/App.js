import Brands from "./components/Brands";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Laundromat from "./components/Laundromat";
import Navbar from "./components/Navbar";
import Search from "./components/Search";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Laundromat />
      <Search />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
