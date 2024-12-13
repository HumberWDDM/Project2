import React from "react"
import ReactDOM from "react-dom"
import Footer from "../src/components/Footer"
import IframeSection from "../src/components/IframeVideo"
import Newsletter from "../src/components/NewsLetter"
import VideoSection from "../src/components/VideoSection"
import "./App.css"

function App() {
  return (
    <div>
      <Feature/>
      <div class="features__grid">
        <GridFeature type="first"/>
        <GridFeature type="second"/>
        <GridFeature type="third"/>
      </div>
      {/* <Reservation/>
      <Newsletter/> */}
      <VideoSection />
      <Newsletter />
      <IframeSection />
      <Footer />
    </div>
  );
}

export default App