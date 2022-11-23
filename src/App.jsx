import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

import './App.css';

function App() {
  return (
    <div className="App-header">
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
