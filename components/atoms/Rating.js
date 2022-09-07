import { Rate } from 'antd';
import React from 'react';
const desc = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const Rating = ({disable, onChange, value, label}) => {
  return (
    <span>
      <Rate allowHalf disabled={disable} tooltips={desc} onChange={onChange} value={value} count={10}/>
      {value && label ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  );
};

export default Rating;