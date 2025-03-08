export const setSearchKey = (searchKey) => {
  return (dispatch) => {
   dispatch({
    type: "navbar/setSearchKey",
    searchKey
   })
  }
}  

export const setFavSearchKey = (favSearchKey) => {
  return (dispatch) => {
   dispatch({
    type: "navbar/setFavSearchKey",
    favSearchKey
   })
  }
}  

export const setIsShowInfo = (isShowInfo) => {
  return (dispatch) => {
    dispatch({
      type: "navbar/setIsShowInfo",
      isShowInfo
    })
  }
}
