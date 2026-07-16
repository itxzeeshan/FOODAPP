import { useEffect, useState } from "react";
import style from "./fooddetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isloading, setIsloading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "e1da09628dc64eb09612fa483858f1bb";
  useEffect(() => {
    if (!foodId) return;
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(`FoodDetail API called`);
      console.log(data);
      setFood(data);
      setIsloading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={style.recipeCard}>
        <h1 className={style.recipeName}> {food.title}</h1>
        <img className={style.recipeImage} src={food.image} alt="" />
        <div className={style.recipeDetail}>
          <span>
            <strong>⌚{food.cookingMinutes} Minutes</strong>
          </span>
          <span>
            <strong> Serves {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>${food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} isloading={isloading} />
      <h2>Instructions</h2>
      <div className={style.recipeInstruction}>
        <ol>
          {isloading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
