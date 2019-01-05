module.exports = {
    title: 'Arran France',
    description: 'Arran France\'s Personal Site',
    themeConfig: {
      search: false,
      lastUpdated: 'Last Updated',
      serviceWorker: {
        updatePopup: { 
            message: "Changes have been made.", 
            buttonText: "Refresh" 
        }
      },
      nav: [
        { text: 'Home', link: '/' },
        { text: 'CV', link: '/cv/' },
        { text: 'Github', link: 'https://github.com/arranf' },
        { text: 'Twitter', link: 'https://twitter.com/arranf' },
        { text: 'Blog', link: 'https://blog.arranfrance.com' },
      ]
    }
  }
  