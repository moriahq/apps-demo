import React, { useMemo } from "react";

import CommonView from "../common/CommonView";
import {
  CHART_BASIC_COLOR,
  GLOBAL_CHART_GRID,
  GLOBAL_CHART_GRID_VIEW,
  GLOBAL_CHART_TOOLTIP,
} from "../lib/global";
import { ViewProps } from "../lib/type";

const generateData = (count: number) => {
  const data = [];
  const xAxisData = [];
  for (let i = 1; i <= count; ++i) {
    xAxisData.push(`item${i}`);
    data.push(Math.abs(Math.floor(2 * (count / 2 - i))));
  }
  return [data, xAxisData];
};

const View: React.FC<ViewProps> = ({ random, option, isListView }) => {
  const id = random ? random : "basic-bar-chart";

  const echartData = useMemo(() => {
    const legend = ["num"];

    const barMaxWidth = option.barMaxWidth || 40;
    const [data, xAxisData] = generateData(option.dataCount || 3);

    const seriesValue = [
      {
        name: "num",
        type: "bar",
        data,
      },
    ];

    const xyData = {
      xAxis: {
        data: xAxisData,
        show: true,
      },
      yAxis: {},
      color: CHART_BASIC_COLOR,
      series: seriesValue,
      barMaxWidth,
      legend: {
        data: legend,
        show: !isListView,
      },
      grid: isListView ? GLOBAL_CHART_GRID_VIEW : GLOBAL_CHART_GRID,
      label: {
        show: true,
        // rotate: 70,
        position: "top",
        // 距离图形元素的距离,当 position 为字符描述值（如 'top'、'insideRight'）时候有效
        distance: 20,
        verticalAlign: "middle",
        // 数值样式
        textStyle: {
          color: "black",
          fontSize: 12,
        },
      },
    };
    return {
      ...xyData,
      ...GLOBAL_CHART_TOOLTIP,
    };
  }, [option]);

  return (
    <CommonView
      echartData={echartData}
      id={id}
      option={option}
      isListView={isListView}
    />
  );
};

export default View;
