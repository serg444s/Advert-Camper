import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css"

const NotFoundPage = () => { 

    const url = "https://indexsy.com/wp-content/uploads/2023/05/What-is-404-error.jpg"

return <div className={css.container}>
<p className={css.text}>The page you are looking for may have been moved, deleted,
or possibly never existed</p>
<Link to="/" className={css.link}>
    Back to main page
  </Link>
<div className={css.wrapper}>
<img src={url} alt="not found this page" className={css.img}/>
</div>


</div>
}

export default NotFoundPage;