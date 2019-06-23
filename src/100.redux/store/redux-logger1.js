export default (store) => (dispatch) => (action) => {
  console.log('老状态1', store.getState());
  dispatch(action);
  console.log('新状态1', store.getState());
};
