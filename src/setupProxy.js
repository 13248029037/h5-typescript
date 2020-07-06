const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/bk", {
      target: "http://hydrogenstage.devops.tutorabc.com.cn/",
      ws: true,
      changeOrigin: true,
      pathRewrite: {
      },
    }),
    createProxyMiddleware("/ws", {
      target: "ws://hydrogenstage.devops.tutorabc.com.cn",
      ws: true,
      changeOrigin: true,
      pathRewrite: {
      },
    })
  );
}
