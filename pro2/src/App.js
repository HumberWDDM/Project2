import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from "./components/Banner";
import About from './components/About';
import './Style.css';
import Feature, {GridFeature} from './components/Features'
import Reservation from './components/Reservation'
import Newsletter from './components/Newsletter'


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
      <div class="features__grid">
        <GridFeature type="first"/>
        <GridFeature type="second"/>
        <GridFeature type="third"/>
      </div>
      <Reservation/>
      <Newsletter/>
    </div>
  );
}

export default App;
