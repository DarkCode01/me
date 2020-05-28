import React from 'react';
import { Result, Spin } from 'antd';

export const BootComponent = () => {
  return (
    <Result
      icon={ <img style={{ width: '50%' }} src="darkcoder.jpg" alt="" /> }
      title={<Spin size="large" />}
    />
  );
}