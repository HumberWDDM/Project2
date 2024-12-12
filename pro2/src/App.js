import './Style.css';
import Feature, {GridFeature} from './components/Features'
import Reservation from './components/Reservation'

function App() {
  return (
    <div className="App">
      <Feature/>
      <div class="features__grid">
        <GridFeature type="first"/>
        <GridFeature type="second"/>
        <GridFeature type="third"/>
      </div>
      <Reservation/>
    </div>
  );
}

export default App;
