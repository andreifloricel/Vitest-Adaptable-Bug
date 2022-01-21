/// <reference types="vitest" />

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return defineConfig({
        plugins: [reactRefresh(), viteTsconfigPaths()],
        build: {
            outDir: 'build'
        },
        test: {
            global: true,
            environment: 'jsdom'
        }
    });
};
