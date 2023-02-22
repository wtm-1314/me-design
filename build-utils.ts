const path = require('path');
const { defineConfig, build } = require('vite');
const { copyFileSync } = require('fs');

const createLib = () =>{
    return new Promise(async (resolve, reject) => {
        try {
            await copyFileSync( path.resolve(__dirname, './doc/me-utils/package.json'),path.resolve(__dirname, './package/me-utils/package.json'), 0);
            await copyFileSync(path.resolve(__dirname, './doc/me-utils/README.md'),path.resolve(__dirname, './package/me-utils/README.md'),  0);
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });
};

// 添加打包入口文件夹 packages（需要手动创建）
const entryDir = path.resolve(__dirname, './src/utils');

// vite 配置
const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    json:{
        namedExports:true,
        stringify:false,
    },
});

//全量构建
const buildAll = async () => {
    await build(defineConfig({
        ...baseConfig,
        build: {
            lib: {
                entry: path.resolve(entryDir, 'index.ts'),
                // 组件库名字
                name: 'me-utils',
                fileName: 'me-utils',
            },
            // 这两个库不需要打包
            rollupOptions: {
                // 确保外部化处理那些你不想打包进库的依赖
                external: ['vue'],
                output: {
                    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                    globals: {
                        vue: 'Vue'
                    }
                }
            },
            outDir:path.resolve(__dirname, './package/me-utils/dist')
        }
    }));
};

const buildLib = async () => {
    await buildAll();
};

buildLib().then(() => {
    console.log('打包完成');
    createLib();
});
