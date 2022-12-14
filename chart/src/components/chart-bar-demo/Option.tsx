import React, { useRef } from "react";
import { Select } from "antd";

import type { OptionsProps } from "../lib/type";

const barMaxWidthOptions = [
  {
    label: "40",
    value: 40,
  },
  {
    label: "60",
    value: 60,
  },
  {
    label: "80",
    value: 80,
  },
];

const dataCountOptions = [
  {
    label: "3",
    value: 3,
  },
  {
    label: "5",
    value: 5,
  },
  {
    label: "7",
    value: 7,
  },
];

const Option: React.FC<OptionsProps> = ({ setSearchOption, option }) => {
  const optionsRef = useRef<Record<string, any>>(option ?? {});

  const handleChangeOptions = (key: string, value: any) => {
    optionsRef.current[key] = value;
    setSearchOption({ ...optionsRef.current });
  };

  return (
    <div>
      <div>
        <div>barMaxWidth:</div>
        <div>
          <Select
            options={barMaxWidthOptions}
            onChange={(val) => handleChangeOptions("barMaxWidth", val)}
            defaultValue={option.barMaxWidth || 40}
            style={{ width: "100%", margin: "4px 0" }}
          />
        </div>
      </div>
      <div style={{ margin: "16px 0" }}>
        <div>dataCount:</div>
        <div>
          <Select
            options={dataCountOptions}
            onChange={(val) => handleChangeOptions("dataCount", val)}
            defaultValue={option.dataCount || 3}
            style={{ width: "100%", margin: "4px 0" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Option;
