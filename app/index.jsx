import React from 'react';
import {render} from 'react-dom';
import './assets/index.less';
import App from "./containers/index.jsx";
import { Provider } from 'react-redux';
//导入store
import {configureStore} from './store/index.jsx';
//可以在configureStore传入初始状态；
let store = configureStore({
    userInfo:{ cityName:'shanghi' }
})//生成store;
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));