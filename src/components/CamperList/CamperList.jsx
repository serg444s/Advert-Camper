import CamperItem from "../CamperItem/CamperItem";
import css from "./CamperList.module.css"


const CamperList = ({items, addFavotite}) => {



    return (
      <ul className={css.list}> 
        {items.length > 0 && items.map((item) => {
          return (
            <li key={item._id}>
              <CamperItem item={item} addFavotite={addFavotite}/>
            </li>
          );
        })}
      </ul>
    );
  };
  
  export default CamperList;