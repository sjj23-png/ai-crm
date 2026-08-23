import environmentConfig from "./environment.config";


const apiConfig = {
  baseURL: environmentConfig.apiBaseUrl,

  timeout: 30000,

  withCredentials: true,
};

export default apiConfig;