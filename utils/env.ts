export const isProd = process.env.NODE_ENV === 'production';

export const BASE_URL = isProd ? 'https://peaceful-turing-d72230.netlify.app' : 'http://localhost:3000';
