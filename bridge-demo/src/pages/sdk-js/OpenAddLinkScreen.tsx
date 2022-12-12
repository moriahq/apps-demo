import { Input, Button, Row, Col } from 'antd';

import createProximaSdk from '@projectproxima/proxima-sdk-js';
import React, { useState } from 'react';

const OpenAddLinkScreen: React.FC<any> = () => {
  const proxima = createProximaSdk();
  const [itemId, setItemId] = useState('');

  const handleClick = () => {
    proxima.execute('openAddLinkScreen', itemId);
  };

  return (
    <div>
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
          <Button onClick={handleClick}>打开事项关联页面</Button>
        </Col>
      </Row>
    </div>
  );
};

export default OpenAddLinkScreen;
