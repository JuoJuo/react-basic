import React from 'react';
import ReactDOM from 'react-dom';
// import Test1 from './jsx/index';
// import Test1 from './jsx/ifelse.js';
// import Test1 from './002simpleRender/test.js';
// import Test1 from './003setState/001index';
// import Test1 from './004lifeCycle/001old.js';
// import Test1 from './004lifeCycle/002new-snapshot.js';
// import Test1 from './007propTypes/index.js';
// import Test1 from './010context/2.NewContext.js';
import Test1 from './100.redux/component/Counter.js';
import { Provider } from './/100.redux/react-redux/index.js';
import store from './100.redux/store/index.js';


ReactDOM.render(
  <Provider store={store}>
    <Test1 />
</Provider> , document.getElementById('root'));

