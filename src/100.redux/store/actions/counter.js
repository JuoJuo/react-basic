import * as types from '../action-types';

export default {
  increment(value) {
    return {type: types.INCREMENT, payload: value};
  },
  decrement() {
    return {type: types.DECREMENT};
  },
  asyncIncrement(value) {
    return function (dispatch, getState) {
      setTimeout(() => {
        dispatch({type: types.ASYNC_INCREMENT, payload: value});
      }, 1000);
    }
  },
  promiseIncrement(){
    return {
      type:types.PROMISE_INCREMENT,
      payload:new Promise((resolve,reject)=>{
        setTimeout(function(){
          let result = Math.random();
          if(result<0){
            resolve({number:result});
          }else{
            reject({number:result});
          }
        },1000);
      })
    }
  },
}
