import { BrowserRouter, Route, Routes } from 'react-router';
import { CartProvider } from './lib/cart';
import { CartDrawer } from './components/store/CartDrawer';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';

export default function App() {
  return (
    <BrowserRouter>
      {/* Cart lives above the routes so a basket survives moving between stores. */}
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store/:storeId" element={<StorePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  );
}
