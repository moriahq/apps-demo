import React, { useState } from 'react';
import { Input } from 'antd';
import cx from './Demo.less';
import { useSDK } from '@giteeteam/plugin-sdk';

const Demo: React.FC = () => {
  const sdk = useSDK();
  const [objectId, setObjectId] = useState('');

  const handleClick = () => {
    sdk.sendAction('openIssuePanel', { issue: objectId }).then(() => {
      console.log('打开回调');
    });
  };

  const handleChange = e => {
    setObjectId(e.target.value);
  };

  return (
    <div>
      <h2 className={cx('title')}>CSS Modules 测试</h2>
      <Input placeholder="请输入卡片ObjectId" onChange={handleChange} />
      <button onClick={handleClick}>唤起卡片面板</button>
    </div>
  );
};

export default Demo;
