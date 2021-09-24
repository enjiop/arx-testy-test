# arx-design

## Requirements

| Name   | Version |
| ------ | ------- |
| [Node] | > 14.17 |

[node]: https://nodejs.org/en/

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Styles

[Sass](https://github.com/sass/node-sass) is our CSS preprocessor. [Autoprefixer](https://github.com/postcss/autoprefixer) is also included.

#### Architecture

[ITCSS](https://github.com/itcss) is our CSS architecture.

- `settings`: Global variables, site-wide settings, config switches, etc.
- `tools`: Site-wide mixins and functions.
- `generic`: Low-specificity, far-reaching rulesets (e.g. resets).
- `elements`: Unclassed HTML elements (e.g. `a {}`, `blockquote {}`, `address {}`).
- `objects`: Objects, abstractions, and design patterns (e.g. `.o-layout {}`).
- `components`: Discrete, complete chunks of UI (e.g. `.c-carousel {}`).
- `utilities`: High-specificity, very explicit selectors. Overrides and helper
  classes (e.g. `.u-hidden {}`)

#### Namespaces

We namespace our classes for more [transparency](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/).

- `o-`: Object that it may be used in any number of unrelated contexts to the one you can currently see it in. Making modifications to these types of class could potentially have knock-on effects in a lot of other unrelated places.
- `c-`: Component is a concrete, implementation-specific piece of UI. All of the changes you make to its styles should be detectable in the context you’re currently looking at. Modifying these styles should be safe and have no side effects.
- `u-`: Utility has a very specific role (often providing only one declaration) and should not be bound onto or changed. It can be reused and is not tied to any specific piece of UI.
- `s-`: Scope creates a new styling context. Similar to a Theme, but not necessarily cosmetic, these should be used sparingly—they can be open to abuse and lead to poor CSS if not used wisely.
- `is-`, `has-`: Is currently styled a certain way because of a state or condition. It tells us that the DOM currently has a temporary, optional, or short-lived style applied to it due to a certain state being invoked.

[_source_](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#the-namespaces)

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
