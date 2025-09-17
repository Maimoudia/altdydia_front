// src/api.ts
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
  timeout: 10000, // Temps d'attente maximal pour les requêtes
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;