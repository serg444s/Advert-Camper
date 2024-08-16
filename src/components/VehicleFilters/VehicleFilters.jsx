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
            style={{ display: 'none' }}
        />
        <div className={css.iconTextWrapper}>
        <IconSvg iconName={"acmask"} width={30} height={30}/>
        <span>AC</span>
        </div>
    </label>

    <label className={css.label}>
        <input
            type="checkbox"
            name="automatic"
            checked={checked.automatic}
            onChange={handleCheckboxChange}
            style={{ display: 'none' }}
        />
                <div className={css.iconTextWrapper}>
        <IconSvg iconName={"automatic"} width={32} height={32}/>
        <span>Automatic</span>
        </div>
    </label>

    <label className={css.label}>
        <input
            type="checkbox"
            name="kitchen"
            checked={checked.kitchen}
            onChange={handleCheckboxChange}
            style={{ display: 'none' }}
        />
                <div className={css.iconTextWrapper}>
        <IconSvg iconName={"kitchen"} width={32} height={32}/>
        <span>Kitchen</span>
        </div>
    </label>

    <label className={css.label}>
        <input
            type="checkbox"
            name="TV"
            checked={checked.TV}
            onChange={handleCheckboxChange}
            style={{ display: 'none' }}
        />
        <IconSvg iconName={"tv"}/>
        TV
    </label>

    <label className={css.label}>
        <input
            type="checkbox"
            name="shower"
            checked={checked.shower}
            onChange={handleCheckboxChange}
            style={{ display: 'none' }}
        />
        <IconSvg iconName={"shower"}/>
        Shower/WC
    </label>
</form>

    </div>
    
    
    
}
export default VehicleFilters;