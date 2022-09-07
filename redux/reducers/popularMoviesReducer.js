import { GET_POPULAR_MOVIES, GET_POPULAR_MOVIES_SUCCESS, GET_POPULAR_MOVIES_ERROR } from "../types/popularMoviesType";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

const popularMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                loading: true,
            };
        case GET_POPULAR_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_POPULAR_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default popularMoviesReducer;