import React from 'react';
import { Card } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

export const WindowComponent = ({ title, children, close }) => {
  return (
    <Card
      className="window"
      title={ title || 'Me - Files'}
      extra={
        <CloseCircleFilled
          onClick={close}
        />
      }
    >
      { children }
    </Card>
  );
}