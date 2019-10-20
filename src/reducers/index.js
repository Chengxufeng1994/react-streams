import { combineReducers } from "redux";
// 避免搞混用as命名為formReducer
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";
// 輸出auth和from給其他元件使用
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer,
})