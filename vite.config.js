

export default {
  server: {
    proxy: {
      "/api": `http://localhost:${process.env.PORT}`,
    },
  },
  cacheDir: "../node_modules/.vite",

  build: {
    rollupOptions: {
      external: [
        "react-router-dom",
        "@fortawesome/react-fontawesome",
        "react-icons/fa",
        "react-icons/fi",
        "@fortawesome/free-solid-svg-icons",
      ],
    },
    // other build options
  },
};
