import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
} from "./types"

import history from "../history"

import streams from "../apis/streams"

// Action Creators
export const signIn = (userId) => {
    // return action
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}
// 這個 action 內先做 fetch，等拿到資料後，再 dispatch 結果給 reducers 來完成
export const createStream = (formValues) => async (dispatch, getState) => {
    // getState 回傳你的應用程式當下的 state tree。 這等同於 store 的 reducer 最後一次回傳的值。
    const {
        userId
    } = getState().auth;
    const response = await streams.post("/streams", {
        ...formValues,
        userId
    });

    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    });
    // Do some programatic navigation to get
    // the user back to the root route
    history.push("/")
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get("/streams")

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`)

    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues)

    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
    history.push("/")
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
    history.push("/")
}