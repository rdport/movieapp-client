const initialState = {
  searchKey: '',
  favSearchKey: '',
  isShowInfo: true
}

function navbarReducer( state = initialState, action ) {
  switch(action.type) {
    case 'navbar/setSearchKey':
      return { ...state, searchKey: action.searchKey }
    case 'navbar/setFavSearchKey':
      return { ...state, favSearchKey: action.favSearchKey }
    case 'navbar/setIsShowInfo':
      return { ...state, isShowInfo: action.isShowInfo }
    default:
      return state
  }
}

export default navbarReducer;
