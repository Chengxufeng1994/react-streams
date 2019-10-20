import _ from "lodash"
import React from "react"
import { connect } from "react-redux"
import { fetchStream, editStream } from "../../actions"
import StreamForm from "./StreamForm"

class StreamEdit extends React.Component {
    // 有時候有些 state 的值沒有一開始出現，但有時會出現，這是因為 Redux 還沒 load 到其他 components 的資料，
    // 為了避免這個狀況，我們可以事先呼叫我們需要的 action 來準備好 state。
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        console.log(this.props)
        if (!this.props.stream) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    // 如果我們想要從一個 object 只過濾出幾個特定的 key，可以用 lodash 的 _.pick() 方法
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)