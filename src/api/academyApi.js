import api from "./axiosConfig";

const getAll = async () => {
  try {
    const response = await api.get("/academy");
    return response.data.data;
  } catch (error) {
    console.error("Error Fetch : ", error);
    throw error;
  }
};

export default { getAll };
