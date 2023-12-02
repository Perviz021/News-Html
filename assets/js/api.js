const baseURL = "https://all-api.bitcode.az/api";

const Api = {
  allNews: `${baseURL}/news`,
  showById: `${baseURL}/news/show/:id`,
  showBySlug: `${baseURL}/news/slug/:slug`,
  categories: `${baseURL}/news/category`,
  randomNews: `${baseURL}/news/random`,
};

export default Api;
