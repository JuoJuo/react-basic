function isPromise(obj) {
  return !!obj && (typeof obj == 'object' || typeof obj == 'function') && (typeof obj.then == 'function')
}

export default function ({dispatch:fullWrappedDispatch, getState}) {
  return next => action => {
    return isPromise(action.payload) ? action.payload.then(result => {
      fullWrappedDispatch({...action, payload: result});
    }).catch((error) => {
      fullWrappedDispatch({...action, payload: error, error: true});
      return Promise.reject(error);
    }) : next(action);
  }
}