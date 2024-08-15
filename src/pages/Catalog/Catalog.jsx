import { useDispatch, useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import FilterBar from "../../components/FilterBar/FilterBar";
import css from "./Catalog.module.css"
import { getCampersError, getCampersStatus } from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/operations";

const Catalog = () => { 

    const dispatch = useDispatch();
    const loading = useSelector(getCampersStatus);
    const error = useSelector(getCampersError);

    useEffect(() => {
        dispatch(fetchCampers());
      }, [dispatch]);

    return <div className={css.container}> 
{loading && <Loader/>}
{error && <p>Sorry. Sone went wrong...</p>}

        <FilterBar/>
        <CamperList/>
    </div>
}
export default Catalog;