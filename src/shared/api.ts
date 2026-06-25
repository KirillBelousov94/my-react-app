import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Автоматически добавляем токен к каждому запросу
api.interceptors.request.use((config) => {
  const storage = localStorage.getItem("auth-storage");
  if (storage) {
    const { state } = JSON.parse(storage);
    if (state.accessToken) {
      config.headers.Authorization = `Bearer ${state.accessToken}`;
    }
  }
  return config;
});

export default api;