// Create a completely safe mock client that never makes network calls
const createMockClient = () => ({
  entity: (name: string) => ({
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
  }),
  initialize: () => Promise.resolve(),
  auth: {
    me: async () => null,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve()
  }
});

// Always use the mock client to prevent any network calls
export const superdevClient = createMockClient();