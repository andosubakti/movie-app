import { SET_RATING_MOVIE, SET_RATING_MOVIE_ERROR, SET_RATING_MOVIE_SUCCESS } from "../types/ratingMovieType";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

const ratingMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RATING_MOVIE:
            return {
                ...state,
                loading: true,
            };
        case SET_RATING_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case SET_RATING_MOVIE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default ratingMovieReducer;