import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/"> Lara's </Link>
      </header>
        <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        </main>
    </div>
    </BrowserRouter>
    );
};
export default App;
