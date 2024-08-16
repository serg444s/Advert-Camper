import { useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import { selectFilteredFavorites } from "../../redux/selectors";
import FilterBar from "../../components/FilterBar/FilterBar";
import css from "./Favorites.module.css"


const Favorites = () => { 

    const items = useSelector(selectFilteredFavorites);
    
    return <div className={css.container}>
            <FilterBar/>

            {items.length > 0 && <CamperList items={items} addFavotite={true}/>}

    </div>
}
export default Favorites;