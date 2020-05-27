import React from 'react';
import { Result } from 'antd';

export const WelcomeComponent = () => {
  return (
    <Result
      status="success"
      title={<strong style={{ color: 'white' }}>Welcome to meOS!</strong>}
      subTitle={<span style={{ color: 'white' }}>This is a simple personal website of me(José Segura) enjoy it!</span>}
    />
  )
}