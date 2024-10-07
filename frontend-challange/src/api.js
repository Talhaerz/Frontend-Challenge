import axios from "axios";

const Api_Url = "https://cdn.oneri.io/web-team/case/spotify.json";

const fetchData = async (query) =>{
    const response = await axios.get(Api_Url, {
        params: {search: query},
    });
    return response.data;
};

export default fetchData;
