import { useSelector } from "react-redux";
import './style.css';
import Layout from "./wrappers/layout";
import BasketModal from "./container/basket-modal";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Error from "./pages/error";
import Electronic from "./pages/electronic";

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
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='profile' element={<Profile />} />
          <Route path='electronic/:id' element={<Electronic />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      {select.modal === 'basket' && <BasketModal />}
    </>
  );
}

export default App;
