import diff from "../../../utils/diff";
import qs from "../../../utils/qs-params";
import electronics from "../../electronics/actions"

export const loadElectronics = (currentParams = {}, newParams = {}, historyReplace = false) => {

  // Параметры текущего URL адреса
  const urlParams = qs.parse(window.location.search) || {};

  const params = {
    limit: Number(urlParams._limit) || 8,
    page: Number(urlParams._page) || 1,
    query: (urlParams.name_like) || '',
    sort: (urlParams._order === 'desc' ? '-'.concat(urlParams._sort) : urlParams._sort) || '',
    type: (urlParams.type_like) || '',
    ...newParams
  };

  // Итоговые URL параметры
  let resultParams = diff({
    _limit: historyReplace ? urlParams._limit || 8 : params.limit,
    _page: historyReplace ? urlParams._page || 1 : params.page,
    name_like: historyReplace ? urlParams.name_like || '' : params.query,
    _sort: historyReplace ? urlParams._sort || '' : params.sort.indexOf('-') === 0 ? params.sort.replace(/^-/, '') : params.sort,
    _order: historyReplace ? urlParams._order || 'asc' : params.sort.indexOf('-') === 0 ? 'desc' : 'asc',
    type_like: historyReplace ? urlParams.type_like || '' : params.type
  }, {
    name_like: '',
    _order: 'asc',
    type_like: '',
    _sort: ''
  });

  return async function (dispatch) {
    dispatch(electronics.load())
    try {
      const response = await fetch(`http://localhost:4000/electronics${qs.stringify(resultParams)}`);
      const items = await response.json();
      const count = Number(response.headers.get('x-total-count'));

      // Запоминаем параметры в URL, которые отличаются от начальных
      let queryString = qs.stringify(resultParams);
      const url = window.location.pathname + queryString + window.location.hash;
      if (historyReplace) {
        window.history.replaceState({}, '', url);
      } else {
        window.history.pushState({}, '', url);
      }

      dispatch(electronics.loadSuccess(items, count, params));
    } catch (e) {
      dispatch(electronics.loadError(e))
    }
  }
} 