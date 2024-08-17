import { useDispatch, useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import FilterBar from "../../components/FilterBar/FilterBar";
import css from "./Catalog.module.css"
import { getCampersError, getCampersStatus, selectFilteredCampers } from "../../redux/selectors";
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
      

      const items = useSelector(selectFilteredCampers);
      const visible = items.length > 0;



    useEffect(() => {
        dispatch(fetchCampers(page));
      }, [dispatch, page]);

    return <>
    {error && <p className={css.text}>Sorry. Some went wrong...</p>}
    <div className={css.container}> 


        <FilterBar/>
      
        <div className={css.list}> 


{visible && !loading ? <CamperList items={items}/> : <p className={css.text}>There are no campers in this list...</p>}
{!loading && <LoadMoreBtn onLoadMore={onLoadMore}/>}

</div>

        
    </div>
    

    </>
    
}
export default Catalog;