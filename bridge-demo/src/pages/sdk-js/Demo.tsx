import React from 'react';
import { Space, Card } from 'antd';
import OpenAddLinkScreen from '@/pages/sdk-js/OpenAddLinkScreen';
import OpenCloneItemScreen from '@/pages/sdk-js/OpenCloneItemScreen';
import OpenItemEditScreen from '@/pages/sdk-js/OpenItemEditScreen';
import OpenItemSinglePage from '@/pages/sdk-js/OpenItemSinglePage';
import OpenItemViewScreen from '@/pages/sdk-js/OpenItemViewScreen';
import OpenMoveItemToWorkspace from '@/pages/sdk-js/OpenMoveItemToWorkspace';
import OpenMoveToItemGroupScreen from '@/pages/sdk-js/OpenMoveToItemGroupScreen';
import OpenUpdateAncestorScreen from '@/pages/sdk-js/OpenUpdateAncestorScreen';

const Demo: React.FC = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Card title="打开添加事项关联弹窗" size="small">
        <OpenAddLinkScreen />
      </Card>
      <Card title="打开事项克隆弹窗" size="small">
        <OpenCloneItemScreen />
      </Card>
      <Card title="打开编辑事项弹窗" size="small">
        <OpenItemEditScreen />
      </Card>
      <Card title="打开卡片详情单页" size="small">
        <OpenItemSinglePage />
      </Card>
      <Card title="打开事项详情浮层" size="small">
        <OpenItemViewScreen />
      </Card>
      <Card title="打开空间内移动事项页面" size="small">
        <OpenMoveItemToWorkspace />
      </Card>
      <Card title="打开移动事项组弹窗" size="small">
        <OpenMoveToItemGroupScreen />
      </Card>
      <Card title="打开更新父事项弹窗" size="small">
        <OpenUpdateAncestorScreen />
      </Card>
    </Space>
  );
};

export default Demo;
