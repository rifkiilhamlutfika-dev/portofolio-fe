import api from "./axiosConfig";

const mainEndPoint = "/project";

const getProject = async (page = 1, limit = 10) => {
  try {
    const response = await api.get(`${mainEndPoint}`, {
      params: {
        page: page,
        limit: limit,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error Fetch : ", error);
    throw error;
  }
};

const getByType = async (type = "", page = 1, limit = 10) => {
  try {
    const response = await api.get(`${mainEndPoint}/type/${type}`, {
      params: {
        page: page,
        limit: limit,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error Field : ", error);
    throw error;
  }
};

const getLast = async () => {
  try {
    const response = await api.get(`${mainEndPoint}/last`);
    return response.data.data;
  } catch (error) {
    console.error("Error Fetch : ", error);
    throw error;
  }
};

const getDetail = async (id = "") => {
  try {
    const response = await api.get(`${mainEndPoint}/detail/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error Fetch : ", error);
    throw error;
  }
};

export default { getProject, getByType, getLast, getDetail };
