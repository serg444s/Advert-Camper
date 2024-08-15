import { useSelector } from "react-redux";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CamperList.module.css"
import { selectFilteredCampers } from "../../redux/selectors";
// import { selectAllCampers } from "../../redux/selectors";


const CamperList = () => {

  const items = useSelector(selectFilteredCampers);


    return (
      <ul className={css.list}> 
        {items.length > 0 && items.map((item) => {
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