import React from 'react';
import { Card } from 'antd';
import { CloseCircleFilled, FilePdfOutlined } from '@ant-design/icons';

export const WindowComponent = ({ title, files }) => {
  return (
    <Card
      className="window"
      title={ title || 'Me - Files'}
      extra={
        <CloseCircleFilled
          onClick={event => {
            event.preventDefault();

            alert('close');
          }}
        />
      }
    >
      { files.map(file => (
        <FilePdfOutlined
          key={Math.random() * 100}
          className="window-files"
          style={{ fontSize: '500%' }}
        />
      ))}
    </Card>
  );
}