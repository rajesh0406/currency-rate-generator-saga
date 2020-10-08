import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchlist() {
  const json = yield fetch('https://api.exchangeratesapi.io/latest?base=USD')
        .then(response => response.json(), );    
        //console.log(json)
  yield put({ type: "LIST_RECEIVED", json: json.rates, });
}
function* actionWatcher() {
     yield takeLatest('GET_CURRENCY_LIST', fetchlist)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}