import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import LoginPage from './pages/LoginPage';
import VerifyPage from './pages/VerifyPage';
import CartListPage from './pages/CartListPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProductListPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/verify" element={<VerifyPage/>}/>
          <Route path="/cart-list" element={<CartListPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;