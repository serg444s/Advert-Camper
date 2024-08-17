import LocationFilter from "../LocationFilter/LocationFilter";
import VehicleFilters from "../VehicleFilters/VehicleFilters";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import css from "./FilterBar.module.css"

const FilterBar = () => { 
    return <div className={css.container}>
        <LocationFilter/>
        <VehicleFilters/>
        <VehicleTypeFilter/>
            </div>
}
export default FilterBar;