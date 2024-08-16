import LocationFilter from "../LocationFilter/LocationFilter";
import VehicleFilters from "../VehicleFilters/VehicleFilters";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";

const FilterBar = () => { 
    return <div>
        <LocationFilter/>
        <VehicleFilters/>
        <VehicleTypeFilter/>
            </div>
}
export default FilterBar;