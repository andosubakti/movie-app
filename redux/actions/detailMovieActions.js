import { GET_DETAIL_MOVIE, GET_DETAIL_MOVIE_ERROR, GET_DETAIL_MOVIE_SUCCESS } from "../types/detailMovieType";

export const getDetailMovieAction = () => ({
    type: GET_DETAIL_MOVIE,
});

export const getDetailMovieActionSuccess = (data) => ({
    type: GET_DETAIL_MOVIE_SUCCESS,
    payload: data,
});

export const getDetailMovieActionError = () => ({
    type: GET_DETAIL_MOVIE_ERROR
});