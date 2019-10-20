import { SIGN_IN, SIGN_OUT } from "../actions/types"

const INTIAL_STTE = {
    isSignedIn: null,
    userId: null
}

export default (state = INTIAL_STTE, action) => {
    switch (action.type) {
        case SIGN_IN:
            // 將isSignedIn更新為true
            return { ...state, isSignedIn: true, userId: action.payload }
        case SIGN_OUT:
            // 將isSignedIn更新為false
            return { ...state, isSignedIn: false, userId: null }
        default:
            return state
    }
}