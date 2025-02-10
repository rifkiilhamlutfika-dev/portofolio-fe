import api from "./axiosConfig";

const getAll = async () => {
  try {
    const response = await api.get("/videos-me");
    return response.data.data;
  } catch (error) {
    console.error("Error Fetch : ", error);
    throw error;
  }
};

export default { getAll };
