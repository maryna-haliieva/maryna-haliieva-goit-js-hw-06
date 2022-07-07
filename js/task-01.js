const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

constcategoriesArray = [...totalCategories]
  .map(
    (categories) => `Category^ ${categories.children[0].textContentContent}
        Elements: ${categories.children[1].lengtgh}`
  )
  .join("\n");
console.log(categoriesArray);
