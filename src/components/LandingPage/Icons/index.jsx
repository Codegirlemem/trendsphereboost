import style from "./style.module.css";
import { socialIcons } from "./data";

export const Icons = () => {
  const rendersocialIcons = (method) => {
    if (method.icon)
      return <img src={method.icon} alt={method.name} key={method.name} />;
    return null;
  };

  return (
    <section>
      <div className={style.flex}>{socialIcons.map(rendersocialIcons)}</div>
    </section>
  );
};