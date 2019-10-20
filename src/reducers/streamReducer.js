import _ from "lodash"
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        // Array of records
        // 如果要從一個 array 裡面取特定 key 為 新的 object 的 key，可以運用 lodash 的 _.mapKeys 這樣寫
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, "id") }
        // Single record
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        // Nothing
        // 若我們要在 action creator 做 delete 一個 key 可用 lodash 的 _.omit() 方法
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        default:
            return state;
    }
}