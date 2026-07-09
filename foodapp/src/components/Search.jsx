import { useEffect, useState } from "react";
import style from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "e1da09628dc64eb09612fa483858f1bb";

export default function Search({ foodData, setFoodData }) {
  const [query, SetQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?querry=${query}&apiKey=${API_KEY}`);
      // console.log(`API called`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={style.searchContainer}>
      <input
        className={style.input}
        value={query}
        onChange={(e) => SetQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
