import React from 'react';
import { Input, Rate, Table } from 'antd';
import cx from './Demo.less';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
  },
  {
    title: 'age',
    dataIndex: 'age',
  },
  {
    title: 'phone',
    dataIndex: 'phone',
  },
];

const dataSource = [
  {
    key: '1',
    name: 'John',
    age: 19,
    phone: '1111111',
  },
  {
    key: '2',
    name: 'Tom',
    age: 32,
    phone: '2222222',
  },
];

const Demo: React.FC = () => {
  return (
    <div>
      <h2 className={cx('title')}>CSS Modules Test</h2>
      <Input placeholder="Antd input test" />
      <Rate allowHalf defaultValue={2.5} />
      <Table columns={columns} dataSource={dataSource} rowKey="key" />
    </div>
  );
};

export default Demo;
