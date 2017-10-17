import * as Type from '../action-types/userInfo.jsx';
// actionCreator 是一个函数；
export function update(data){ //update修改的动作;
    return {
        type:Type.UPDATE_CITY,
        data
    }
}
