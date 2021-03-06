import {
  head,
  css,
  plugins,
  components,
  buildModules,
  modules,
  build,
  pageTransition,
  loading,
} from './config'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'universal',
  // ssr: false,

  server: {
    host: '0.0.0.0',
    port: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components,

  pageTransition,

  loading,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build,
}
