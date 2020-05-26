import React from 'react';
import { Card } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

export const WindowComponent = ({ title, children, close, configuration, width, height }) => {
  return (
    <Card
      className="window"
      style={{
        width: width || '150vh',
        height: height || '90vh'
      }}
      title={ title || 'Me - Files'}
      extra={
        <CloseCircleFilled
          onClick={close}
        />
      }
      bodyStyle={ configuration }
    >
      <div style={{ overflowY: 'auto', height: '100%' }}>
        { children }
      </div>
    </Card>
  );
}