

export default {
  server: {
    proxy: {
      "/api": `http://localhost:${process.env.PORT}/category`,
    },
  },
  cacheDir: "../node_modules/.vite",


};
