import axios from "axios";

export const getProjectsAll = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects/list`);
    return response.data;
}