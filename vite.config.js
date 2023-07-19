import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      REACT_APP_STRIPE:
        "pk_test_51NUTNoHBvpeGrdzgigkOVnUi6rg8IzthW3dwQgEYsWClcRFi9W2LEUMGRiawA7G8YqU3eNxeoA6uqAKjg3D57Mmk00nfsfHDWO", // it is public key so no need to hide it
    },
  },
});
