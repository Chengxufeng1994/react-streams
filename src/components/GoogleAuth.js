import React, { Component } from "react"
import { connect } from "react-redux"
import { signIn, signOut } from "../actions"

class GoogleAuth extends Component {
    componentDidMount() {
        // 加載client和auth2
        window.gapi.load("client:auth2", () => {
            // 初始化JavaScript client with API key, OAuth client ID, scope, and API discovery document(s)
            // 如果提供了OAuth客戶端ID和作用域，則此函數將加載gapi.auth2模塊以執行OAuth。
            // 請注意，不能多次提供scope和clientId參數，因為gapi.auth2模塊只能初始化一次。
            window.gapi.client.init({
                clientId: "168950547329-al7f1q440uo13h348faubo4q0b12cgu7.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                // 令auth為gapi.auth2.getAuthInstance
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.auth.isSignedIn.get()確認是否登入
                this.onAuthChange(this.auth.isSignedIn.get());
                // A function that takes a boolean value. 
                // listen() passes true to this function when the user signs in, and false when the user signs out.
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    };

    // arrow func
    // 在react-redux的這發送動作(dispatch action)，它是自動幫你作的，
    // 也就是說你如果用react-redux綁住(連接)好Redux與React後，
    // 只要呼叫Action Creator的函式，就會作發送動作(dispatch action)，
    // 不需要像之前的範例中，要呼叫store.dispatch(action)這樣。
    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        // 將帳號登入
        this.auth.signIn()
    }

    onSignOutClick = () => {
        // 將帳號登出
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui blue google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    Sign In with Google
            </button>
            );
        };
    };

    render() {
        // console.log(this.props)
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
};

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        isSignedIn: state.auth.isSignedIn,
    }
}

export default connect(
    // 輸入 將store中的state轉成props輸入
    mapStateToProps,
    // 輸出 將action作為props綁定到view，以此操作類型dispatch
    { signIn, signOut }
)(GoogleAuth);