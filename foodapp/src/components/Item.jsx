import style from "./item.module.css";
export default function Item({ item }) {
  return (
    <div>
      <div className={style.itemContainer}>
        <div className={style.imageContainer}>
          <img
            className={style.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt=""
          />
        </div>

        <div className={style.nameContainer}>
          <div className={style.name}>{item.name}</div>
          <div className={style.amount}>
            {item.amount}
            {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
