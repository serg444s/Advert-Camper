import css from "./App.module.css"
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx"
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import Loader from "../Loader/Loader.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog.jsx"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites.jsx"));

function App() {

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
