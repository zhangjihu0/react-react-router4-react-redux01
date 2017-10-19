// 合并所有reducer 导出去，让store使用
import {combineReducers} from 'redux';
import {userInfo} from './userInfo.jsx';
import {store} from './store.jsx';
export default combineReducers({
    userInfo,
    store
})