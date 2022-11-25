import React, { useMemo } from "react";

import CommonView from "../common/CommonView";
import {
  CHART_BASIC_COLOR,
  GLOBAL_CHART_GRID,
  GLOBAL_CHART_GRID_VIEW,
  GLOBAL_CHART_TOOLTIP,
} from "../lib/global";
import { ViewProps } from "../lib/type";

const xAxisData = ["item1", "item2", "item3"];
const seriesValue = [
  {
    name: "count",
    type: "bar",
    data: [3, 6, 10],
  },
];

const View: React.FC<ViewProps> = ({ random, option, isListView }) => {
  const id = random ? random : "basic-bar-chart";
  const echartData = useMemo(() => {
    const legend = ["count"];
    const xyData = {
      xAxis: {
        data: xAxisData,
        show: true,
      },
      yAxis: {},
      color: CHART_BASIC_COLOR,
      series: seriesValue,
      barMaxWidth: 40,
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
  }, []);

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
