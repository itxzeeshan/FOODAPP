import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "e1da09628dc64eb09612fa483858f1bb";
  useEffect(() => {
    if (!foodId) return;
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(`FoodDetail API called`);
      console.log(data);
      setFoodData(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      Food Details {foodId}
      {food.title}
      <img src={food.image} alt="" />
    </div>
  );
}
