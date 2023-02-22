/** @type {import('vite').UserConfig} */

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import analyzer from 'rollup-plugin-analyzer';
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }):any => {
    const env = loadEnv(mode, process.cwd(), ''),
        { VITE_BASE_PORT, VITE_PROXY } = env;
    
    const common = {
        plugins: [
            vue(),
            analyzer(),
        ],
        // 地址路径配置
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@c': path.resolve(__dirname, 'src/components'),
            },
        },
        css: {
            modules: {},
            postcss: {},
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData:'@import "@/assets/scss/var.scss";@import "@/assets/scss/animation.scss";',
                },
            },
        },
        json: {
            namedExports: true,
            stringify: false,
        },
    };

    if (command === 'serve') {
        return {
            ...common,
            server: {
                host: '0.0.0.0',
                https: false, //是否启用 http 2
                cors: true, //为开发服务器配置 CORS , 默认启用并允许任何源
                port: VITE_BASE_PORT,
                open: true,
                strictPort: true, //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
                proxy: {
                    [VITE_PROXY]: {
                        target: 'http://localhost:8001',
                        changeOrigin: true,
                        // rewrite: (path) => path.replace(/^\/api/, ''),
                    },
                },
                watch: {
                    ignored: ['**/node_modules/**', '**/config/**', '**/dist/**'],
                },
            },
            preview: {
                host: 'localhost',
                port: 8088,
                strictPort: true,
                open: true,
                cors: true,
                proxy: {},
            },
        };
    } else if (command === 'build') {
        return {
            ...common,
            optimizeDeps: {},// 强制预构建插件包
            clearScreen: false,
            logLevel: 'warn', //'info' | 'warn' | 'error' | 'silent'
            base:'/', // 发布服务基础地址，没有填'/' /ming-ui/
            build: {
                target: 'modules', //浏览器兼容性  "esnext"|"modules"
                outDir: 'dist',
                assetsDir: 'assets',
                assetsInlineLimit: 4096,
                cssCodeSplit: true, //启用 CSS 代码拆分
                sourcemap: false, //构建后是否生成 source map 文件
                manifest: false, //当设置为 true，构建后将会生成 manifest.json 文件
                minify: 'esbuild', // 构建后文件体积更小
                write: true, //设置为 false 来禁用将构建后的文件写入磁盘
                emptyOutDir: true, //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
                chunkSizeWarningLimit: 1500, //chunk 大小警告的限制
                reportCompressedSize: true, //报告大小
                rollupOptions: {
                    output: {
                        manualChunks(id) {
                            if (id.includes('node_modules')) {
                                return 'verdor';
                            }
                        },
                        chunkFileNames: 'assets/js/[hash].js',
                        entryFileNames: 'assets/js/[hash].js',
                        assetFileNames: 'assets/[ext]/[hash].[ext]',
                    },
                },
            },
        };
    }
});
