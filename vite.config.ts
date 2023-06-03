import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
/// <reference types="vitest" />
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
    test: {
        environment: 'jsdom'
    }
};

export default defineConfig({
    plugins: [react()],
    test: vitestConfig.test
});
