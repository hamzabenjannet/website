// https://vitejs.dev/config/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

function defineViteConfig({ command, mode, ssrBuild }) {
  try {
    console.debug({
      message: `defineViteConfig`,
      command,
      mode,
      ssrBuild,
    });

    const viteConfigs = {
      plugins: [
        svgr({
          // svgr options: https://react-svgr.com/docs/options/
          svgrOptions: {
            // ...
          },

          // esbuild options, to transform jsx to js
          esbuildOptions: {
            // ...
          },

          // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include. By default all svg files will be included.
          include: "**/*.svg?react",

          //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
          exclude: "",
        }),
        react(),
      ],

      server: {
        port: 42000,
        host: "0.0.0.0",
        proxy: {
          "/api": {
            target: "http://localhost:42001",
            changeOrigin: true,
          },
        },
      },

      define: {
        "process.env": process.env,
      },

      build: {
        outDir: "build",
        emptyOutDir: true,
        sourcemap: false,
        minify: true,
        brotliSize: false,
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
          input: "index.html",
          output: {
            manualChunks: {
              react: ["react"],
              reactDom: ["react-dom"],
              reactRouterDom: ["react-router-dom"],
            },
          },
        },
      },

      optimizeDeps: {
        include: [
          "react",
          "react-dom",
          "react-router-dom",
          "react-query",
          "react-query/devtools",
        ],
      },
    };

    return viteConfigs;
  } catch (error) {
    console.error({
      message: error?.message || `Error in defineViteConfig`,
    });
  }
}

const viteConfig = defineConfig(defineViteConfig);
export default viteConfig;
