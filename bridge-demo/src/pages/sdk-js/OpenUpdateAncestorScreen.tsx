import { Input, Button, Row, Col } from 'antd';

import createProximaSdk from '@giteeteam/proxima-sdk-js';
import React, { useState } from 'react';

const OpenUpdateAncestorScreen: React.FC<any> = () => {
  const proxima = createProximaSdk();
  const [itemId, setItemId] = useState('');
  const [workspaceId, setWorkspaceId] = useState('');

  const handleClick = () => {
    proxima.execute('openUpdateAncestorScreen', {
      isParentMode: false,
      workspaceId,
      visible: true,
      itemId,
    });
  };

  return (
    <Row gutter={16}>
      <Col span={3}>
        <Input
          placeholder="请输入卡片ObjectId"
          onChange={e => {
            setItemId(e.target.value);
          }}
        />
      </Col>
      <Col span={3}>
        <Input
          placeholder="请输入空间ObjectId"
          onChange={e => {
            setWorkspaceId(e.target.value);
          }}
        />
      </Col>
      <Col span={2}>
        <Button onClick={handleClick}>打开更新父事项浮层</Button>
      </Col>
    </Row>
  );
};

export default OpenUpdateAncestorScreen;
