import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import LoginPage from './pages/LoginPage';
import VerifyPage from './pages/VerifyPage';
import CartListPage from './pages/CartListPage';
import Helper from "./utility/helper";
import NotFound404 from "./components/NotFound404";
const App = () => {

  if(Helper.isLogin()){
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductListPage/>}/>
            <Route path="/cart-list" element={<CartListPage/>}/>
            <Route path="*" element={<NotFound404/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  else{
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductListPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/verify" element={<VerifyPage/>}/>
            <Route path="*" element={<NotFound404/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;