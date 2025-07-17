import React from "react";

const Field: React.FC<Record<string, any>> = (props) => {
  const { value, onChange, itemId } = props;

  return <div>custom field</div>;
};

export default Field;
