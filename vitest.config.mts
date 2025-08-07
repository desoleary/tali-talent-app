import "reflect-metadata";
import {defineConfig} from 'vitest/config';

export default defineConfig({
    test: {
        include: ['apps/api/src/**/*.spec.ts'],
        globals: true,
        coverage: {
            reporter: ['text', 'html']
        },
    }
});