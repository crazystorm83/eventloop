import { defineConfig } from 'vite'

export default defineConfig({
  // 개발 서버 설정
  server: {
    port: 3000,
    open: true, // 브라우저 자동 열기
    host: true  // 네트워크 접근 허용
  },
  
  // 빌드 설정
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  
  // 플러그인 설정
  plugins: []
})
