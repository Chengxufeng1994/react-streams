import React, { Component } from "react"
import { connect } from "react-redux"
import flv from "flv.js"
import { fetchStream } from "../../actions"

class StreamShow extends Component {
    constructor(props) {
        super(props)

        this.videoRef = React.createRef()
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }
    // 如果我們離開 stream/:id 頁面，已經看不到直播的狀況下，在本機端停止直播，還是會在 console.log 看到以下訊息：
    // [MSEController] > MediaSource onSourceEnded
    // 這代表了網頁還是與本機直播有連結，網頁上的 video 還是在試著下載直播。
    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        if (this.player || !this.props.stream) {
            return;
        };

        const { id } = this.props.match.params;
        this.player = flv.createPlayer({
            type: "flv",
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {

        if (!this.props.stream) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        const { title, description } = this.props.stream
        return (
            <div>
                <video
                    ref={this.videoRef}
                    style={{ width: "100%" }}
                    controls
                />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps)
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)