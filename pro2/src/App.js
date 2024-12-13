import React from "react"
import Feature from "./components/Features"
import Footer from "./components/Footer"
import IframeSection from "./components/IframeVideo"
import Newsletter from "./components/NewsLetter"
import VideoSection from "./components/VideoSection"
import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Banner from "./components/Banner";
import About from './components/About';
import './Styles.css';
// import Feature, {GridFeature} from './components/Features'
// import Reservation from './components/Reservation'


function App() {
  return (
    <div className="App">
      <Header />
      <Banner 
        heading="RESERVE YOUR TABLE TODAY"
        subheading="Delicious meals await you!"
        fontStyle="Cinzel" // Passing the font style through props
      />
      <About />
      <Feature/>
      <VideoSection />
      <Newsletter />
      <IframeSection />
      <Footer />
    </div>
  );
}

export default App