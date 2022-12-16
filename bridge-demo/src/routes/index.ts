import React from 'react';

const routes = [
  {
    path: '/sdkjs',
    component: React.lazy(() => import('../pages/sdk-js/Demo')),
    exact: true,
  },
  {
    path: '/sendAction',
    component: React.lazy(() => import('../pages/demo/Demo')),
    exact: true,
  },
  {
    path: '/sdkInfo',
    component: React.lazy(() => import('../pages/sdk-info/Demo')),
    exact: true,
  },
];

export default routes;
