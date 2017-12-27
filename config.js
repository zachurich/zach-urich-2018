module.exports = {
  title: "Zach Urich",
  endpoints: {
    blog: "http://site.loc/wp-json/custom/v1/posts",
    contact: "http://site.loc/wp-json/custom/v1/contact"
  },
  nav: [
    {
      path: "/writing",
      icon: "pencil",
      name: "Writing"
    },
    {
      path: "/contact",
      icon: "mail",
      name: "Contact",
      modal: true
    },
    {
      path: "http://github.com/zachurich",
      icon: "briefcase",
      name: "Projects",
      external: true
    }
  ],
  links: [
    {
      name: "Twitter",
      url: "http://twitter.com/zach462"
    },
    {
      name: "Github",
      url: "http://github.com/zachurich"
    },
    {
      name: "Instagram",
      url: "http://instagram.com/zachurich"
    },
    {
      name: "Dribbble",
      url: "http://dribbble.com/zachurich"
    }
  ],
  about: `
    <p>
    Currently making things at <a href="https://integritystl.com">Integrity Web Consulting</a>. I’m a developer, but I also enjoy other things, such as drawing, playing & collecting classic video games, & listening to podcasts. I’m also a wanabe anime enthusiest, and a lover of malls.
    </p>
  `
};
