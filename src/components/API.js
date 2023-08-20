import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '38050235-0ef1876a2782912452eb2747f';

export const fetchImages = async (query, page) => {
  return await axios
    .get('/', {
      params: {
        key: API_KEY,
        q: query,
        page: page,
        per_page: 12,
      },
    })
    .then(response => response.data);
};
