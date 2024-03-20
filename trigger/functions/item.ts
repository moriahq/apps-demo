interface Payload {
  // Define payload here
  item?: Record<string, any>;
}

export const runBeforeDelete = async ({ payload }: { payload: Payload }) => {
  const { item } = payload;
  if (item?.key === "TEST") {
    return { code: 119, message: "Item cannot be deleted" };
  }
  return {};
};

export const runSaved = async ({ payload }: { payload: Payload }) => {
  const { item } = payload;
  if (item?.key === "TEST") {
    // do something
  }
};
