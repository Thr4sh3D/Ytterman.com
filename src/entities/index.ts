import { superdevClient } from "@/lib/superdev/client";

// Create safe entity managers that use the mock client
const createSafeEntity = (entityName: string) => {
  return {
    list: async () => [],
    filter: async () => [],
    get: async () => null,
    create: async () => null,
    update: async () => null,
    delete: async () => null,
    find: async () => null,
    query: () => ({
      where: () => ({ exec: async () => [] }),
      exec: async () => []
    }),
    schema: () => ({}),
    bulkCreate: async () => [],
    batch: () => ({
      create: async () => [],
      update: async () => [],
      delete: async () => []
    })
  };
};

// Create completely safe entity managers
export const BlogPost = createSafeEntity("BlogPost");