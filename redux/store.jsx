import { configureStore } from '@reduxjs/toolkit'
import detailMovieReducer from './reducers/detailMovieReducer'
import popularMoviesReducer from './reducers/popularMoviesReducer'
import ratingMovieReducer from './reducers/ratingMovieReducer'
import searchMovieReducer from './reducers/searchMovieReducer'

export default configureStore({
    reducer: {
        popularMovies: popularMoviesReducer,
        searchMovie: searchMovieReducer,
        detailMovie: detailMovieReducer,
        ratingMovie: ratingMovieReducer
    },
})