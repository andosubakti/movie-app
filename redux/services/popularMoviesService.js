import { getPopularMoviesAction, getPopularMoviesActionError, getPopularMoviesActionSuccess } from "../actions/popularMoviesActions";
import { fetchPopularMovieList } from "../../services/popularMovies";

export const getPopularMoviesService = (params) => {
    return async (dispatch) => {
        dispatch(getPopularMoviesAction());
        return fetchPopularMovieList(params)
            .then((res) => {
                dispatch(getPopularMoviesActionSuccess(res.data));
            })
            .catch(() => {
                dispatch(getPopularMoviesActionError());
            });
    };
};