import { Input, Button, Col, Row } from 'antd';

import createProximaSdk from '@giteeteam/proxima-sdk-js';
import React, { useState } from 'react';

const OpenItemViewScreen: React.FC<any> = () => {
  const proxima = createProximaSdk();
  const [itemId, setItemId] = useState('');

  const handleClick = () => {
    proxima.execute('openItemViewScreen', {
      itemId,
      notClearItemPreorderList: true,
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
      <Col span={2}>
        <Button onClick={handleClick}>打开事项详情浮层</Button>
      </Col>
    </Row>
  );
};

export default OpenItemViewScreen;
