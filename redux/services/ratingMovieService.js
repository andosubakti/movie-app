import { setVoting } from "../../services/rate";
import { setRatingMovieAction, setRatingMovieActionError, setRatingMovieActionSuccess } from "../actions/ratingMovieActions";

export const setRatingMovieService = (movieId, value) => {
    return async (dispatch) => {
        dispatch(setRatingMovieAction());
        return setVoting(movieId, value)
            .then((res) => {
                dispatch(setRatingMovieActionSuccess(res.data));
            })
            .catch((err) => {
                dispatch(setRatingMovieActionError(err.response));
            });
    };
};