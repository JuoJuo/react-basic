- createStore完成后，我们觉得在组件里写() => store.dispatch({type: 'add'})不太好。
- 所以决定把它管理起来，于是bindActionCreators.js就出现了