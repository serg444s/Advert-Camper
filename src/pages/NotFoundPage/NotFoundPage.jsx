import { Link, useNavigate } from "react-router-dom";
import css from "./NotFoundPage.module.css"
import { useEffect } from "react";

const NotFoundPage = () => { 

  const nav = useNavigate();
  const time = 10000;

  useEffect(() => {
    const index = setTimeout(() => {
      nav('/');
    }, time);
    return () => clearTimeout(index);
  }, [nav]);

    const url = "https://indexsy.com/wp-content/uploads/2023/05/What-is-404-error.jpg"

return <div className={css.container}>
<p className={css.text}>The page you are looking for may have been moved, deleted,
or possibly never existed</p>
<p className={css.text}>You will be returned to the main page in {time / 1000} seconds</p>
<p className={css.text}>Or just click</p>
<Link to="/" className={css.link}>
    Back to main page
  </Link>
<div className={css.wrapper}>
<img src={url} alt="not found this page" className={css.img}/>
</div>


</div>
}

export default NotFoundPage;