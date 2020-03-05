import axios from "axios";

const baseURL =
  "https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production";
const categoryURL = baseURL + "/api/category";
const contentsURL = baseURL + "/api/list";
const adsURL = baseURL + "/api/ads";
const detailContentURL = baseURL + "/api/view";

export default {
  baseURL,
  categoryURL,
  contentsURL,
  adsURL,
  async getCategory() {
    let result = await axios.get(categoryURL);
    if (result.data.code === 200) return result.data.list;
  },
  async getContents(data) {
    let result = await axios.get(contentsURL, {
      params: data
    });
    if (result.data.code === 200) return result.data.list.data;
  },
  async getAds(data) {
    let result = await axios.get(adsURL, {
      params: data
    });
    if (result.data.code === 200) return result.data.list.data;
  },
  async getDetailContent(id) {
    let result = await axios.get(`${detailContentURL}?id=${id}`);
    if (result.data.code === 200) return result.data;
  }
};
