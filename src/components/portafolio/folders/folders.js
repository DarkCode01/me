import React from 'react';
import { Row } from 'antd';
import { FolderOrFileComponent } from './folder';

export const FoldersComponent = ({ folders }) => {
  return (
    <Row justify="center">
      { folders.map(fileOrFolder => (
        <FolderOrFileComponent key={Math.random() * 100} fileOrFolder={fileOrFolder} />
      ))}
    </Row>
  );
}