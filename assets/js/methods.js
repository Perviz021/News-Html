import Api from "./api.js";
import { uiCreateCategories, uiCreateNewsList } from "./ui.js";

export const fetchAllNews = async (category = "") => {
  let url = Api.allNews;
  if (category) {
    url += "?category=" + category;
  }
  const api = await fetch(url);
  const res = await api.json();
  uiCreateNewsList(res.data);
};

export const fetchAllCategories = async () => {
  const api = await fetch(Api.categories);
  const res = await api.json();
  uiCreateCategories(res);
};
