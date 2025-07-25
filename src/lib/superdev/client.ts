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
  functions: {
    generateSitemap: async () => ({ success: true, message: 'Mock sitemap generated' }),
    diagnoseWebsocket: async () => ({ success: true, message: 'Mock websocket diagnosis' }),
    getVersion: async () => ({ version: '1.0.0' }),
    index: async () => ({ success: true }),
    sendContactEmail: async () => ({ success: true, message: 'Mock email sent' }),
    updateBlogPosts: async () => ({ success: true, message: 'Mock blog posts updated' }),
    deleteBlogPosts: async () => ({ success: true, message: 'Mock blog posts deleted' }),
    updateBlogPostImage: async () => ({ success: true, message: 'Mock blog post image updated' })
  },
  initialize: () => Promise.resolve(),
  auth: {
    me: async () => null,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve()
  }
});

// Always use the mock client to prevent any network calls
export const superdevClient = createMockClient();