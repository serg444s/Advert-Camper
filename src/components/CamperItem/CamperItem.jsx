import { useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import IconSvg from "../IconSvg/IconSvg";
import css from "./CamperItem.module.css"
import CamperModal from "../CamperModal/CamperModal";

const CamperItem = ({ item }) => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
    
  const place = "https://www.google.com/maps/place";

  function getLocation(str) {
    const parts = str.split(',');
    return parts[1].trim(); 
  }

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

        <div className={css.location}>
        <p>        <IconSvg width={16} height={16} iconName={"star"} />
        {item.rating} ({item.reviews.length} Reviews)</p>


        <a 
  href={`${place}/${getLocation(item.location)}`} 
  target="_blank" 
  rel="noopener noreferrer"
>
<IconSvg width={16} height={16} iconName={"location"} />
{item.location}
</a>
        </div><p className={css.text}>{item.description}</p>
            <button className={css.btn} onClick={openModal}>Show More</button>
            <CamperModal modalIsOpen={showModal} closeModal={closeModal} item={item}/>

        </div>
      </div>
    );
  };
  export default CamperItem;