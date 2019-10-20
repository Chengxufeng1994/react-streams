import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
    // touched 是否點擊輸入欄，回傳true or false
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        // console.log({ input, label })
        // console.log(meta)
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        // Redux Form 其實並不會預設轉變為一個 <input> 或 <textarea> 之類，
        // 我們要自己去將它加上 component 。
        // console.log(this.props)
        return (
            <form
                className="ui form error"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field
                    component={this.renderInput}
                    label="Enter Title"
                    name="title"
                />
                <Field
                    component={this.renderInput}
                    label="Enter Description"
                    name="description"
                />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}
const validate = (formValues) => {

    const errors = {}
    // console.log(formValues)
    if (!formValues.title) {
        errors.title = "You must enter a title"
    }

    if (!formValues.description) {
        errors.description = "You must enter a description"
    }
    return errors;
}

// 241. Creating a Stream with REST Conventions
// 為了使用connect須將以下程式碼進行修改

// 方法一
// export default connect()(reduxForm({
//     form: "streamCreate",  // 你的表單組件的特殊標記
//     validate
// })(StreamCreate));  // 這裏的StreamCreate是你寫的表單組件

// 方法二
export default reduxForm({
    form: "streamForm",  // 你的表單組件的特殊標記
    validate
})(StreamForm);  // 這裏的StreamCreate是你寫的表單組件

