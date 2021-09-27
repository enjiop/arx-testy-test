import Vue from 'vue'
import { Block } from '@marvr/storyblok-rich-text-types';
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer'
import BaseImage from '@/components/base-image'

Vue.use(VueRichTextRenderer, {
  resolvers: {
    blocks: {
      [Block.IMAGE]: BaseImage
    }
  },
})
