interface Payload {
  // Define payload here
  itemTypes?: Record<string, any>[];
}

export const runFound = async ({ payload }: { payload: Payload }) => {
  const { itemTypes } = payload;

  // do something

  return { itemTypes };
};
