// 연결 테스트 유틸리티
import { apiUrl } from '../config/environment';

// src/utils/connectionTest.js
export const testConnection = async () => {
  try {
    const response = await fetch(`${apiUrl}/health`);
    if (response.ok) {
      console.log('✅ 서버 연결 성공');
    } else {
      console.warn('⚠️ 서버 연결 실패');
    }
  } catch (error) {
    console.error('❌ 서버 연결 오류:', error);
  }
};

export const testApiEndpoints = async () => {
  const endpoints = [
    '/api/restaurants',
    '/api/auth/me'
  ];
  
  const results = {};
  
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
      });
      
      results[endpoint] = {
        status: response.status,
        ok: response.ok,
        statusText: response.statusText
      };
      
    } catch (error) {
      results[endpoint] = {
        error: error.message
      };
    }
  }
  
  console.log('🔍 API Endpoints Test Results:', results);
  return results;
};
