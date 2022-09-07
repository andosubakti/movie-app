import { Input } from 'antd';
import { useRouter } from 'next/router';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchMovieService } from '../../redux/services/searchMovieService';
import Button from '../atoms/ButtonComponent';
import SearchMovieList from '../templates/SearchMovieList';
const { Search } = Input;

const SearchMovie = (page) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const {data:searchData, loading} = useSelector((state) => state.searchMovie);
  const [searchValue, setSearchValue] = useState('')
  return (
  <>
    <Search 
        placeholder="Search Movie" 
        enterButton="Search" 
        size="large" 
        loading={loading}
        onSearch={(value) => {
          dispatch(getSearchMovieService(value, page))
          setSearchValue(value)
        }}
    />
    <Button style={{marginTop: '30px', marginBottom: '30px'}} name="Popular Movie" onClick={() => router.push('/popular-movie')}/>
    { searchData ? <SearchMovieList value={searchValue}/> : ''}
  </>
  );
};

export default SearchMovie;