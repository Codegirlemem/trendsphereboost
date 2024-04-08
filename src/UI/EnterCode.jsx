import style from "./EnterCode.module.css";

export default function EnterCode() {
  return (
    <div className={style.codes}>
      <input className={style.code} type="number" name="" id="" max={1} />
      <input className={style.code} type="number" name="" id="" />
      <input className={style.code} type="number" name="" id="" />
      <input className={style.code} type="number" name="" id="" />
      <input className={style.code} type="number" name="" id="" />
    </div>
  );
}
