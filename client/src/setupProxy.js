const { createProxyMiddleware } = require('http-proxy-middleware');

const paths = ['/auth/google', '/api/*', '/api/surveys/*'];

module.exports = app => {
  paths.forEach(path => {
    app.use(
      createProxyMiddleware(path, {
        target: 'http://localhost:5000/',
      })
    );
  });
};
