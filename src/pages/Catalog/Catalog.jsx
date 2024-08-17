import { useDispatch, useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import FilterBar from "../../components/FilterBar/FilterBar";
import css from "./Catalog.module.css"
import { getCampersError, getCampersStatus, selectFilteredCampers } from "../../redux/selectors";
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
      

      const items = useSelector(selectFilteredCampers);
      const visible = items.length > 0;
const text = "There are no campers in this list..."



    useEffect(() => {
        dispatch(fetchCampers(page));
      }, [dispatch, page]);

    return <div>
    {error && <p>Sorry. Sone went wrong...</p>}
    <div className={css.container}> 


        <FilterBar/>
        {loading ? <Loader/> : 
        <div className={css.list}> 


{visible ? <CamperList items={items}/> : <p className={css.text}>{text}</p>}
{!loading && <LoadMoreBtn onLoadMore={onLoadMore}/>}

</div>}

        
    </div>
    

    </div>
    
}
export default Catalog;