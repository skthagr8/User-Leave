// src/services/axios.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',  // Your Django backend URL
  withCredentials: true,  // Ensures cookies (like the CSRF token) are sent with requests
});

// Intercept each request to add the CSRF token to headers
axiosInstance.interceptors.request.use((config) => {
  const csrfToken = getCookie('csrftoken');  // Function to get CSRF token from cookies
  if (csrfToken) {
    config.headers['X-CSRFToken'] = csrfToken;
  }
  return config;
});

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export default axiosInstance;
