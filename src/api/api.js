export function getURL(path) {
  return `${
    process.env.MY_HEROKU_URL || "https://vocab-strapi-backend.herokuapp.com"
  }${path}`;
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

export const getMyLearningByID = async (id) => {
  return await fetchAPI(`/learnings?userID=${id}`);
};

export const getMyVocabsByID = async (id) => {
  return await fetchAPI(`/vocabs?userID=${id}`);
};

export const createMyLearning = async (dataObject) => {
  return await fetchAPI(`/learnings`, "POST", dataObject);
};

export const createMyVocabs = async (dataObject) => {
  return await fetchAPI(`/vocabs`, "POST", dataObject);
};

export const updateMyLearning = async (dataObject, learningID) => {
  return await fetchAPI(`/learnings/${learningID}`, "PUT", dataObject);
};

export const updateMyVocabs = async (dataObject, vocabsID) => {
  return await fetchAPI(`/vocabs/${vocabsID}`, "PUT", dataObject);
};
