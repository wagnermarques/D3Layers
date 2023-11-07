import { defineConfig } from 'vite';
import ts from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [ts()],
    build: {
        target: 'es6',
        minify: false, // Disable minification
        outDir: 'dist',
        lib: {
            entry: './main/src/typescripts/main.ts',
            formats: ['es'],
        },
    },
});
