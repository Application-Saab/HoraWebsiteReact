import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footersec';
import Home from './pages/Home';
import Decoration from './pages/Decoration/Decoration';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decoration" element={<Decoration />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
   
  );
}

export default App;
