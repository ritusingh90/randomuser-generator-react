
import './App.css';

import { Route, Routes } from 'react-router';
import RandomUser from './Pages/RandomUser';
import Cart from './Pages/Cart';
import Header from './components/header';
import CartDetails from './components/CartDetails';
import ProductDetail from './components/ProductDetail';
import ProductCart from './Pages/ProductCart';
import 'react-toastify/dist/ReactToastify.css';



function App() {
 
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<RandomUser/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/cartdetail" element={<CartDetails/>}/>
        <Route path='/productdetail/:id' element={<ProductDetail/>} />
        <Route path="/productcart" element={<ProductCart/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
