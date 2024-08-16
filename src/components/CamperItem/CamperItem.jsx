import { useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import IconSvg from "../IconSvg/IconSvg";
import css from "./CamperItem.module.css"
import CamperModal from "../CamperModal/CamperModal";
import { changeFavorite } from "../../redux/favoriteSlice";
import { useDispatch } from "react-redux";

const CamperItem = ({ item }) => {


  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState();


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
    
  const place = "https://www.google.com/maps/place";

  function getLocation(str) {
    const parts = str.split(',');
    if (parts.length > 1) {
      return parts[1].trim(); 
    } else {
      return parts;
    }
  }

  const onFavoriteAdd = (obj) => {    
    dispatch(changeFavorite(obj));
    setIsFavorite(!isFavorite)
  };
  
  const renderListItems = (obj) => {
        return (<ul className={css.details}>
          <li><IconSvg width={20} height={20} iconName={"adults"}/><p>{`${obj.adults} adults`}</p></li>
          <li><IconSvg width={20} height={20} iconName={"automatic"}/><p>{obj.transmission}</p></li>
          <li><IconSvg width={20} height={20} iconName={"petrol"}/><p>{obj.engine}</p></li>
          <li><IconSvg width={20} height={20} iconName={"kitchen"}/><p>{`${obj.details.kitchen} kitchen`}</p></li>
          <li><IconSvg width={20} height={20} iconName={"bed"}/><p>{`${obj.details.beds} beds`}</p></li>
          <li><IconSvg width={20} height={20} iconName={"acmask"}/><p>{`${obj.details.airConditioner} AC`}</p></li>


        </ul>)
      }

    return (
      <div className={css.container}>

        <div className={css.imgwrap}>
            <img src={item.gallery.length > 0 ? item.gallery[0] : "https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"}/>
        </div>
        <div className={css.item}>

        <div className={css.title}>
            <h2>{item.name}</h2>
            <h3>{formatPrice(item.price)}</h3>
            <button onClick={()=>{onFavoriteAdd(item)}} className={css.add}><IconSvg iconName={"hart"}/></button>
        </div>

        <div className={css.location}>
        <p className={css.reviews}>        <IconSvg width={16} height={16} iconName={"star"} />
        {item.rating} ({item.reviews.length} Reviews)</p>


        <a 
  href={`${place}/${getLocation(item.location)}`} 
  target="_blank" 
  rel="noopener noreferrer"
>
<IconSvg width={16} height={16} iconName={"location"} />
{item.location}
</a>
        </div>
        <p className={css.text}>{item.description}</p>
        {renderListItems(item)}
            <button className={css.btn} onClick={openModal}>Show More</button>
            {showModal && <CamperModal modalIsOpen={showModal} closeModal={closeModal} item={item}/>}

        </div>
      </div>
    );
  };
  export default CamperItem;