import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions"
import StreamForm from "./StreamForm"

class StreamCreate extends Component {
    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render() {
        // Redux Form 其實並不會預設轉變為一個 <input> 或 <textarea> 之類，
        // 我們要自己去將它加上 component 。
        // console.log(this.props)
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

// 241. Creating a Stream with REST Conventions
// 為了使用connect須將以下程式碼進行修改

// 方法一
// export default connect()(reduxForm({
//     form: "streamCreate",  // 你的表單組件的特殊標記
//     validate
// })(StreamCreate));  // 這裏的StreamCreate是你寫的表單組件

export default connect(null, { createStream })(StreamCreate)
