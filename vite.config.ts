import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-core': ['react', 'react-dom'],
          'animaciones': ['framer-motion', 'gsap'],
          'iconos': ['lucide-react'],
          'enrutamiento': ['react-router-dom'],
          'ui-radix': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-popover']
        }
      }
    },
    chunkSizeWarningLimit: 300,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    },
    sourcemap: false,
    cssCodeSplit: true
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    }
  },
  esbuild: {
    drop: ['console', 'debugger'],
  }
})

