import './styles/style.scss'

import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Advent from "./components/advent/advent"
import Swiper from "./components/swiper/swiper"
import Cargo from "./components/cargo/cargo";
import Learn from "./components/learn/learn";
import Footer from "./components/footer/footer";





function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <Advent/>
            <Swiper/>
            <Cargo/>
            <Learn/>
            <Footer/>
        </>
    );
}

export default App;
