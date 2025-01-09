module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addWatchTarget("src/assets")

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
