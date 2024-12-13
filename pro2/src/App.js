import React from "react"
import Feature from "./components/Features"
import Footer from "../src/components/Footer"
import IframeSection from "../src/components/IframeVideo"
import Newsletter from "../src/components/NewsLetter"
import VideoSection from "../src/components/VideoSection"
import "./App.css"

function App() {
  return (
    <div>
      <Feature/>
      {/* <div class="features__grid">
        <GridFeature type={0}/>
        <GridFeature type={1}/>
        <GridFeature type={3}/>
      </div> */}

      <VideoSection />
      <Newsletter />
      <IframeSection />
      <Footer />
    </div>
  );
}

export default App