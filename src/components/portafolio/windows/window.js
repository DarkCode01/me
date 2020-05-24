import React from 'react';
import { Card } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

export const WindowComponent = ({ title }) => {
  return (
    <Card
      style={{ width: '90%' }}
      title={ title || 'Me - Files '}
      extra={<CloseCircleFilled />}
    >
      Madaada
    </Card>
  );
}