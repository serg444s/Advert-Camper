import css from "./App.module.css"
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage.jsx"));
const Catalog = lazy(() => import("../src/pages/Catalog/Catalog.jsx"));
const Favorites = lazy(() => import("../src/pages/Favorites/Favorites.jsx"));

function App() {

  return (
     <div className={css.container}>
           <Navigation />
           <Suspense fallback={<div>Loading page...</div>}>
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
