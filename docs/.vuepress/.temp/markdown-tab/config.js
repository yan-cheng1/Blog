import { CodeTabs } from "C:/Users/Administrator/Desktop/zhuomian/vuepressBlogDemo/node_modules/.pnpm/@vuepress+plugin-markdown-t_29edbbd65782a0d12a1ed2c39f07ce60/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/Administrator/Desktop/zhuomian/vuepressBlogDemo/node_modules/.pnpm/@vuepress+plugin-markdown-t_29edbbd65782a0d12a1ed2c39f07ce60/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/Administrator/Desktop/zhuomian/vuepressBlogDemo/node_modules/.pnpm/@vuepress+plugin-markdown-t_29edbbd65782a0d12a1ed2c39f07ce60/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
