import css from "./App.module.css"
import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx"
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import Loader from "../Loader/Loader.jsx";
import { fetchCampers, getStartCampers } from "../../redux/operations.js";
import { incrementPage } from "../../redux/campersSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "../../redux/selectors.js";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog.jsx"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites.jsx"));

function App() {

  const dispatch = useDispatch();
  const page = useSelector(selectPage)


  useEffect(() => {
    if (page > 1) {
      dispatch(fetchCampers(page));
    }  
  }, [dispatch, page]);

 


  return (
     <div className={css.container}>
           <Navigation />
           <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
     </div>
  )
}

export default App
