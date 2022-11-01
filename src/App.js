import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./container/header";
import Item from "./component/item";
import List from "./component/list";
import { loadElectronics } from "./store/async-actions/electronics";
import basket from "./store/basket/actions";
import './style.css';
import Layout from "./wrappers/layout";
import BasketModal from "./container/basket-modal";
import Pagination from "./component/pagination";
import getAmountOfPage from "./utils/amount-pages";
import numberToArray from "./utils/number-to-array";
import Spinner from "./wrappers/spinner";
import useInit from "./hooks/use-init";
import Filter from "./container/filter";

function App() {

  const dispatch = useDispatch();
  const select = useSelector(state => {
    return {
      electronics: state.electronics.items,
      count: state.electronics.count,
      params: state.electronics.params,
      waiting: state.electronics.waiting,
      modal: state.modal
    }
  });

  const pagePagination = getAmountOfPage(select.count, select.params.limit);
  const paginationArray = numberToArray(pagePagination);

  useInit(() => {
    dispatch(loadElectronics(select.params, {}, true))
  }, [], { backForward: true })

  const callbacks = {
    // Добавление товара в корзину
    addToBasket: useCallback((item) => dispatch(basket.add(item)), []),
    // Загрузка новой страницы
    loadingPage: useCallback((page) => dispatch(loadElectronics(select.params, { page })), [])
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
        <Header />
        <Filter />
        <Spinner waiting={select.waiting}>
          <List items={select.electronics} render={renders.item}></List>
          <Pagination currentPage={select.params.page} pages={paginationArray} loadingPage={callbacks.loadingPage} />
        </Spinner>
      </Layout>
      {select.modal === 'basket' && <BasketModal />}
    </>
  );
}

export default App;
