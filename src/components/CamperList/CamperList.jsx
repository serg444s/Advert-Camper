import CamperItem from "../CamperItem/CamperItem";
import css from "./CamperList.module.css"
import items from "../../../campers.json";


const CamperList = () => {


    return (
      <ul className={css.list}> 
        {items.map((item) => {
          return (
            <li key={item._id}>
              <CamperItem item={item}/>
            </li>
          );
        })}
      </ul>
    );
  };
  
  export default CamperList;