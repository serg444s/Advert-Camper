import { useDispatch, useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import FilterBar from "../../components/FilterBar/FilterBar";
import css from "./Catalog.module.css"
import { getCampersError, getCampersStatus } from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/operations";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";

const Catalog = () => { 

    const dispatch = useDispatch();
    const loading = useSelector(getCampersStatus);
    const error = useSelector(getCampersError);

    const [page, setPage] = useState(1);
    const onLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
      };
      




    useEffect(() => {
        dispatch(fetchCampers(page));
      }, [dispatch, page]);

    return <div>
    <div className={css.container}> 
{loading && <Loader/>}
{error && <p>Sorry. Sone went wrong...</p>}

        <FilterBar/>
        <CamperList/>
    </div>
    {!loading && <LoadMoreBtn onLoadMore={onLoadMore}/>}

    </div>
    
}
export default Catalog;