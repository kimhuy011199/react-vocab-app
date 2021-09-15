const API_URL = "http://localhost:1337";

export function getURL(path) {
  return `${API_URL || "http://localhost:1337"}${path}`;
}

const fetchAPI = async (path, method = "GET", dataObject = null) => {
  const requestUrl = getURL(path);
  let response;
  if (method === "GET") {
    response = await fetch(requestUrl);
  }
  if (method === "POST" || method === "PUT") {
    response = await fetch(requestUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    });
  }

  if (!response.ok) {
    throw new Error("Sending request failed");
  }

  const data = await response.json();

  if (!data) {
    return null;
  }

  return data;
};

export const register = async (dataObject) => {
  return await fetchAPI(`/auth/local/register`, "POST", dataObject);
};

export const login = async (dataObject) => {
  return await fetchAPI(`/auth/local`, "POST", dataObject);
};

export const getAllCategories = async () => {
  return await fetchAPI(`/categories`);
};

export const getSingleCategory = async (slug) => {
  return await fetchAPI(`/categories?slug=${slug}`);
};
