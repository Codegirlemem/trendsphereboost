import { socialStats } from "./data";
import style from "./style.module.css";
export const Stats = () => {
  return (
    <div className={style.stats}>
      {socialStats.map((stat) => {
        return (
          <div key={stat.title} className={style.border}>
            <h3>{stat.stat}</h3>
            <p>{stat.title}</p>
            <p></p>
          </div>
        );
      })}
    </div>
  );
};
