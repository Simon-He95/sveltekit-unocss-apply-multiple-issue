import {
  defineConfig,
  transformerDirectives,
  presetUno,
  presetWind,
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
  transformers: [transformerDirectives()],
  extractors: [extractorSvelte()],
  presets: [presetUno(), presetWind()],
});
