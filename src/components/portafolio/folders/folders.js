import React from 'react';
import { Row } from 'antd';
import { FolderOrFileComponent } from './folder';

export const FoldersComponent = ({ folders }) => {
  return (
    <Row justify="center">
      { folders.map(fileOrFolder => (
        <FolderOrFileComponent fileOrFolder={fileOrFolder} />
      ))}
    </Row>
  );
}