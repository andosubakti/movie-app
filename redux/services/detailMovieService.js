import { fetchDetailMovie } from "../../services/detailMovie";
import { getDetailMovieAction, getDetailMovieActionError, getDetailMovieActionSuccess } from "../actions/detailMovieActions";

export const getDetailMovieService = (movieId) => {
    return async (dispatch) => {
        dispatch(getDetailMovieAction());
        return fetchDetailMovie(movieId)
            .then((res) => {
                dispatch(getDetailMovieActionSuccess(res.data));
            })
            .catch(() => {
                dispatch(getDetailMovieActionError());
            });
    };
};