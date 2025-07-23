import React from "react";
import { Input } from "antd";

const Field: React.FC<Record<string, any>> = (props) => {
  const { value, onChange, itemId } = props;

  return <Input value={value} onChange={(e) => onChange(e.target.value)} style={{ width: "100%" }} />;
};

export default Field;
