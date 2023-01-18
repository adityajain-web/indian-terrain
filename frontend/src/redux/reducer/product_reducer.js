import actionTypes from "../actiontypes";

const initialState = {
    categories: []
}

const setProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_ALL_CATEGORIES:
            return { ...state, categories: payload }

        default:
            return state;
    }
}

export default setProductReducer