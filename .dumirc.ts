import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'js-roadmap',
    nav: [
      { title: '前端学习', link: '/fe-roadmap/' },
    ],
  },

  // github pages 部署的根目录
  publicPath: '/js-roadmap/',
  base: '/js-roadmap/',
});
