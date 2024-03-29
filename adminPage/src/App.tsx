import React, { useEffect, Suspense, useMemo } from 'react';
import { MemoryRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ConfigProvider, message } from 'antd';
import { PluginSDKContext } from '@giteeteam/plugin-sdk';

const rootElement = 'admin-page-demo';

message.config({
  getContainer: () => document.getElementById(rootElement),
});

import routes from './routes';

interface QiankunContextProps {
  setGlobalState?: (data: { data: any }) => void;
  Parse?: any;
  onRefreshContext?: any;
}

export const QiankunContext = React.createContext({} as QiankunContextProps);

const AppComponent = ({ component }) => {
  const Component = component;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

const GoPropsRoute = props => {
  const navigate = useNavigate();

  useEffect(() => {
    console.info('子应用接收route:', props?.route);
    // 跳转渲染指定的路由
    if (props?.route) {
      navigate(props?.route);
    }
  }, []);

  return null;
};

const App: React.FC = props => {
  const qiankunContextValue: any = useMemo(
    () => ({
      ...props,
    }),
    [props],
  );

  return (
    <PluginSDKContext.Provider value={qiankunContextValue.sdk}>
      <ConfigProvider
        prefixCls={process.env.appKey}
        getPopupContainer={() => document.getElementById(rootElement)}
      >
        <MemoryRouter>
          <GoPropsRoute {...props} />
          <Routes>
            {routes.map(({ path, component }) => (
              <Route path={path} element={<AppComponent component={component} />} key={path} />
            ))}
          </Routes>
        </MemoryRouter>
      </ConfigProvider>
    </PluginSDKContext.Provider>
  );
};

export default App;
