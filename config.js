module.exports = {
  title: "Zach Urich",
  intro: "Front-end developer & designer building things on the web.",
  endpoints: {
    blog: "http://wp.zachurichblog.site/wp-json/custom/v1/posts",
    contact: "http://wp.zachurichblog.site/wp-json/custom/v1/contact"
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
      I'm passionate about learning and creating things. Being a designer at heart, I do what it takes
      to create user-friendly applications and sites on the web through writing modern, thoughtful code and following
      best practices. In my downtime, I'm <a href="/writing">writing</a>, <a href="https://github.com/zachurich">coding</a>, <a href="https://dribbble.com/zachurich">designing</a>, and other things that humans do.  
    </p>
  `
};
