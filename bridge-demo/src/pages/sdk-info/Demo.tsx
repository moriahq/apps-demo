import React from 'react';
import { useSDK } from '@giteeteam/plugin-sdk';

const Demo: React.FC = () => {
  const sdk = useSDK();

  return (
    <div>
      <p>frame: {JSON.stringify(sdk.frame)}</p>
      <p>context: {JSON.stringify(sdk.context)}</p>
    </div>
  );
};

export default Demo;
