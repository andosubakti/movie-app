import { GET_DETAIL_MOVIE, GET_DETAIL_MOVIE_ERROR, GET_DETAIL_MOVIE_SUCCESS } from "../types/detailMovieType";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

const detailMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAIL_MOVIE:
            return {
                ...state,
                loading: true,
            };
        case GET_DETAIL_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_DETAIL_MOVIE_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

export default detailMovieReducer;