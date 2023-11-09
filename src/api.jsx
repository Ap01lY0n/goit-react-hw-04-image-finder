import axios from 'axios';

export const fetchImg = async (currentPage, query, perPage) => {
    axios.defaults.baseURL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        page : currentPage,
        per_page: perPage,
        key: "39312668-edb80f1d793a3cebe6a0ebf3a",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    const response = await axios.get(`?${params}`);
    return response.data;  
};