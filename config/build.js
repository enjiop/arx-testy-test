export const build = {
  extend(config, { loaders: { vue } }) {
    vue.transformAssetUrls.img = ['data-src', 'src']
    vue.transformAssetUrls.source = ['data-srcset', 'srcset']
  }
}
