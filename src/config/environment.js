// src/config/environment.js
const getEnvironmentConfig = () => {
  const isDevelopment = import.meta.env.DEV;
  const isProduction = import.meta.env.PROD;
  
  // 환경별 자동 설정
  const config = {
    development: {
      apiUrl: 'http://localhost:5000',
      clientUrl: 'http://localhost:5173',
    },
    production: {
      apiUrl: import.meta.env.VITE_API_URL || 'https://pwd-week5-thereis4185.onrender.com.com',
      clientUrl: import.meta.env.VITE_CLIENT_URL || 'https://pwd-week6-client.vercel.app',
    }
  };
  
  return isDevelopment ? config.development : config.production;
};