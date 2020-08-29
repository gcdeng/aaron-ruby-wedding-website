const url = "https://rubysaidyes.netlify.app";
module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Aaron & Ruby Wedding Party",
      description: "Invite you to our wedding party.",
      url,
      ogimage: `${url}/ogimage.jpeg`
    }
  }
};
