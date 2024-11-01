import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // 절대 경로를 수동으로 설정
        },
    },
});
