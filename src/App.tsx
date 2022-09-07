import { PlacesProvider } from './context/places/PlacesProvider';
import { HomeScreen } from './screens';
import './index.css';
import { MapProvider } from './context/map/MapProvider';

function App() {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
}

export default App;
