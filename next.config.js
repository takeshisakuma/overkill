module.exports = {
  assetPrefix: "/overkill",
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};
