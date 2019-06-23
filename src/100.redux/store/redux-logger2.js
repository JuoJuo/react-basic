// 写个老语法，帮助理解
export default function logger2({getState}){
    return function(dispatch){
        return function(action){
            console.log('老状态2',getState());
            dispatch(action);
            console.log('新状态2',getState());
        }
    }
}