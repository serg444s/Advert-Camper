import css from "./VehicleTypeFilter.module.css"
import IconSvg from "../IconSvg/IconSvg";
import { useDispatch, useSelector } from "react-redux";
import { changeType } from "../../redux/filtersSlice";
import { selectTypeFilter } from "../../redux/selectors";

const VehicleTypeFilter = () => { 

      const dispatch = useDispatch();

const typeFilter = useSelector(selectTypeFilter);

const handleChange = (evt) => {
    const value = evt.target.value;
    dispatch(changeType(value));
  };

    return <div>
    <h3 className={css.name}>Vehicle type</h3>
    <div className={css.line}></div>
    <form className={css.form}>
      <label className={css.label}>
        <input
          type="radio"
          value="alcove"
          checked={typeFilter === "alcove"}
          onChange={handleChange}
          // style={{ display: 'none' }}

        />
        <IconSvg iconName={"camper3"} width={40} height={28}/>

      </label>

      <label className={css.label}>
        <input
          type="radio"
          value="fullyIntegrated"
          checked={typeFilter === "fullyIntegrated"}
          onChange={handleChange}
          // style={{ display: 'none' }}

        />
        <IconSvg iconName={"camper2"} width={40} height={28}/>
        </label>

      <label className={css.label}>
        <input
          type="radio"
          value="panelTruck"
          checked={typeFilter === "panelTruck"}
          onChange={handleChange}
          // style={{ display: 'none' }}

        />
        <IconSvg iconName={"camper3"} width={40} height={28}/>
        </label>

    </form>
            </div>
}
export default VehicleTypeFilter;