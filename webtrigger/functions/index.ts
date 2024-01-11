interface Payload {
  // Define payload here
  page?: string;
}

export const run = async ({ payload }: { payload: Payload }) => {
  const { page } = payload;
  console.log(`page: ${page}`);
  return "This is webtrigger result";
};
