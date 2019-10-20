import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import reduxThunk from "redux-thunk"

import App from "./components/App"
import reducers from "./reducers"

// Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 創建一個store全局管理state和操作
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    //Provider在根組件App外面包一層，App所有子組件就默認可以拿到store
    // 通過組件的props傳遞
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
)
