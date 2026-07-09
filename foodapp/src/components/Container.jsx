import style from "./container.module.css";
export default function Container({ children }) {
  return <div className={style.parentContainer}>{children}</div>;
}
