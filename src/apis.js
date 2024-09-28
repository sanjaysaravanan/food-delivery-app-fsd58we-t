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

// Get all the restraunts
export const getAllDishes = async (id) => {
  try {
    const response = await apiInstance.get(`/restraunts/${id}/dishes`, {
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

export const getCart = async (phoneNumber) => {
  try {
    const response = await apiInstance.get(`/cart/${phoneNumber}`, {
      headers: {
        "auth-token": localStorage.getItem("token") || "",
      },
    });
    return response.data;
  } catch (e) {
    const { response } = e;
    const { message } = response.data;
    throw new Error(message);
  }
};

export const addToCart = async (phoneNumber, cartItem) => {
  try {
    const response = await apiInstance.post(
      `/cart/add-to-cart/${phoneNumber}`,
      cartItem,
      {
        headers: {
          "auth-token": localStorage.getItem("token") || "",
        },
      }
    );
    return response.data;
  } catch (e) {
    const { response } = e;
    const { message } = response.data;
    throw new Error(message);
  }
};

export const placeOrder = async (cartId) => {
  try {
    const response = await apiInstance.post(
      `/order/place-order/${cartId}`,
      undefined,
      {
        headers: {
          "auth-token": localStorage.getItem("token") || "",
        },
      }
    );
    return response.data;
  } catch (e) {
    const { response } = e;
    const { message } = response.data;
    throw new Error(message);
  }
};
