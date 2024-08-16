import { useState } from "react";
import css from "./VehicleTypeFilter.module.css"
import IconSvg from "../components/IconSvg/IconSvg";

const VehicleTypeFilter = () => { 

    const [selectedOption, setSelectedOption] = useState('');


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Selected Camper Type:", selectedOption);
      };

    return <div>
    <h3 className={css.name}>Vehicle type</h3>
    <div className={css.line}></div>
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        <input
          type="radio"
          value="alcove"
          checked={selectedOption === "alcove"}
          onChange={handleOptionChange}
          style={{ display: 'none' }}

        />
        <IconSvg iconName={"camper3"} width={40} height={28}/>

      </label>

      <label className={css.label}>
        <input
          type="radio"
          value="fullyIntegrated"
          checked={selectedOption === "fullyIntegrated"}
          onChange={handleOptionChange}
          style={{ display: 'none' }}

        />
        <IconSvg iconName={"camper2"} width={40} height={28}/>
        </label>

      <label className={css.label}>
        <input
          type="radio"
          value="panelTruck"
          checked={selectedOption === "panelTruck"}
          onChange={handleOptionChange}
          style={{ display: 'none' }}

        />
        <IconSvg iconName={"camper3"} width={40} height={28}/>
        </label>

    </form>
            </div>
}
export default VehicleTypeFilter;