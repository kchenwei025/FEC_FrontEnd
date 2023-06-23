import dotenv from "dotenv";

dotenv.config({ path: "../.env" });



export default {
  server: {
    proxy: {
      "/api": `http://localhost:${process.env.PORT}`,
    },
  },
  cacheDir: "../node_modules/.vite",

  build: {
  rollupOptions: {
    external: ['react-router-dom'],
  },
  // other build options
}

};
