import React from 'react';
import { Col } from 'antd';

export const FolderOrFileComponent = ({ fileOrFolder }) => {
  return (
    <Col span={12} className="file-folder item" key={fileOrFolder.name}>
      <span className="icon-file-folder">
        { fileOrFolder.icon }
      </span>
      <p className="title-file-folder">
        { fileOrFolder.name }
      </p>
    </Col>
  );
}