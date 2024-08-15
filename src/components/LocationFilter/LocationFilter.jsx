import css from "./LocationFilter.module.css"
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLocationFilter } from "../../redux/selectors";

const LocationFilter = () => { 

const dispatch = useDispatch();
const locationFilter = useSelector(selectLocationFilter);
const handleChange = (evt) => {
    const value = evt.target.value;
    dispatch(changeFilter(value));
  };


    return <label className={css.label}>
  Location
  <input
        type="text"
        placeholder="Kyiv, Ukraine"
        value={locationFilter}
        onChange={handleChange}
        className={css.input}
      />            
     </label>
}
export default LocationFilter;