import { GitContributors } from "C:/Users/Administrator/Desktop/zhuomian/vuepressBlogDemo/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_413d5b7bc839075e26dc8b5faec574fc/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/Administrator/Desktop/zhuomian/vuepressBlogDemo/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_413d5b7bc839075e26dc8b5faec574fc/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
