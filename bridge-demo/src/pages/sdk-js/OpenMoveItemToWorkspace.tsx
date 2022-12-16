import { Input, Button, Row, Col } from 'antd';

import createProximaSdk from '@giteeteam/proxima-sdk-js';
import React, { useState } from 'react';

const OpenItemSinglePage: React.FC<any> = () => {
  const proxima = createProximaSdk();
  const [itemId, setItemId] = useState('');
  const [workspaceKey, setWorkspaceKey] = useState('');

  const handleClick = () => {
    proxima.execute('openMoveItemToWorkspace', {
      itemId,
      workspaceKey,
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
          placeholder="请输入空间Key"
          onChange={e => {
            setWorkspaceKey(e.target.value);
          }}
        />
      </Col>
      <Col span={2}>
        <Button onClick={handleClick}>打开空间内移动事项页面</Button>
      </Col>
    </Row>
  );
};

export default OpenItemSinglePage;
