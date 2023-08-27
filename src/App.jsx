import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Catalog from './pages/Catalog/Catalog';
import Product from './pages/Product/Product';
import Login from './components/Auth/Login/Login';
import Registration from './components/Auth/Registration/Registration';
import { useDispatch, useSelector } from "react-redux";
import { auth } from './actions/users';
import Loader from './components/Loader/Loader';
import { getCategories } from './actions/categories'
import NotFound from './pages/NotFound/NotFound';
import Order from './pages/Order/Order';
import Admin from './pages/Admin/Admin';

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const load = useSelector(state => state.load);

  useEffect(() => {
    dispatch(auth());
    dispatch(getCategories());
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  if (load.length > 0) return <Loader />

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/catalog" element={<Catalog />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/reg" element={<Registration />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/order" element={<Order />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
