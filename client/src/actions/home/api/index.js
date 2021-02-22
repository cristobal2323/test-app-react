import axios from "axios";

const API = {
  data: {
    async getHome(obj) {
      const response = await axios.get(`/api/home`);
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
