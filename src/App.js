import { useSelector } from "react-redux";
import Header from "./container/header";
import './style.css';
import Layout from "./wrappers/layout";
import BasketModal from "./container/basket-modal";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";

function App() {

  const select = useSelector(state => {
    return {
      electronics: state.electronics.items,
      count: state.electronics.count,
      params: state.electronics.params,
      waiting: state.electronics.waiting,
      modal: state.modal
    }
  });

  return (
    <>
      <Layout>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Layout>
      {select.modal === 'basket' && <BasketModal />}
    </>
  );
}

export default App;
