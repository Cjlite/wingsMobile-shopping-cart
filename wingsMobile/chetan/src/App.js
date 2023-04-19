import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About'
import Signin from './components/Signin'
import Register from './components/Register'
import Contact from './components/Contact'
import Product from './components/Product'
import Redmi from './components/Redmi'
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/buttons/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/redmi" element={<Redmi />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
