/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
    plugins: [
        vue()
    ],
    test: {
        exclude: [...configDefaults.exclude, 'src/components/*'],
    },
});

