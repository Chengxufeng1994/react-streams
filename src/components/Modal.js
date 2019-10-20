import React from "react";
import ReactDOM from "react-dom";
// ReactDOM.createPortal(child, container)

const Modal = props => {
    return ReactDOM.createPortal(
        // 其中第一個參數 child 是你要渲染的 React 元素，
        // 第二個參數 container 則是要被掛載到哪一個 DOM 元素上。
        <div
            onClick={props.onDismiss}
            className="ui dimmer modals visible active">
            <div
                // 如果不想要子 element 繼承父 element 的 event
                onClick={event => event.stopPropagation()}
                className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector("#modal")
    )
}

export default Modal;