import { Button } from 'antd';
import React from 'react';

const ButtonComponent = ({name, onClick, style}) => (
  <>
    <Button type="primary" onClick={onClick} style={style}>{name}</Button>
  </>
);

export default ButtonComponent;