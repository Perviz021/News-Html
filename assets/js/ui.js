import { fetchAllNews } from "./methods.js";

const UI = {
  container: document.querySelector("#container"),
  btnContent: document.querySelector("#btnContent"),
};

export const uiCreateCategories = (categories = []) => {
  let btnClass = `flex-1 px-2 py-1 bg-gray-200 js-action rounded-lg`;
  let html = `<button class="${btnClass}">Xəbərlər</button>`;

  categories.forEach((category) => {
    html += `<button class="${btnClass}" data-slug="${category.slug}">${category.name}</button>`;
  });

  UI.btnContent.innerHTML = html;
  const btnaction = document.querySelectorAll(".js-action");
  btnaction.forEach((btn) => {
    btn.addEventListener("click", () => {
      btnaction.forEach((b) => {
        b.classList.remove("bg-red-500", "pointer-events-none", "text-white");
      });

      btn.classList.add("bg-red-500", "pointer-events-none", "text-white");

      const slug = btn.getAttribute("data-slug");
      if (slug) fetchAllNews(slug);
      else fetchAllNews();
    });
  });
};

export const uiCreateNewsList = (items) => {
  let html = ``;
  items.forEach((news) => {
    html += ` <article class="shadow bg-white rounded-lg overflow-hidden">
    <figure class="w-full h-[250px]">
      <img
        src="${news.photo}"
        alt=""
        class="w-full h-full object-cover"
      />
    </figure>
    <div class="p-3 text-sm">
      <h5 class="font-semibold">
        ${news.title}
      </h5>
      <p>
      ${news.description}
      </p>
    </div>
    <div class="p-3 text-sm border-t flex justify-between items-center">
      <span>${news.category.name}</span>
      <span>${moment(news.published_date).format("DD MMM YYYY, HH:mm")}</span>
    </div>
  </article>`;
  });
  UI.container.innerHTML = html;
};
