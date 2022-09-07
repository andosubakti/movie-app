import { Descriptions } from 'antd';
import React from 'react';
import Rating from '../atoms/Rating';

const Description = ({data, onClickRating}) => {
    return (
  <div>
    <Descriptions
      title="Movie Detail"
      bordered
      column={{
        xxl: 1,
        xl: 1,
        lg: 1,
        md: 1,
        sm: 1,
        xs: 1,
      }}
      style={{padding: '10px'}}
    >
    <Descriptions.Item label="">
        <img src={'https://image.tmdb.org/t/p/w300/' + data.poster_path}/>
    </Descriptions.Item>
      <Descriptions.Item label="Title">{data.title}</Descriptions.Item>
      <Descriptions.Item label="Release Date">{data.release_date}</Descriptions.Item>
      <Descriptions.Item label="Genre">{
        <div style={{display: 'inline-flex'}}>
            {data?.genres?.length ? data?.genres?.map((item) => {
            return(
                <p key={item.id}>{item.name + ','}</p>
            )
        }) : 'no data'}
        </div>
      }</Descriptions.Item>
      <Descriptions.Item label="Runtime">{data.runtime ? `${data.runtime} minutes`: 'no data'}</Descriptions.Item>
      <Descriptions.Item label="Budget">{data.budget ? `$${data.budget}` : 'no data' }</Descriptions.Item>
      <Descriptions.Item label="Revenue">{data.revenue ? `$${data.revenue}` : 'no data' }</Descriptions.Item>
      <Descriptions.Item label="Popularity">{data.popularity ? data.popularity : 'no data'}</Descriptions.Item>
      <Descriptions.Item label="Rating">
        <Rating disable={true} value={data.vote_average} label={true}/>
        <a onClick={() => onClickRating()}> Vote a Rating</a>
      </Descriptions.Item>
      <Descriptions.Item label="Vote Count">{data.vote_count ? `${data.vote_count}` : 'no data' }</Descriptions.Item>
      <Descriptions.Item label="Overview">{data.overview ? `${data.overview}` : 'no data' }</Descriptions.Item>
    </Descriptions>
  </div>
    );
};

export default Description;