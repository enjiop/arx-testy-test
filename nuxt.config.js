import {
  head,
  css,
  plugins,
  components,
  buildModules,
  modules,
  build,
  transition,
  loading,
} from './config'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components,

  transition,

  loading,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build,
}
