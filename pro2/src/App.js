import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from "./components/Banner";
import About from './components/About';




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
    </div>
  );
}

export default App;
