import axios from "axios";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_BE_URL,
  timeout: 10000,
});

export const signUpAPI = async (payload) => {
  const response = await apiInstance.post("/auth/sign-up", payload);
  if (response.status === 201) {
    return response.data;
  }
  const { msg } = response.data;
  throw new Error(msg);
};

export const signInAPI = async (payload) => {
  try {
    const response = await apiInstance.post("/auth/sign-in", payload);
    return response.data;
  } catch (e) {
    const { response } = e;
    const { msg } = response.data;
    throw new Error(msg);
  }
};

// Get all the restraunts
export const getAllRestrauntsAPI = async () => {
  try {
    const response = await apiInstance.get("/restraunts", {
      headers: {
        "auth-token": localStorage.getItem("token") || "",
      },
    });
    return response.data;
  } catch (e) {
    const { response } = e;
    const { msg } = response.data;
    throw new Error(msg);
  }
};
