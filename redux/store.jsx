import { configureStore } from '@reduxjs/toolkit'
import popularMoviesReducer from './reducers/popularMoviesReducer'
import searchMovieReducer from './reducers/searchMovieReducer'

export default configureStore({
    reducer: {
        popularMovies: popularMoviesReducer,
        searchMovie: searchMovieReducer
    },
})