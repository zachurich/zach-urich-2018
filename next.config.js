const path = require("path");
const glob = require("glob");

module.exports = {
  // exportPathMap: function() {
  //   return {
  //     "/": { page: "/" },
  //     "/writing": { page: "/writing" },
  //     "/writing/guidelines-to-keep-in-mind-when-embracing-unknowns": {
  //       page: "/post",
  //       query: { slug: "guidelines-to-keep-in-mind-when-embracing-unknowns" }
  //     },
  //     "/writing/education-and-learning": {
  //       page: "/post",
  //       query: { slug: "education-and-learning" }
  //     }
  //   };
  // },
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
