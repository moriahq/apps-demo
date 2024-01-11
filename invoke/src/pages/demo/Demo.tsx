import React, { useState } from "react";
import { Button } from "antd";
import { invoke } from "@giteeteam/plugin-sdk";
import cx from "./Demo.less";

const Demo: React.FC = () => {
  const [count, setCount] = useState(1);
  const handleClick = async () => {
    const res = await invoke("increment", { count });
    setCount(res.count);
  };
  return (
    <div>
      <h2 className={cx("title")}>CSS Modules Test</h2>
      <Button onClick={handleClick}>加一</Button>
      <div>count:{count}</div>
    </div>
  );
};

export default Demo;
