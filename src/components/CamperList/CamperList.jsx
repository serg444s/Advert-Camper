import CamperItem from "../CamperItem/CamperItem";
import items from "../../../campers.json"

const CamperList = () => {


    return (
      <ul>
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