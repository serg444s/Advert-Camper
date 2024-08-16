import VehicleTypeFilter from "../../VehicleTypeFilter/VehicleTypeFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import VehicleFilters from "../VehicleFilters/VehicleFilters";

const FilterBar = () => { 
    return <div>
        <LocationFilter/>
        <VehicleFilters/>
        <VehicleTypeFilter/>
            </div>
}
export default FilterBar;