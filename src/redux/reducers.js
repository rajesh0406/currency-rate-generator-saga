const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_CURRENCY_LIST':
           return { ...state, loading: true };
      case 'LIST_RECEIVED':
           return { ...state,list: action.json, loading: false }
      default: 
           return state;
    }
   };
   export default reducer;