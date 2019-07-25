const path = require("path");
const glob = require("glob");
const fetch = require("node-fetch");

module.exports = {
  async exportPathMap() {
    const pages = {
      "/": { page: "/" },
      "/writing": { page: "/writing" }
    };
    const response = await fetch(
      "https://zachurichblog.cdn.prismic.io/api/v2/documents/search?page=1&pageSize=20&ref=XNjSHBEAACQAeibQ"
    );
    const data = await response.json();
    const posts = data.results.map(post => {
      return {
        [`/writing/${post.uid}`]: {
          page: "/post",
          query: { slug: post.uid }
        }
      };
    });

    posts.forEach(post =>
      Object.entries(post).map(([path, values]) => (pages[path] = values))
    );
    return pages;
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.(svg|png|jpeg)/,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: ["styles", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );
    return config;
  }
};
