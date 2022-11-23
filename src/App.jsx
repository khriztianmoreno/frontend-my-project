import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu';
import HomePage from './pages/Home';
import AboutPage from './pages/About';

import './App.css';

function App() {
  return (
    <div className="App-header">
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
