import { createSelector } from "@reduxjs/toolkit";

// export const selectCampers = (state) => state.campers.items;
// export const selectNameFilter = (state) => state.filters.name;
// export const selectIsLoading = (state) => state.campers.loading;
// export const selectError = (state) => state.campers.error;



export const selectAllCampers = (state) => state.campers.campers;
export const getCampersStatus = (state) => state.campers.loading;
export const getCampersError = (state) => state.campers.error;
export const selectLocationFilter = (state) => state.filters.location;
export const selectTypeFilter = (state) => state.filters.type;

export const selectFavoriteCampers = (state) => state.favorite.favorite;


export const selectFilteredCampers = createSelector(
    [selectAllCampers, selectLocationFilter, selectTypeFilter],
    (campers, filter, type) => {
      return campers.filter((camper) =>
        camper.location.toLowerCase().includes(filter.toLowerCase()) && camper.form.includes(type)
      );
    }
  );

  export const selectFilteredFavorites = createSelector(
    [selectFavoriteCampers, selectLocationFilter, selectTypeFilter],
    (campers, filter, type) => {
      return campers.filter((camper) =>
        camper.location.toLowerCase().includes(filter.toLowerCase()) && camper.form.includes(type)
      );
    }
  );