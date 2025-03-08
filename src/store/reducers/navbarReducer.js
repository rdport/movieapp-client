const initialState = {
  searchKey: '',
  isShowInfo: true
}

function navbarReducer( state = initialState, action ) {
  switch(action.type) {
    case 'navbar/setSearchKey':
      return { ...state, searchKey: action.searchKey }
    case 'navbar/setIsShowInfo':
      return { ...state, isShowInfo: action.isShowInfo }
    default:
      return state
  }
}

export default navbarReducer;
