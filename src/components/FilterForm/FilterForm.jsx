import { Formik, Form, Field } from 'formik';
import css from "./FilterForm.module.css"
import IconSvg from '../IconSvg/IconSvg';


const FilterForm = () => { 

    const initialFilterValues = {
        location: '',
        airConditioner: false,
        automatic: false,
        kitchen: false,
        TV: false,
        shower: false,
        type: '',
      };

      const handleFiltersSubmit = (values) => {
        console.log('Form Values:', values);
          };

    return <Formik
    initialValues={initialFilterValues}
    onSubmit={handleFiltersSubmit}
  >
   
      <Form className={css.form}>
      <label className={css.label}>
      Location
      <Field type="text" name="location" placeholder="City" className={css.input}/>
      </label>

      <h2 className={css.title}>Filters</h2>
    <h3 className={css.name}>Vehicle equipment</h3>
    <div className={css.line}></div>

    <div className={css.checklist}> 
    <label className={css.checkbox}>
        <Field
            type="checkbox"
            name="airConditioner"
            style={{ display: 'none' }}

            // checked={checked.airConditioner}
        />
        <div className={css.iconTextWrapper}>
        <IconSvg iconName={"acmask"} width={30} height={30}/>
        <span>AC</span>
        </div>
    </label>

    <label className={css.checkbox}>
        <Field
            type="checkbox"
            name="automatic"
            style={{ display: 'none' }}

            // checked={checked.automatic}
        />
                <div className={css.iconTextWrapper}>
        <IconSvg iconName={"automatic"} width={32} height={32}/>
        <span>Automatic</span>
        </div>
    </label>

    <label className={css.checkbox}>
        <Field
            type="checkbox"
            name="kitchen"
            style={{ display: 'none' }}

            // checked={checked.kitchen}
        />
                <div className={css.iconTextWrapper}>
        <IconSvg iconName={"kitchen"} width={32} height={32}/>
        <span>Kitchen</span>
        </div>
    </label>

    <label className={css.checkbox}>
        <Field
            type="checkbox"
            name="TV"
            style={{ display: 'none' }}

            // checked={checked.TV}
        />
        <IconSvg iconName={"tv"}/>
        TV
    </label>

    <label className={css.checkbox}>
        <Field
            type="checkbox"
            name="shower"
            style={{ display: 'none' }}

            // checked={checked.shower}
        />
        <IconSvg iconName={"shower"}/>
        Shower/WC
    </label>
    </div>

    <h3 className={css.name}>Vehicle type</h3>
    <div className={css.line}></div>

    <div className={css.checklist}>
    <label className={css.radio}>
        <Field
          type="radio"
          value="alcove"
          name="type"

        //   checked={typeFilter === "alcove"}
        //   onChange={handleChange}
          style={{ display: 'none' }}

        />
        <IconSvg iconName={"camper3"} width={40} height={28}/>
        <p>Van</p>

      </label>

      <label className={css.radio}>
        <Field
          type="radio"
          value="fullyIntegrated"
        //   checked={typeFilter === "fullyIntegrated"}
        //   onChange={handleChange}
        name="type"
          style={{ display: 'none' }}

        />
        <IconSvg iconName={"camper2"} width={40} height={28}/>
        <p>Fully Integrated</p>

        </label>

      <label className={css.radio}>
        <Field
          type="radio"
          value="panelTruck"
        //   checked={typeFilter === "panelTruck"}
        //   onChange={handleChange}
        name="type"
          style={{ display: 'none' }}

        />
        <IconSvg iconName={"camper3"} width={40} height={28}/>
        <p>Alcove</p>

        </label>
    </div>
     

         

        <button type="submit" className={css.btn}>
          Send
        </button>
      </Form>
   
  </Formik>
}

export default FilterForm;