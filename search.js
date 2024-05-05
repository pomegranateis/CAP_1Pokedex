const inputElement = document.querySelector("#search-input");
const searchCloseIcon = document.querySelector("#search-close-icon");
const sortWrapper = document.querySelector(".sort-wrapper");
const filterWrapper = document.querySelector(".filter-wrapper");
const body = document.querySelector("body");

inputElement.addEventListener("input", () => {
  handleInputChange(inputElement, searchCloseIcon);
});
searchCloseIcon.addEventListener("click", handleSearchCloseOnClick);
sortWrapper.addEventListener("click", handleSortIconOnClick);

function handleInputChange(inputElement, searchCloseIcon) {
  const inputValue = inputElement.value;
  if (inputValue !== "") {
    searchCloseIcon.classList.add("search-close-icon-visible");
  } else {
    searchCloseIcon.classList.remove("search-close-icon-visible");
  }
}

function handleSearchCloseOnClick() {
  inputElement.value = "";
  searchCloseIcon.classList.remove("search-close-icon-visible");
}

function handleSortIconOnClick() {
  filterWrapper.classList.toggle("filter-wrapper-open");
  body.classList.toggle("filter-wrapper-overlay");
}