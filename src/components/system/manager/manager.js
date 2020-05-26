import React from 'react';
import { FileComponent } from './file';
import { Layout, Row } from 'antd';

export const ManagerComponent = ({ files }) => {
  return (
    <Layout style={{ background: 'white' }}>
      <Row>
        { files.map(file => (
          <FileComponent file={file} key={Math.random() * 100} />
        ))}
      </Row>
    </Layout>
  );
}