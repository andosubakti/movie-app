import { GET_SEARCH_MOVIES, GET_SEARCH_MOVIES_ERROR, GET_SEARCH_MOVIES_SUCCESS } from "../types/searchMovieType";

export const getSearchMoviesAction = () => ({
    type: GET_SEARCH_MOVIES,
});

export const getSearchMoviesActionSuccess = (data) => ({
    type: GET_SEARCH_MOVIES_SUCCESS,
    payload: data,
});

export const getSearchMoviesActionError = () => ({
    type: GET_SEARCH_MOVIES_ERROR
});