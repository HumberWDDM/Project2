import React from "react"
import Feature from "./components/Features"
import Footer from "./components/Footer"
import IframeSection from "./components/IframeVideo"
import Newsletter from "./components/NewsLetter"
import VideoSection from "./components/VideoSection"
import "./App.css"

function App() {
  return (
    <div>
      <Feature/>
      <VideoSection />
      <Newsletter />
      <IframeSection />
      <Footer />
    </div>
  );
}

export default App