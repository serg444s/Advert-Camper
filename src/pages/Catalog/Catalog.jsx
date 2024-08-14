import CamperList from "../../components/CamperList/CamperList";
import FilterBar from "../../components/FilterBar/FilterBar";
import css from "./Catalog.module.css"

const Catalog = () => { 
    return <div className={css.container}> 
        <FilterBar/>
        <CamperList/>
    </div>
}
export default Catalog;