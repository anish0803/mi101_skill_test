const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');

// event listeners
searchBtn.addEventListener('click', ()=>{

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput.value}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
});

});






