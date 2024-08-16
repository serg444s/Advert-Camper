import { useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import { selectFilteredFavorites } from "../../redux/selectors";
import FilterBar from "../../components/FilterBar/FilterBar";
import css from "./Favorites.module.css"


const Favorites = () => { 

    const items = useSelector(selectFilteredFavorites);
    console.log("Favorites items", items);

    
    return <div className={css.container}>
            <FilterBar/>

            {items.length > 0 && <CamperList items={items} />}

    </div>
}
export default Favorites;