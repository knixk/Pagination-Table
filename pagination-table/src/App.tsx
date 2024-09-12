import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import ArtworksTable from './components/ArtworksTable';
import 'primereact/resources/themes/saga-blue/theme.css';  // Choose the theme you like
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


function App() {

  return (
    <PrimeReactProvider>
      <ArtworksTable></ArtworksTable>
    </PrimeReactProvider>
  )
}

export default App
