import { createSelector } from "@reduxjs/toolkit";

// export const selectCampers = (state) => state.campers.items;
// export const selectNameFilter = (state) => state.filters.name;
// export const selectIsLoading = (state) => state.campers.loading;
// export const selectError = (state) => state.campers.error;



export const selectAllCampers = (state) => state.campers.campers;
export const getCampersStatus = (state) => state.campers.loading;
export const getCampersError = (state) => state.campers.error;
const selectFilterLocation = (state) => state.filters.location;
const selectFilterType = (state) => state.filters.type;
const selectFilterEquipment = (state) => state.filters.equipment;

export const selectFavoriteCampers = (state) => state.favorite.favorite;


export const selectFilteredCampers = createSelector(
    [selectAllCampers, selectFilterLocation, selectFilterType, selectFilterEquipment],
    (campers, locationFilter, type, equipment) => {     

      return campers.filter((camper) => {
        const matchesLocation = camper.location.toLowerCase().includes(locationFilter.toLowerCase());
        const matchesType = camper.form.includes(type);
  
        const matchesEquipment = 
          (!equipment.airConditioner || camper.details.airConditioner > 0) &&
          (!equipment.kitchen || camper.details.kitchen > 0) &&
          (!equipment.TV || camper.details.TV > 0) &&         
          (!equipment.shower || camper.details.shower > 0) &&
          (!equipment.automatic || camper.transmission === "automatic");

  
        return matchesLocation && matchesType && matchesEquipment;
      });
    }
  );

  // export const selectFilteredFavorites = createSelector(
  //   [selectFavoriteCampers, selectFilters],
  //   (campers, filter, type) => {
  //     return campers.filter((camper) =>
  //       camper.location.toLowerCase().includes(filter.toLowerCase()) && camper.form.includes(type)
  //     );
  //   }
  // );

  export const selectFilteredFavorites = createSelector(
    [selectFavoriteCampers, selectFilterLocation, selectFilterType, selectFilterEquipment],
    (campers, locationFilter, type, equipment) => {     

      return campers.filter((camper) => {
        const matchesLocation = camper.location.toLowerCase().includes(locationFilter.toLowerCase());
        const matchesType = camper.form.includes(type);
  
        const matchesEquipment = 
          (!equipment.airConditioner || camper.details.airConditioner > 0) &&
          (!equipment.kitchen || camper.details.kitchen > 0) &&
          (!equipment.TV || camper.details.TV > 0) &&         
          (!equipment.shower || camper.details.shower > 0) &&
          (!equipment.automatic || camper.transmission === "automatic");

  
        return matchesLocation && matchesType && matchesEquipment;
      });
    }
  );