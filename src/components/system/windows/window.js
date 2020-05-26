import React from 'react';
import { Card } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

export const WindowComponent = ({ title, children, close, configuration }) => {
  return (
    <Card
      className="window"
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