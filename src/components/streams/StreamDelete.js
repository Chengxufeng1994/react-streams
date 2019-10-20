import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchStream, deleteStream } from "../../actions"
import Modal from "../Modal"
import history from "../../history"

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions = () => {
        // const id = this.props.match.params.id
        // 改成
        const { id } = this.props.match.params

        return (
            <React.Fragment>
                <button
                    onClick={() => { this.props.deleteStream(id) }}
                    className="ui button negative">
                    Delete
                </button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment >
            // 簡寫可寫成:
            // <>
            //   <button>Delete</button>
            //   <button>Cancel</button>
            // </>
        )
    }

    renderContent() {
        if (!this.props.stream) {
            return `Are you sure you want to delete this stream?`
        }

        return `Are you sure you want to delete this stream with title: ${this.props.stream.title} ?`
    }

    render() {
        // 了未來 popup 的 component 可重用，
        // 我們不要在 Modal.js 裡面寫任何死的資料，
        // 我們可以從子 components 傳資料給 popup。
        return (
            <div>
                StreamDelete
            <Modal
                    title="Delete Strem"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push("/")}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(
    mapStateToProps,
    {
        fetchStream,
        deleteStream
    })(StreamDelete)