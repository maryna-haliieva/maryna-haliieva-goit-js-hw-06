// РОЗВ'ЯЗОК З ПРАКТИЧНОГО ЗАНЯТТЯ

const list = document.querySelector("#categories");
const children = list.children;
console.log(`Numbers of categories: ${children.length}`);
[...children].forEach((el) => {
  console.log(`Category: ${el.children[0].textContent}`);
  console.log(`Elements: ${el.children[1].children.length}`);
});

// САМОСТІЙНІ РОБОТИ

// =====================================

// const createCategories = document.querySelector("#categories");
// const categoriesItem = [...createCategories.children];
// console.log(categoriesItem);
// console.log(`Number of categories: ${categoriesItem.length}`);

// categoriesItem.map((elem) => {
//   const categoriesTitle = elem.querySelector("h2");
//   console.log(`Category: ${categoriesTitle.textContent}`);

//   const categoryLength = elem.querySelectorAll("li");
//   console.log(`Element: ${categoryLength.length}`);
// });

// ========================================
// const totalCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${totalCategories.length}`);
// const categoriesArray = [...totalCategories]
//   .map(
//     (categories) => `Category: ${categories.children[0].textContent}
// Elements: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);
