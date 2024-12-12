import './Style.css';
import Feature, {GridFeature} from './components/Features'

function App() {
  return (
    <div className="App">
      <Feature/>
      <div class="features__grid">
        <GridFeature type="first"/>
        <GridFeature type="second"/>
        <GridFeature type="third"/></div>
    </div>
  );
}

export default App;
