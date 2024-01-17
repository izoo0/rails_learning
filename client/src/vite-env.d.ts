/// <reference types="vite/client" />
export const API_URL = process.env.NODE_ENV ==='test' 
? 'http//:test-api' 
: import.meta.env.VITE_API_URL
