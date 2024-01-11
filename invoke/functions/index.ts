import { Resolver } from "@giteeteam/apps-api";

const resolver = new Resolver();

resolver.define("increment", async ({ payload }) => {
  const { count } = payload;
  return { count: count + 1 };
});

export const handler = resolver.getDefinitions();
