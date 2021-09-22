<template>
  <page
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
    :stories="stories"
  />
</template>

<script>
export default {
  data() {
    return {
      story: { content: {} },
      stories: []
    }
  },
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge()
      storyblokInstance.on(['input', 'published', 'change'], (event) => {
        if (event.action == 'input') {
          if (event.story.id === this.story.id) {
            this.story.content = event.story.content
          }
        } else {
          this.$nuxt.$router.go({
            path: this.$nuxt.$router.currentRoute,
            force: true,
          })
        }
      })
    }, (error) => {
      console.error(error)
    })
  },
  async asyncData(context) {
    const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path

    try {
      const { data : content } = await context.app.$storyapi.get(`cdn/stories/${fullSlug}`, { version: 'draft' });
      const { data : pages } = await context.app.$storyapi.get("cdn/stories", { version: 'draft' })

      return { story: content.story, stories: pages.stories }
    } catch {
      context.error({ statusCode: 404, message: 'Failed to receive content form api' })
    }

    return null;
  }
}
</script>
