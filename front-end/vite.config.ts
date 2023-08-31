import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080/", // Replace with the base URL of your API server. The api we will use in the component is: /api/posts/read, and the actual request will be sent to http://localhost:8080/posts/read
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove the '/api' prefix before forwarding the request
      },

      /**
       - In this configuration, we added the server option and defined a proxy object for the /api path. All requests starting with /api will be forwarded to the target specified in the target option (e.g., http://example.com). The changeOrigin option is set to true to change the origin of the request to match the target.
       - Additionally, we use the rewrite option to remove the /api prefix before forwarding the request. This is useful if your API server doesn't expect the /api prefix in the URL.
       - With this setup, when you make API requests in your React components using a relative URL starting with /api, Vite will automatically forward the requests to the specified proxy server.
       */
    },
  },
  web_accessible_resources: ["react-draft-wysiwyg.css"],
});
