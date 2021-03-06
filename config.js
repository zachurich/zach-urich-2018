export const SITE_TITLE = "Zach Urich";
export const SITE_INTRO = "Full Stack Developer and Wanabe Cartoonist.";
export const ENDPOINTS = {
  contact: "/.netlify/functions/contact",
  prismic: "https://zachurichblog.cdn.prismic.io/api/v2",
};
export const SITE_NAV = [
  {
    path: "/writing",
    icon: "pencil",
    name: "Writing",
  },
  {
    path: "/contact",
    icon: "mail",
    name: "Contact",
    modal: true,
  },
  {
    path: "http://github.com/zachurich",
    icon: "briefcase",
    name: "Projects",
    external: true,
  },
];
export const SITE_LINKS = [
  {
    name: "Instagram",
    url: "http://instagram.com/zachurich",
  },
  {
    name: "Github",
    url: "http://github.com/zachurich",
  },
  {
    name: "Dribbble",
    url: "http://dribbble.com/zachurich",
  },
];
export const ABOUT_CONTENT = `
    <p>
      I'm passionate about learning and creating things. Starting out as a designer, 
      I taught myself how to code out of a desire to build my ideas. I fell in love 
      with writing code and currently work as a Software Engineer at <a href="https://envysion.com" target="_blank">Envysion</a>. Sometimes, 
      I 
      <a href="https://www.instagram.com/zacurich/" target="_blank">
        draw</a>,
      <a href="/writing">
        write</a>, and take 
      <a href="https://www.instagram.com/zachurich/" target="_blank">
        cool pictures</a>.

    </p>
  `;

export const WRITING = {
  title: "Sometimes I write things...",
  subtitle: "",
};
