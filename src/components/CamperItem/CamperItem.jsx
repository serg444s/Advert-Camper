import { formatPrice } from "../../utils/formatPrice";
import IconSvg from "../IconSvg/IconSvg";
import css from "./CamperItem.module.css"

const CamperItem = ({ item }) => {

    // const baseURL = "https://ftp.goit.study/img";
    
    
    return (
      <div className={css.container}>
        <div>
            <img src={item.gallery[0]}/>
        </div>
        <div>
            <h2>{item.name}</h2>
            <h3>{formatPrice(item.price)}</h3>
            <IconSvg iconName={"star"}/>
        </div>
      </div>
    );
  };
  export default CamperItem;