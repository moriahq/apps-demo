import React from 'react';

const routes = [
  {
    path: '/sdkjs',
    component: React.lazy(() => import('../pages/sdk-js/Demo')),
  },
  {
    path: '/sendAction',
    component: React.lazy(() => import('../pages/demo/Demo')),
  },
  {
    path: '/sdkInfo',
    component: React.lazy(() => import('../pages/sdk-info/Demo')),
  },
];

export default routes;
