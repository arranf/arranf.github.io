import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  bundler: webpackBundler({
    postcss: {},
    vue: {},
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  title: "Arran France",
  description: "Arran France's Personal Site",
  head: [
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  ],
  markdown: {
    anchor: false
  },
  theme: defaultTheme({
      themePlugins: {
        copyCode: false,
        prismjs: false,
        backToTop: {
          progress: false
        }
      },
      hostname: "https://arranfrance.com",
      colorMode: 'light',
      contributors: false,
      lastUpdated: true,
      editLink: false,
      sidebar: false,
      navbar: [
        { text: "Home", link: "/" },
        { text: "CV", link: "/cv/" },
        { text: "Blog", link: "https://blog.arranfrance.com" },
        {
          text: "Social",
          children: [
            {
              text: "BoardGameGeek",
              link: "https://boardgamegeek.com/user/Arranf",
            },
            { text: "Github", link: "https://github.com/arranf" },
            { text: "YouTube", link: "https://youtube.com/c/@arranfrance" },
          ],
        },
        { text: "Wishlist", link: "https://www.giftster.com/gift/public/fdZd3/" },
        {
          text: "My Collections",
          children: [
            { text: "Board Games", link: "/boardgames/" },
            { text: "RPGs", link: "/rpgs/"},
            { text: "Films", link: "/films/" },
          ],
        },
        {
          text: "Useful Projects",
          children: [
            {
              text: "Millennium Blades Store Builder",
              link: "https://timetoduel.app/",
            },
            {
              text: "Descent 2E Monster Selector",
              link: "https://descent.arranfrance.com/",
            },
            {
              text: "Mork Borg Character Sheet",
              link: "https://morkborg.arranfrance.com/",
            },
            {
              text: "Valinde",
              link: "https://valinde.com",
            },
          ],
        },
      ],
    })
})