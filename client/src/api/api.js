import axios from "axios";

export const getProjectsAll = async () => {
    const response = await axios.get("http://localhost:3001/projects/list");
    return response.data;
}