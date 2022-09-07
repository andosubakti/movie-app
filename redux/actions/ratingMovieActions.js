import { SET_RATING_MOVIE, SET_RATING_MOVIE_ERROR, SET_RATING_MOVIE_SUCCESS } from "../types/ratingMovieType";

export const setRatingMovieAction = () => ({
    type: SET_RATING_MOVIE,
});

export const setRatingMovieActionSuccess = (data) => ({
    type: SET_RATING_MOVIE_SUCCESS,
    payload: data,
});

export const setRatingMovieActionError = (data) => ({
    type: SET_RATING_MOVIE_ERROR,
    payload: data
});