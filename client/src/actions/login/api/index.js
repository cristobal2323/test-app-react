import axios from "axios";

const API = {
  data: {
    async getLogin(obj) {
      const response = await axios.post(`/api/login`, obj);

      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
  },
};
export default API;
