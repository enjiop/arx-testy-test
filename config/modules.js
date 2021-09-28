export const modules = [
  '@nuxtjs/axios',
  [
    'storyblok-nuxt',
    {
      accessToken: 'ZxuUnJFWgtgnrWDLYbUYWQtt',
      cacheProvider: 'memory',
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
    }
  ],
]
