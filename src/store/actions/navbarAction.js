export const setSearchKey = (searchKey) => {
  return (dispatch) => {
   dispatch({
    type: "navbar/setSearchKey",
    searchKey
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
