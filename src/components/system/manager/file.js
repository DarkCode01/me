import React from 'react';
import { Col } from 'antd';
import {
  LinkedinOutlined,
  GithubOutlined,
  FilePdfOutlined,
  FileOutlined,
  FolderOutlined
} from '@ant-design/icons';

const getIcon = type => {
  switch(type.toLowerCase()) {
    case 'github':
      return <GithubOutlined style={{ fontSize: '500%' }} />
    case 'linkedin':
      return <LinkedinOutlined style={{ fontSize: '500%' }} />
    case 'cv':
      return <FilePdfOutlined style={{ fontSize: '500%' }} />
    case 'folder':
      return <FolderOutlined style={{ fontSize: '500%' }} />
    default:
    return <FileOutlined style={{ fontSize: '500%' }} />
  }
}

export const FileComponent = ({ file }) => {
  return (
    <Col className="gutter-row" span={3} onClick={file.open}>
      <center>
        { getIcon(file.type) }
      </center>
      <br />
      <center>
        { file.filename }
      </center>
    </Col>
  )
}