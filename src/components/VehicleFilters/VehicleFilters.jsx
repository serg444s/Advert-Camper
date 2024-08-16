import { useState } from "react";
import css from "./VehicleFilters.module.css"
import IconSvg from "../IconSvg/IconSvg";

const VehicleFilters = () => { 

    const [checked, setChecked] = useState({
        airConditioner: false,
        automatic: false,
        kitchen: false,
        TV: false,
        shower: false
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setChecked(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    return <div className={css.container}>
    <h2 className={css.title}>Filters</h2>
    <h3 className={css.name}>Vehicle equipment</h3>
    <div className={css.line}></div>
    <form className={css.form}>
    <label className={css.label}>
        <input
            type="checkbox"
            name="airConditioner"
            checked={checked.airConditioner}
            onChange={handleCheckboxChange}
            // style={{ display: 'none' }}
        />
        
        <IconSvg iconName={"acmask"} width={32} height={32}/>
        
    </label>

    <label className={css.label}>
        <input
            type="checkbox"
            name="automatic"
            checked={checked.automatic}
            onChange={handleCheckboxChange}
            // style={{ display: 'none' }}
        />
                <IconSvg iconName={"automatic"} width={32} height={32}/>

    </label>

    <label className={css.label}>
        <input
            type="checkbox"
            name="kitchen"
            checked={checked.kitchen}
            onChange={handleCheckboxChange}
            // style={{ display: 'none' }}
        />
        <IconSvg iconName={"automatic"} width={32} height={32}/>
    </label>

    <label className={css.label}>
        <input
            type="checkbox"
            name="TV"
            checked={checked.TV}
            onChange={handleCheckboxChange}
            // style={{ display: 'none' }}
        />
        <IconSvg iconName={"automatic"}/>
    </label>

    <label className={css.label}>
        <input
            type="checkbox"
            name="shower"
            checked={checked.shower}
            onChange={handleCheckboxChange}
            // style={{ display: 'none' }}
        />
        <IconSvg iconName={"automatic"}/>
    </label>
</form>

    </div>
    
    
    
}
export default VehicleFilters;