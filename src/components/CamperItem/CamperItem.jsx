import { formatPrice } from "../../utils/formatPrice";
import IconSvg from "../IconSvg/IconSvg";
import css from "./CamperItem.module.css"

const CamperItem = ({ item }) => {

    // const baseURL = "https://ftp.goit.study/img";
    
    
    return (
      <div className={css.container}>
        <div className={css.imgwrap}>
            <img src={item.gallery[0]}/>
        </div>
        <div className={css.item}>
            <h2>{item.name}</h2>
            <h3>{formatPrice(item.price)}</h3>
            <IconSvg iconName={"star"}/>
            <p className={css.text}>{item.description}</p>
            <button>Load More</button>

        </div>
      </div>
    );
  };
  export default CamperItem;