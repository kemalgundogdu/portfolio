import axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const username = process.env.REACT_APP_UNSPLASH_USERNAME;

const unsplashService = {
  fetchPhotos: async (page = 1, perPage = 10) => {
    try {
      const response = await axios.get(`https://api.unsplash.com/users/${username}/photos`, {
        params: {
          client_id: ACCESS_KEY,
          page,
          per_page: perPage,
        },
      });
      return response.data;
    } catch (error) {
      console.error("API isteği sırasında hata:", error);
      throw error;
    }
  },
};

export default unsplashService;
