import React, { CSSProperties, useEffect, useMemo, useRef } from "react";
import { ECharts, init } from "echarts";

import { CommonViewProp } from "../lib/type";

const CommonView: React.FC<CommonViewProp> = (props) => {
  const { echartData, id, option, isListView, isNoData, isLoading } = props;
  const echart = useRef<ECharts>(null);
  const echartContainerStyle = useMemo<CSSProperties>(
    () => ({ opacity: isNoData ? 0 : 1 }),
    [isNoData]
  );

  useEffect(() => {
    const dom = document.getElementById(id);
    if (dom) {
      const echartInstance = init(dom);
      echart.current = echartInstance;
    }
    return () => {
      echart.current?.dispose();
      echart.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isNoData) {
      echart.current?.setOption(echartData, true);
    }
  }, [echartData, isNoData]);

  useEffect(() => {
    echart && echart.current?.resize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [echart.current, option?.w]);

  return (
    <>
      {!isLoading && isNoData ? (
        <div>No data, please modify the chart data configuration</div>
      ) : null}
      <div
        id={id}
        className={"view echarts-view"}
        style={echartContainerStyle}
      />
    </>
  );
};

export default CommonView;
