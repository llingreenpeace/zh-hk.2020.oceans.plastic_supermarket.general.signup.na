// vue.config.js
module.exports = {
  // options...
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://api.greenpeace.org.hk/2020/plastic_supermarket/"
      : "/"
};
