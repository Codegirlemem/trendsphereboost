import style from "./LoginSignup.module.css";
import { Link } from "react-router-dom";
export function DividerText({ signup }) {
  return (
    <p className={style.divider}>
      <span className={style.dividerText}>
        Or {signup ? "Sign up" : "Login"} with
      </span>
    </p>
  );
}

export function CheckAccount({ signup }) {
  return (
    <p className={style.check}>
      {signup ? `Already have an account` : `Don't have an account yet?`}{" "}
      <Link to={signup ? "/login" : "/trendsphereboost"} className={style.link}>
        {signup ? "Login" : "Sign up"}
      </Link>
    </p>
  );
}
