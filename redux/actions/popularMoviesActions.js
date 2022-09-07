import { GET_POPULAR_MOVIES, GET_POPULAR_MOVIES_ERROR, GET_POPULAR_MOVIES_SUCCESS } from "../types/popularMoviesType";

export const getPopularMoviesAction = () => ({
    type: GET_POPULAR_MOVIES,
});

export const getPopularMoviesActionSuccess = (data) => ({
    type: GET_POPULAR_MOVIES_SUCCESS,
    payload: data,
});

export const getPopularMoviesActionError = (data) => ({
    type: GET_POPULAR_MOVIES_ERROR,
    payload: data,
});