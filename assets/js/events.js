import { fetchAllCategories, fetchAllNews } from "./methods.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchAllCategories();
  fetchAllNews();
});
