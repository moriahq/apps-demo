export const runBeforeDelete = async () => {
  const { item } = global;
  if (item?.key === "TEST") {
    return { code: 119, message: "Item cannot be deleted" };
  }
  return {};
};

export const runSaved = async () => {
  const { item } = global;
  if (item?.key === "TEST") {
    // do something
  }
};
