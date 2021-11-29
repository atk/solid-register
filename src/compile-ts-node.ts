try {
  require("ts-node").register({
    babelConfig: {
      presets: ["@babel/preset-env", "babel-preset-solid"],
    },
  });
} catch (e) {
  console.log(
    "\x1b[33m⚠️ package missing to run the configured compilation.\n Please run:\x1b[0m\n\nnpm i --save-dev ts-node\n"
  );
}
