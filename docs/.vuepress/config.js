import { viteBundler } from "@vuepress/bundler-vite";
// import { defaultTheme } from "@vuepress/theme-default";
import { recoTheme } from 'vuepress-theme-reco'
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: recoTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        
      }
    ],
  }),
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
});
