module.exports = {
  title: "Arran France",
  description: "Arran France's Personal Site",
  head: [
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  ],
  themeConfig: {
    search: false,
    lastUpdated: "Last Updated",
    serviceWorker: {
      updatePopup: {
        message: "Changes have been made.",
        buttonText: "Refresh",
      },
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "CV", link: "/cv/" },
      { text: "Blog", link: "https://blog.arranfrance.com" },
      {
        text: "Social",
        items: [
          { text: "Github", link: "https://github.com/arranf" },
          { text: "BlueSky", link: "https://bsky.app/profile/arranfrance.com" },
          { text: "YouTube", link: "https://youtube.com/c/@arranfrance" },
          {
            text: "BoardGameGeek",
            link: "https://boardgamegeek.com/user/Arranf",
          },
        ],
      },
      { text: "Wishlist", link: "https://www.giftster.com/gift/public/fdZd3/" },
      {
        text: "My Collections",
        items: [
          { text: "Board Games", link: "/boardgames/" },
          { text: "RPGs", link: "/rpgs/"},
          { text: "Films", link: "/films/" },
        ],
      },
      {
        text: "Useful Projects",
        items: [
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
  },
};
