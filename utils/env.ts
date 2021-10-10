export const isProd = process.env.NODE_ENV === 'production';

export const BASE_URL = isProd ? 'https://calvarystockholm.se/' : 'http://localhost:3000';
