import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Cart from './component/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
