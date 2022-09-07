import React, { useEffect, useState } from 'react'
import { getSearchMovieService } from '../../redux/services/searchMovieService'
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Tag } from 'antd';
import { useRouter } from 'next/router';
  
const SearchMovieList = (value) => {
    const dispatch = useDispatch();
    const router = useRouter()
    const { data, loading } = useSelector((state) => state.searchMovie);
    const [page, setPage] = useState(1)

    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Release Date',
          dataIndex: 'release_date',
          key: 'release_date',
          align: 'center',
        },
        {
          title: 'Rating',
          dataIndex: 'vote_average',
          key: 'vote_average',
          render: (value) => `${value}/10`,
          align: 'center',
        },
        {
            title: 'Total Vote',
            dataIndex: 'vote_count',
            key: 'vote_count',
            align: 'center',
        },
        {
            title: 'Overview',
            dataIndex: 'overview',
            key: 'overview',
            width: '30%',
            align: 'justify',
        },
        {
            title: 'Poster',
            dataIndex: 'poster_path',
            key: 'poster_path',
            render: (path) => <img src={'https://image.tmdb.org/t/p/w200/' + path}/>,
            align: 'center',
        },
        {
          title: 'Action',
          key: 'action',
          dataIndex: 'id',
          render: (id) => (
            <Space size="middle">
              <a onClick={() => router.push(`detail/movie/${id}`)}>Details</a>
            </Space>
          ),
        },
      ];
  
    useEffect(() => {
      if (value) {
        dispatch(getSearchMovieService(value, page))
      }
    }, [page])
  
    return (
        <Table 
            columns={columns} 
            dataSource={data?.results} 
            rowKey='id'
            loading={loading}
            pagination={{
                total: data.total_pages,
                defaultPageSize: 20,
                showSizeChanger: false,
                onChange: ((page, pageSize) => {setPage(page)})
            }}
        />
    );
};

export default SearchMovieList;