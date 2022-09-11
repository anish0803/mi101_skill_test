let searchInputTxt = document.getElementById('search-input').value.trim();
const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');

// event listeners
searchBtn.addEventListener('click', ()=>{

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
console.log(data)

let result = "";
        if(data.meals){
            data.meals.forEach(meal => {
                result += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            result = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = result;
    });

})
