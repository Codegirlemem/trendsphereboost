import style from "./EnterCode.module.css";

export default function EnterCode() {
  return (
    <div className={style.codes}>
      <input
        className={style.code}
        type="number"
        name=""
        id=""
        min={1}
        maxLength={1}
      />
      <input className={style.code} type="number" name="" id="" />
      <input className={style.code} type="number" name="" id="" />
      <input className={style.code} type="number" name="" id="" />
      <input className={style.code} type="number" name="" id="" />
    </div>
  );
}
