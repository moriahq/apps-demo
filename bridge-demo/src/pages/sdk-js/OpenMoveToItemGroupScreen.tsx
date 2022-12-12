import { Input, Button, Row, Col } from 'antd';
import Parse from '@/lib/parse';

import createProximaSdk from '@projectproxima/proxima-sdk-js';
import React, { useState } from 'react';

const OpenMoveToItemGroupScreen: React.FC<any> = () => {
  const proxima = createProximaSdk();
  const [itemId, setItemId] = useState('');
  const [workspaceId, setWorkspaceId] = useState('');

  const handleClick = async () => {
    const itemData = await new Parse.Query('Item').equalTo('objectId', itemId).first();
    proxima.execute('openMoveToItemGroupScreen', {
      itemId,
      rowData: itemData.toJSON(),
      workspaceId,
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
        <Button onClick={handleClick}>打开移动事项组弹窗</Button>
      </Col>
    </Row>
  );
};

export default OpenMoveToItemGroupScreen;
