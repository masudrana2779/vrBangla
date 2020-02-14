import axios from "axios";
import { backendUrl } from "./baseUrl";

const get = endpoint => {
  axios.get(backendUrl + endpoint);
};

const post = async endpoint => {
  const response = await axios.post(backendUrl + endpoint, {
  });
  try {
    if (response.status === 200) {
      return response.data;
    }
  } catch (ex) {
    return ex;
  }
};


const postWithFullUrl = async (endpoint, body) => {
 
 
  const response = await axios.post(endpoint, body,{
    // accessinfo: {
    //   access_token: accessToken,
    //   referenceCode: Date.now().valueOf()
    // }
  });
  try {
    if (response.status === 200) {
      return response.data;
    }
  } catch (ex) {
    return ex;
  }
};

const postReqWithBody = async (endpoint, body, queryParams) => {
  const response = await axios.post(backendUrl + endpoint, body,{
    // accessinfo: {
    //   access_token: accessToken,
    //   referenceCode: Date.now().valueOf()
    // },
    params: queryParams,
  });
  try {
    if (response.status === 200) {
      return response.data;
    }
  } catch (ex) {
    return ex;
  }
};

export default {
  get,
  post,
  postReqWithBody,
  postWithFullUrl,
};
