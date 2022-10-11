import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./container/header";
import Item from "./component/item";
import List from "./component/list";
import { loadElectronics } from "./store/async-actions/electronics";
import basket from "./store/basket/actions";
import './style.css';
import Layout from "./wrappers/layout";
import BasketModal from "./container/basket-modal";

function App() {

  const selector = useSelector(state => {
    return {
      electronics: state.electronics.items,
      modal: state.modal
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadElectronics())
  }, [])

  const callbacks = {
    // Добавление товара в корзину
    addToBasket: useCallback((item) => dispatch(basket.add(item)), [])
  }

  const renders = {
    // Отрисовка карточки товара
    item: useCallback((item) => {
      return <Item
        item={item}
        addToBasket={callbacks.addToBasket}
      ></Item>
    }, [])
  }

  return (
    <>
      <Layout>
        <Header></Header>
        <List items={selector.electronics} render={renders.item}></List>
      </Layout>
      {selector.modal === 'basket' && <BasketModal />}
    </>
  );
}

export default App;
