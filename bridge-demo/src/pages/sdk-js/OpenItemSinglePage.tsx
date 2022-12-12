import { Input, Button, Col, Row } from 'antd';

import createProximaSdk from '@projectproxima/proxima-sdk-js';
import React, { useState } from 'react';

const OpenItemSinglePage: React.FC<any> = () => {
  const proxima = createProximaSdk();
  const [itemKey, setItemKey] = useState('');
  const [workspaceKey, setWorkspaceKey] = useState('');

  const handleClick = () => {
    proxima.execute('openItemSinglePage', {
      key: itemKey,
      workspace: {
        key: workspaceKey,
      },
    });
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={3}>
          <Input
            placeholder="请输入卡片Key"
            onChange={e => {
              setItemKey(e.target.value);
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
          <Button onClick={handleClick}>打开卡片单页面</Button>
        </Col>
      </Row>
    </div>
  );
};

export default OpenItemSinglePage;
