// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import docsearchPlugin from "@vuepress/plugin-docsearch";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar([
  "/",
  { text: "Demo", icon: "discover", link: "/demo/" },
  {
    text: "Guide",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }]
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }]
      }
    ]
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/"
  }
]);

// src/.vuepress/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";
var zhNavbar = navbar2([
  "/zh/",
  { text: "\u6848\u4F8B", icon: "discover", link: "/zh/demo/" },
  {
    text: "\u6307\u5357",
    icon: "creative",
    prefix: "/zh/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }]
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }]
      }
    ]
  },
  {
    text: "V2 \u6587\u6863",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/"
  }
]);

// src/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "Docs",
      icon: "note",
      prefix: "guide/",
      children: "structure"
    },
    "slides"
  ]
});

// src/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
var zhSidebar = sidebar2({
  "/zh/": [
    "",
    {
      icon: "discover",
      text: "\u6848\u4F8B",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "\u6587\u6863",
      icon: "note",
      prefix: "guide/",
      children: "structure"
    },
    "slides"
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  author: {
    name: "Mr.Hope",
    url: "https://mrhope.site"
  },
  iconAssets: "iconfont",
  logo: "/logo.svg",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "demo/theme-docs/src",
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  locales: {
    "/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer: "Default footer",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub"
      }
    },
    "/zh/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "\u9ED8\u8BA4\u9875\u811A",
      displayFooter: true,
      metaLocales: {
        editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
      }
    }
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"]
    }
  },
  plugins: {
    comment: {
      provider: "Waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app"
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    }
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  dest: "dist",
  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "\u6587\u6863\u6F14\u793A",
      description: "vuepress-theme-hope \u7684\u6587\u6863\u6F14\u793A"
    }
  },
  theme: theme_default,
  plugins: [
    docsearchPlugin({
      appId: "LDBQGQC8Q9",
      apiKey: "5c3a7145aeba231c3b85b742d24fc24f",
      indexName: "mrhope",
      locales: {
        "/": {
          placeholder: "Search docs",
          translations: {
            button: {
              buttonText: "Search",
              buttonAriaLabel: "label"
            },
            modal: {
              searchBox: {
                resetButtonTitle: "modal",
                resetButtonAriaLabel: "reset",
                cancelButtonText: "cancel",
                cancelButtonAriaLabel: "lable"
              },
              startScreen: {
                recentSearchesTitle: "welcome",
                noRecentSearchesText: "no search",
                saveRecentSearchButtonTitle: "save button",
                removeRecentSearchButtonTitle: "remove search",
                favoriteSearchesTitle: "favorite",
                removeFavoriteSearchButtonTitle: "remove"
              },
              errorScreen: {
                titleText: "No text",
                helpText: "Try again"
              },
              footer: {
                selectText: "Hello footer",
                navigateText: "Hello footer",
                closeText: "Hello footer",
                searchByText: "Hello footer"
              },
              noResultsScreen: {
                noResultsText: "No results",
                suggestedQueryText: "try again",
                reportMissingResultsText: "Something missing",
                reportMissingResultsLinkText: "hello report"
              }
            }
          }
        }
      }
    })
  ],
  shouldPrefetch: false
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci96aC50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2JldmVsb3Blci9EZXNrdG9wL3Byb2plY3RzL3prc3luYy13ZWItdjItZG9jcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYmV2ZWxvcGVyL0Rlc2t0b3AvcHJvamVjdHMvemtzeW5jLXdlYi12Mi1kb2NzL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9iZXZlbG9wZXIvRGVza3RvcC9wcm9qZWN0cy96a3N5bmMtd2ViLXYyLWRvY3Mvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgZG9jc2VhcmNoUGx1Z2luIGZyb20gXCJAdnVlcHJlc3MvcGx1Z2luLWRvY3NlYXJjaFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBkZXN0OiBcImRpc3RcIixcblxuICBsb2NhbGVzOiB7XG4gICAgXCIvXCI6IHtcbiAgICAgIGxhbmc6IFwiZW4tVVNcIixcbiAgICAgIHRpdGxlOiBcIkRvY3MgRGVtb1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQSBkb2NzIGRlbW8gZm9yIHZ1ZXByZXNzLXRoZW1lLWhvcGVcIixcbiAgICB9LFxuICAgIFwiL3poL1wiOiB7XG4gICAgICBsYW5nOiBcInpoLUNOXCIsXG4gICAgICB0aXRsZTogXCJcdTY1ODdcdTY4NjNcdTZGMTRcdTc5M0FcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUgXHU3Njg0XHU2NTg3XHU2ODYzXHU2RjE0XHU3OTNBXCIsXG4gICAgfSxcbiAgfSxcblxuICB0aGVtZSxcblxuICBwbHVnaW5zOiBbXG4gICAgZG9jc2VhcmNoUGx1Z2luKHtcbiAgICAgIGFwcElkOiBcIkxEQlFHUUM4UTlcIixcbiAgICAgIGFwaUtleTogXCI1YzNhNzE0NWFlYmEyMzFjM2I4NWI3NDJkMjRmYzI0ZlwiLFxuICAgICAgaW5kZXhOYW1lOiBcIm1yaG9wZVwiLFxuICAgICAgbG9jYWxlczoge1xuICAgICAgICBcIi9cIjoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBkb2NzXCIsXG4gICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJTZWFyY2hcIixcbiAgICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiBcImxhYmVsXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgc2VhcmNoQm94OiB7XG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uQXJpYUxhYmVsOiBcInJlc2V0XCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJjYW5jZWxcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6IFwibGFibGVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3RhcnRTY3JlZW46IHtcbiAgICAgICAgICAgICAgICByZWNlbnRTZWFyY2hlc1RpdGxlOiBcIndlbGNvbWVcIixcbiAgICAgICAgICAgICAgICBub1JlY2VudFNlYXJjaGVzVGV4dDogXCJubyBzZWFyY2hcIixcbiAgICAgICAgICAgICAgICBzYXZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6IFwic2F2ZSBidXR0b25cIixcbiAgICAgICAgICAgICAgICByZW1vdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogXCJyZW1vdmUgc2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgZmF2b3JpdGVTZWFyY2hlc1RpdGxlOiBcImZhdm9yaXRlXCIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlRmF2b3JpdGVTZWFyY2hCdXR0b25UaXRsZTogXCJyZW1vdmVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3JTY3JlZW46IHtcbiAgICAgICAgICAgICAgICB0aXRsZVRleHQ6IFwiTm8gdGV4dFwiLFxuICAgICAgICAgICAgICAgIGhlbHBUZXh0OiBcIlRyeSBhZ2FpblwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RUZXh0OiBcIkhlbGxvIGZvb3RlclwiLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogXCJIZWxsbyBmb290ZXJcIixcbiAgICAgICAgICAgICAgICBjbG9zZVRleHQ6IFwiSGVsbG8gZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgc2VhcmNoQnlUZXh0OiBcIkhlbGxvIGZvb3RlclwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBub1Jlc3VsdHNTY3JlZW46IHtcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiBcIk5vIHJlc3VsdHNcIixcbiAgICAgICAgICAgICAgICBzdWdnZXN0ZWRRdWVyeVRleHQ6IFwidHJ5IGFnYWluXCIsXG4gICAgICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0OiBcIlNvbWV0aGluZyBtaXNzaW5nXCIsXG4gICAgICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogXCJoZWxsbyByZXBvcnRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG5cbiAgc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9iZXZlbG9wZXIvRGVza3RvcC9wcm9qZWN0cy96a3N5bmMtd2ViLXYyLWRvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2JldmVsb3Blci9EZXNrdG9wL3Byb2plY3RzL3prc3luYy13ZWItdjItZG9jcy9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9iZXZlbG9wZXIvRGVza3RvcC9wcm9qZWN0cy96a3N5bmMtd2ViLXYyLWRvY3Mvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5pbXBvcnQgeyBlbk5hdmJhciwgemhOYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGVuU2lkZWJhciwgemhTaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhci9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xuICBob3N0bmFtZTogXCJodHRwczovL3Z1ZXByZXNzLXRoZW1lLWhvcGUtZG9jcy1kZW1vLm5ldGxpZnkuYXBwXCIsXG5cbiAgYXV0aG9yOiB7XG4gICAgbmFtZTogXCJNci5Ib3BlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vbXJob3BlLnNpdGVcIixcbiAgfSxcblxuICBpY29uQXNzZXRzOiBcImljb25mb250XCIsXG5cbiAgbG9nbzogXCIvbG9nby5zdmdcIixcblxuICByZXBvOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUvdnVlcHJlc3MtdGhlbWUtaG9wZVwiLFxuXG4gIGRvY3NEaXI6IFwiZGVtby90aGVtZS1kb2NzL3NyY1wiLFxuXG4gIHBhZ2VJbmZvOiBbXCJBdXRob3JcIiwgXCJPcmlnaW5hbFwiLCBcIkRhdGVcIiwgXCJDYXRlZ29yeVwiLCBcIlRhZ1wiLCBcIlJlYWRpbmdUaW1lXCJdLFxuXG4gIGxvY2FsZXM6IHtcbiAgICBcIi9cIjoge1xuICAgICAgLy8gbmF2YmFyXG4gICAgICBuYXZiYXI6IGVuTmF2YmFyLFxuXG4gICAgICAvLyBzaWRlYmFyXG4gICAgICBzaWRlYmFyOiBlblNpZGViYXIsXG5cbiAgICAgIGZvb3RlcjogXCJEZWZhdWx0IGZvb3RlclwiLFxuXG4gICAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gICAgICBtZXRhTG9jYWxlczoge1xuICAgICAgICBlZGl0TGluazogXCJFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWJcIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoaW5lc2UgbG9jYWxlIGNvbmZpZ1xuICAgICAqL1xuICAgIFwiL3poL1wiOiB7XG4gICAgICAvLyBuYXZiYXJcbiAgICAgIG5hdmJhcjogemhOYXZiYXIsXG5cbiAgICAgIC8vIHNpZGViYXJcbiAgICAgIHNpZGViYXI6IHpoU2lkZWJhcixcblxuICAgICAgZm9vdGVyOiBcIlx1OUVEOFx1OEJBNFx1OTg3NVx1ODExQVwiLFxuXG4gICAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gICAgICAvLyBwYWdlIG1ldGFcbiAgICAgIG1ldGFMb2NhbGVzOiB7XG4gICAgICAgIGVkaXRMaW5rOiBcIlx1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgZW5jcnlwdDoge1xuICAgIGNvbmZpZzoge1xuICAgICAgXCIvZGVtby9lbmNyeXB0Lmh0bWxcIjogW1wiMTIzNFwiXSxcbiAgICAgIFwiL3poL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXG4gICAgfSxcbiAgfSxcblxuICBwbHVnaW5zOiB7XG4gICAgLy8gSWYgeW91IGRvblx1MjAxOXQgbmVlZCBjb21tZW50IGZlYXR1cmUsIHlvdSBjYW4gcmVtb3ZlIGZvbGxvd2luZyBvcHRpb25cbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvbmZpZyBpcyBmb3IgZGVtbyBPTkxZLCBpZiB5b3UgbmVlZCBjb21tZW50IGZlYXR1cmUsIHBsZWFzZSBnZW5lcmF0ZSBhbmQgdXNlIHlvdXIgb3duIGNvbmZpZywgc2VlIGNvbW1lbnQgcGx1Z2luIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMuXG4gICAgLy8gVG8gYXZvaWQgZGlzdHVyYmluZyB0aGUgdGhlbWUgZGV2ZWxvcGVyIGFuZCBjb25zdW1pbmcgaGlzIHJlc291cmNlcywgcGxlYXNlIERPIE5PVCB1c2UgdGhlIGZvbGxvd2luZyBjb25maWcgZGlyZWN0bHkgaW4geW91ciBwcm9kdWN0aW9uIGVudmlyb25tZW50ISEhISFcbiAgICBjb21tZW50OiB7XG4gICAgICAvKipcbiAgICAgICAqIFVzaW5nIEdpc2N1c1xuICAgICAgICovXG4gICAgICAvLyBwcm92aWRlcjogXCJHaXNjdXNcIixcbiAgICAgIC8vIHJlcG86IFwidnVlcHJlc3MtdGhlbWUtaG9wZS9naXNjdXMtZGlzY3Vzc2lvbnNcIixcbiAgICAgIC8vIHJlcG9JZDogXCJSX2tnRE9HX1B0MkFcIixcbiAgICAgIC8vIGNhdGVnb3J5OiBcIkFubm91bmNlbWVudHNcIixcbiAgICAgIC8vIGNhdGVnb3J5SWQ6IFwiRElDX2t3RE9HX1B0Mk00Q09ENjlcIixcblxuICAgICAgLyoqXG4gICAgICAgKiBVc2luZyBUd2lrb29cbiAgICAgICAqL1xuICAgICAgLy8gcHJvdmlkZXI6IFwiVHdpa29vXCIsXG4gICAgICAvLyBlbnZJZDogXCJodHRwczovL3R3aWtvby5jY2tuYmMudmVyY2VsLmFwcFwiLFxuXG4gICAgICAvKipcbiAgICAgICAqIFVzaW5nIFdhbGluZVxuICAgICAgICovXG4gICAgICBwcm92aWRlcjogXCJXYWxpbmVcIixcbiAgICAgIHNlcnZlclVSTDogXCJodHRwczovL3Z1ZXByZXNzLXRoZW1lLWhvcGUtY29tbWVudC52ZXJjZWwuYXBwXCIsXG4gICAgfSxcblxuICAgIC8vIERpc2FibGUgZmVhdHVyZXMgeW91IGRvblx1MjAxOXQgd2FudCBoZXJlXG4gICAgbWRFbmhhbmNlOiB7XG4gICAgICBhbGlnbjogdHJ1ZSxcbiAgICAgIGF0dHJzOiB0cnVlLFxuICAgICAgY2hhcnQ6IHRydWUsXG4gICAgICBjb2RldGFiczogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgIGRlbW86IHRydWUsXG4gICAgICBlY2hhcnRzOiB0cnVlLFxuICAgICAgZmlndXJlOiB0cnVlLFxuICAgICAgZmxvd2NoYXJ0OiB0cnVlLFxuICAgICAgZ2ZtOiB0cnVlLFxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXG4gICAgICBpbWdTaXplOiB0cnVlLFxuICAgICAgaW5jbHVkZTogdHJ1ZSxcbiAgICAgIGthdGV4OiB0cnVlLFxuICAgICAgbWFyazogdHJ1ZSxcbiAgICAgIG1lcm1haWQ6IHRydWUsXG4gICAgICBwbGF5Z3JvdW5kOiB7XG4gICAgICAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxuICAgICAgfSxcbiAgICAgIHByZXNlbnRhdGlvbjoge1xuICAgICAgICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxuICAgICAgfSxcbiAgICAgIHN0eWxpemU6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1hdGNoZXI6IFwiUmVjb21tZW5kZWRcIixcbiAgICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YWcgPT09IFwiZW1cIilcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiQmFkZ2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRpcFwiIH0sXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc3ViOiB0cnVlLFxuICAgICAgc3VwOiB0cnVlLFxuICAgICAgdGFiczogdHJ1ZSxcbiAgICAgIHZQcmU6IHRydWUsXG4gICAgICB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxuICAgIH0sXG5cbiAgICAvLyB1bmNvbW1lbnQgdGhlc2UgaWYgeW91IHdhbnQgYSBwd2FcbiAgICAvLyBwd2E6IHtcbiAgICAvLyAgIGZhdmljb246IFwiL2Zhdmljb24uaWNvXCIsXG4gICAgLy8gICBjYWNoZUhUTUw6IHRydWUsXG4gICAgLy8gICBjYWNoZVBpYzogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZEJhc2U6IHRydWUsXG4gICAgLy8gICBhcHBsZToge1xuICAgIC8vICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcbiAgICAvLyAgICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtc1RpbGU6IHtcbiAgICAvLyAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZ1wiLFxuICAgIC8vICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbWFuaWZlc3Q6IHtcbiAgICAvLyAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgICBzaG9ydGN1dHM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBuYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgdXJsOiBcIi9kZW1vL1wiLFxuICAgIC8vICAgICAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbWFza2FibGUucG5nXCIsXG4gICAgLy8gICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9ndWlkZS1tb25vY2hyb21lLnBuZ1wiLFxuICAgIC8vICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgICAgICBwdXJwb3NlOiBcIm1vbm9jaHJvbWVcIixcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9iZXZlbG9wZXIvRGVza3RvcC9wcm9qZWN0cy96a3N5bmMtd2ViLXYyLWRvY3Mvc3JjLy52dWVwcmVzcy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9iZXZlbG9wZXIvRGVza3RvcC9wcm9qZWN0cy96a3N5bmMtd2ViLXYyLWRvY3Mvc3JjLy52dWVwcmVzcy9uYXZiYXIvZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2JldmVsb3Blci9EZXNrdG9wL3Byb2plY3RzL3prc3luYy13ZWItdjItZG9jcy9zcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCBlbk5hdmJhciA9IG5hdmJhcihbXG4gIFwiL1wiLFxuICB7IHRleHQ6IFwiRGVtb1wiLCBpY29uOiBcImRpc2NvdmVyXCIsIGxpbms6IFwiL2RlbW8vXCIgfSxcbiAge1xuICAgIHRleHQ6IFwiR3VpZGVcIixcbiAgICBpY29uOiBcImNyZWF0aXZlXCIsXG4gICAgcHJlZml4OiBcIi9ndWlkZS9cIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkJhclwiLFxuICAgICAgICBpY29uOiBcImNyZWF0aXZlXCIsXG4gICAgICAgIHByZWZpeDogXCJiYXIvXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXCJiYXpcIiwgeyB0ZXh0OiBcIi4uLlwiLCBpY29uOiBcIm1vcmVcIiwgbGluazogXCJcIiB9XSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiRm9vXCIsXG4gICAgICAgIGljb246IFwiY29uZmlnXCIsXG4gICAgICAgIHByZWZpeDogXCJmb28vXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXCJyYXlcIiwgeyB0ZXh0OiBcIi4uLlwiLCBpY29uOiBcIm1vcmVcIiwgbGluazogXCJcIiB9XSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiVjIgRG9jc1wiLFxuICAgIGljb246IFwibm90ZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLmdpdGh1Yi5pby92Mi9cIixcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYmV2ZWxvcGVyL0Rlc2t0b3AvcHJvamVjdHMvemtzeW5jLXdlYi12Mi1kb2NzL3NyYy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYmV2ZWxvcGVyL0Rlc2t0b3AvcHJvamVjdHMvemtzeW5jLXdlYi12Mi1kb2NzL3NyYy8udnVlcHJlc3MvbmF2YmFyL3poLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9iZXZlbG9wZXIvRGVza3RvcC9wcm9qZWN0cy96a3N5bmMtd2ViLXYyLWRvY3Mvc3JjLy52dWVwcmVzcy9uYXZiYXIvemgudHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgemhOYXZiYXIgPSBuYXZiYXIoW1xuICBcIi96aC9cIixcbiAgeyB0ZXh0OiBcIlx1Njg0OFx1NEY4QlwiLCBpY29uOiBcImRpc2NvdmVyXCIsIGxpbms6IFwiL3poL2RlbW8vXCIgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU2MzA3XHU1MzU3XCIsXG4gICAgaWNvbjogXCJjcmVhdGl2ZVwiLFxuICAgIHByZWZpeDogXCIvemgvZ3VpZGUvXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJCYXJcIixcbiAgICAgICAgaWNvbjogXCJjcmVhdGl2ZVwiLFxuICAgICAgICBwcmVmaXg6IFwiYmFyL1wiLFxuICAgICAgICBjaGlsZHJlbjogW1wiYmF6XCIsIHsgdGV4dDogXCIuLi5cIiwgaWNvbjogXCJtb3JlXCIsIGxpbms6IFwiXCIgfV0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkZvb1wiLFxuICAgICAgICBpY29uOiBcImNvbmZpZ1wiLFxuICAgICAgICBwcmVmaXg6IFwiZm9vL1wiLFxuICAgICAgICBjaGlsZHJlbjogW1wicmF5XCIsIHsgdGV4dDogXCIuLi5cIiwgaWNvbjogXCJtb3JlXCIsIGxpbms6IFwiXCIgfV0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlYyIFx1NjU4N1x1Njg2M1wiLFxuICAgIGljb246IFwibm90ZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLmdpdGh1Yi5pby92Mi96aC9cIixcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYmV2ZWxvcGVyL0Rlc2t0b3AvcHJvamVjdHMvemtzeW5jLXdlYi12Mi1kb2NzL3NyYy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2JldmVsb3Blci9EZXNrdG9wL3Byb2plY3RzL3prc3luYy13ZWItdjItZG9jcy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2JldmVsb3Blci9EZXNrdG9wL3Byb2plY3RzL3prc3luYy13ZWItdjItZG9jcy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IGVuU2lkZWJhciA9IHNpZGViYXIoe1xuICBcIi9cIjogW1xuICAgIFwiXCIsXG4gICAge1xuICAgICAgaWNvbjogXCJkaXNjb3ZlclwiLFxuICAgICAgdGV4dDogXCJEZW1vXCIsXG4gICAgICBwcmVmaXg6IFwiZGVtby9cIixcbiAgICAgIGxpbms6IFwiZGVtby9cIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJEb2NzXCIsXG4gICAgICBpY29uOiBcIm5vdGVcIixcbiAgICAgIHByZWZpeDogXCJndWlkZS9cIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gICAgXCJzbGlkZXNcIixcbiAgXSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYmV2ZWxvcGVyL0Rlc2t0b3AvcHJvamVjdHMvemtzeW5jLXdlYi12Mi1kb2NzL3NyYy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2JldmVsb3Blci9EZXNrdG9wL3Byb2plY3RzL3prc3luYy13ZWItdjItZG9jcy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2JldmVsb3Blci9EZXNrdG9wL3Byb2plY3RzL3prc3luYy13ZWItdjItZG9jcy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvemgudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IHpoU2lkZWJhciA9IHNpZGViYXIoe1xuICBcIi96aC9cIjogW1xuICAgIFwiXCIsXG4gICAge1xuICAgICAgaWNvbjogXCJkaXNjb3ZlclwiLFxuICAgICAgdGV4dDogXCJcdTY4NDhcdTRGOEJcIixcbiAgICAgIHByZWZpeDogXCJkZW1vL1wiLFxuICAgICAgbGluazogXCJkZW1vL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1NjU4N1x1Njg2M1wiLFxuICAgICAgaWNvbjogXCJub3RlXCIsXG4gICAgICBwcmVmaXg6IFwiZ3VpZGUvXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIFwic2xpZGVzXCIsXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFcsU0FBUyx3QkFBd0I7QUFDL1ksT0FBTyxxQkFBcUI7OztBQ0RnVixTQUFTLGlCQUFpQjs7O0FDQVgsU0FBUyxjQUFjO0FBRTNZLElBQU0sV0FBVyxPQUFPO0FBQUEsRUFDN0I7QUFBQSxFQUNBLEVBQUUsTUFBTSxRQUFRLE1BQU0sWUFBWSxNQUFNLFNBQVM7QUFBQSxFQUNqRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFVBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxPQUFPLE1BQU0sUUFBUSxNQUFNLEdBQUcsQ0FBQztBQUFBLE1BQzNEO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLE9BQU8sTUFBTSxRQUFRLE1BQU0sR0FBRyxDQUFDO0FBQUEsTUFDM0Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzs7O0FDN0IwWCxTQUFTLFVBQUFBLGVBQWM7QUFFM1ksSUFBTSxXQUFXQyxRQUFPO0FBQUEsRUFDN0I7QUFBQSxFQUNBLEVBQUUsTUFBTSxnQkFBTSxNQUFNLFlBQVksTUFBTSxZQUFZO0FBQUEsRUFDbEQ7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sT0FBTyxNQUFNLFFBQVEsTUFBTSxHQUFHLENBQUM7QUFBQSxNQUMzRDtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFVBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxPQUFPLE1BQU0sUUFBUSxNQUFNLEdBQUcsQ0FBQztBQUFBLE1BQzNEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7OztBQzdCNlgsU0FBUyxlQUFlO0FBRS9ZLElBQU0sWUFBWSxRQUFRO0FBQUEsRUFDL0IsS0FBSztBQUFBLElBQ0g7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUNwQjZYLFNBQVMsV0FBQUMsZ0JBQWU7QUFFL1ksSUFBTSxZQUFZQyxTQUFRO0FBQUEsRUFDL0IsUUFBUTtBQUFBLElBQ047QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUpoQkQsSUFBTyxnQkFBUSxVQUFVO0FBQUEsRUFDdkIsVUFBVTtBQUFBLEVBRVYsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUVBLFlBQVk7QUFBQSxFQUVaLE1BQU07QUFBQSxFQUVOLE1BQU07QUFBQSxFQUVOLFNBQVM7QUFBQSxFQUVULFVBQVUsQ0FBQyxVQUFVLFlBQVksUUFBUSxZQUFZLE9BQU8sYUFBYTtBQUFBLEVBRXpFLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUVILFFBQVE7QUFBQSxNQUdSLFNBQVM7QUFBQSxNQUVULFFBQVE7QUFBQSxNQUVSLGVBQWU7QUFBQSxNQUVmLGFBQWE7QUFBQSxRQUNYLFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLElBS0EsUUFBUTtBQUFBLE1BRU4sUUFBUTtBQUFBLE1BR1IsU0FBUztBQUFBLE1BRVQsUUFBUTtBQUFBLE1BRVIsZUFBZTtBQUFBLE1BR2YsYUFBYTtBQUFBLFFBQ1gsVUFBVTtBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsUUFBUTtBQUFBLE1BQ04sc0JBQXNCLENBQUMsTUFBTTtBQUFBLE1BQzdCLHlCQUF5QixDQUFDLE1BQU07QUFBQSxJQUNsQztBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUlQLFNBQVM7QUFBQSxNQW1CUCxVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsSUFDYjtBQUFBLElBR0EsV0FBVztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLE1BQ0wsYUFBYTtBQUFBLE1BQ2IsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLFFBQ1YsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3ZCO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDWixTQUFTLENBQUMsYUFBYSxRQUFRLFVBQVUsU0FBUyxNQUFNO0FBQUEsTUFDMUQ7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxVQUFVLENBQUMsRUFBRSxJQUFJLE1BQU07QUFDckIsZ0JBQUksUUFBUTtBQUNWLHFCQUFPO0FBQUEsZ0JBQ0wsS0FBSztBQUFBLGdCQUNMLE9BQU8sRUFBRSxNQUFNLE1BQU07QUFBQSxnQkFDckIsU0FBUztBQUFBLGNBQ1g7QUFBQSxVQUNKO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGVBQWU7QUFBQSxJQUNqQjtBQUFBLEVBZ0VGO0FBQ0YsQ0FBQzs7O0FEck1ELElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBRU4sU0FBUztBQUFBLElBQ1AsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBRUE7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLGdCQUFnQjtBQUFBLE1BQ2QsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLFFBQ1AsS0FBSztBQUFBLFVBQ0gsYUFBYTtBQUFBLFVBQ2IsY0FBYztBQUFBLFlBQ1osUUFBUTtBQUFBLGNBQ04sWUFBWTtBQUFBLGNBQ1osaUJBQWlCO0FBQUEsWUFDbkI7QUFBQSxZQUNBLE9BQU87QUFBQSxjQUNMLFdBQVc7QUFBQSxnQkFDVCxrQkFBa0I7QUFBQSxnQkFDbEIsc0JBQXNCO0FBQUEsZ0JBQ3RCLGtCQUFrQjtBQUFBLGdCQUNsQix1QkFBdUI7QUFBQSxjQUN6QjtBQUFBLGNBQ0EsYUFBYTtBQUFBLGdCQUNYLHFCQUFxQjtBQUFBLGdCQUNyQixzQkFBc0I7QUFBQSxnQkFDdEIsNkJBQTZCO0FBQUEsZ0JBQzdCLCtCQUErQjtBQUFBLGdCQUMvQix1QkFBdUI7QUFBQSxnQkFDdkIsaUNBQWlDO0FBQUEsY0FDbkM7QUFBQSxjQUNBLGFBQWE7QUFBQSxnQkFDWCxXQUFXO0FBQUEsZ0JBQ1gsVUFBVTtBQUFBLGNBQ1o7QUFBQSxjQUNBLFFBQVE7QUFBQSxnQkFDTixZQUFZO0FBQUEsZ0JBQ1osY0FBYztBQUFBLGdCQUNkLFdBQVc7QUFBQSxnQkFDWCxjQUFjO0FBQUEsY0FDaEI7QUFBQSxjQUNBLGlCQUFpQjtBQUFBLGdCQUNmLGVBQWU7QUFBQSxnQkFDZixvQkFBb0I7QUFBQSxnQkFDcEIsMEJBQTBCO0FBQUEsZ0JBQzFCLDhCQUE4QjtBQUFBLGNBQ2hDO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVBLGdCQUFnQjtBQUNsQixDQUFDOyIsCiAgIm5hbWVzIjogWyJuYXZiYXIiLCAibmF2YmFyIiwgInNpZGViYXIiLCAic2lkZWJhciJdCn0K