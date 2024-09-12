import './App.css'
import ArtworksTable from './components/ArtworksTable';
import 'primereact/resources/themes/saga-blue/theme.css';  // Choose the theme you like
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { BrowserRouter as Router, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArtworksTable />} />
      </Routes>
    </Router>
  );
};

export default App;
