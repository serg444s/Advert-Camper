import { useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import { selectFavoriteCampers } from "../../redux/selectors";


const Favorites = () => { 

    const items = useSelector(selectFavoriteCampers);
    


    return <div>
            {items.length > 0 && <CamperList items={items}/>}

    </div>
}
export default Favorites;