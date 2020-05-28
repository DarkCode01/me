import React from 'react';
import { Card } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

export const WindowComponent = ({ title, children, close, configuration, width, height }) => {
  return (
    <Card
      className="window"
      style={{
        width: width || '150vh',
        height: height || '90vh',
        backgroundColor: 'rgb(14, 14, 14)',
        color: 'white'
      }}
      title={ <strong style={{ color: 'white' }}>{title} || 'Me - Files'</strong>}
      extra={
        <CloseCircleFilled
          style={{ color: 'white' }}
          onClick={close}
        />
      }
      bodyStyle={ configuration }
    >
      <div style={{ overflowY: 'auto', height: '100%', color: 'white' }}>
        { children }
      </div>
    </Card>
  );
}