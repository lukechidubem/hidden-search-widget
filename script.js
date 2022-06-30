'use strict';
const searchContainer = document.querySelector('.search-container');
const search = document.querySelector('.search');

search.addEventListener('click', function () {
  searchContainer.classList.toggle('active');
});
