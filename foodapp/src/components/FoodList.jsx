import FoodItem from "./FoodItem";

export default function FoodList({ setFoodId, foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
