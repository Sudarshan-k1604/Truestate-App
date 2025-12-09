// src/services/transactionService.ts
const API_BASE =
  (typeof process !== 'undefined' && process.env && (process.env.NEXT_PUBLIC_API_BASE || process.env.REACT_APP_API_BASE)) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env && ( (import.meta as any).env.VITE_API_BASE )) ||
  'http://localhost:5000';
