import { formatPrice } from "../../utils/formatPrice";
import IconSvg from "../IconSvg/IconSvg";
import css from "./CamperItem.module.css"

const CamperItem = ({ item }) => {
    
    
    return (
      <div className={css.container}>

        <div className={css.imgwrap}>
            <img src={item.gallery[0]}/>
        </div>
        <div className={css.item}>

        <div className={css.title}>
            <h2>{item.name}</h2>
            <h3>{formatPrice(item.price)}</h3>
            <IconSvg iconName={"hart"} />
        </div>

        <div className={location}>
        <p>        <IconSvg iconName={"star"} />
        {item.rating} ({item.reviews.length} Reviews)</p>
        </div>
            
            <p className={css.text}>{item.description}</p>
            <button >Load More</button>

        </div>
      </div>
    );
  };
  export default CamperItem;