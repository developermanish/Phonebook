import fetch from "isomorphic-unfetch";

const { API_URL } = process.env;

const localStorageKey = "__resume_token__";

const customFetch = async (method = "GET", endpoint, { body, ...customConfig } = {}) => {
  // will be modifed for ssr
  const token = window.localStorage.getItem(localStorageKey);

  const requestHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  if (token) {
    requestHeaders.Authorization = `Bearer ${token}`;
  }

  const options = {
    method,
    ...customConfig,
    headers: {
      ...requestHeaders,
      ...customConfig.headers
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    const result = await response.json();

    if (response.status === 401) { // Unauthorized
      // TODO: logout()
      window.location.assign(window.location);
      return;
    }
    return {
      status: response.status,
      ...result
    };
  } catch (err) {
    // TODO: Implemention to be done
    console.log(err); //eslint-disable-line
  }
};

export default customFetch;
