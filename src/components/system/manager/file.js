import React from 'react';
import { Col } from 'antd';
import {
  LinkedinOutlined,
  GithubOutlined,
  FilePdfOutlined,
  FileOutlined
} from '@ant-design/icons';

const getIcon = name => {
  switch(name.toLowerCase()) {
    case 'github':
      return <GithubOutlined style={{ fontSize: '500%' }} />
    case 'linkedin':
      return <LinkedinOutlined style={{ fontSize: '500%' }} />
    case 'cv':
      return <FilePdfOutlined style={{ fontSize: '500%' }} />
    default:
    return <FileOutlined style={{ fontSize: '500%' }} />
  }
}

export const FileComponent = ({ file }) => {
  return (
    <Col className="gutter-row" span={3} onClick={file.open}>
      <center>
        { getIcon(file.name) }
      </center>
      <br />
      <center>
        { file.name }
      </center>
    </Col>
  )
}