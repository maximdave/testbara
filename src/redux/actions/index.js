import {
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_FILTERED_DATA,
  GET_MORE_TO_LOVE_ERROR,
  GET_MORE_TO_LOVE_PENDING,
  GET_MORE_TO_LOVE_SUCCESS,
  GET_NEW_ARRIVALS_ERROR,
  GET_NEW_ARRIVALS_PENDING,
  GET_NEW_ARRIVALS_SUCCESS,
  GET_RECOMMENDED_ERROR,
  GET_RECOMMENDED_PENDING,
  GET_RECOMMENDED_SUCCESS,
  GET_SEARCH_WORD,
  GET_TOP_DEALS_ERROR,
  GET_TOP_DEALS_PENDING,
  GET_TOP_DEALS_SUCCESS,
  SEARCH_WORD,
  TOGGLE_PROFILE_HIDDEN,
} from "../types";

export const toggleprofileHidden = () => {
  return {
    type: TOGGLE_PROFILE_HIDDEN
  }
}


export const getCategoriesPending = () => ({
  type: GET_CATEGORIES_PENDING,
});

export const getCategoriesSuccess = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategoriesError = (error) => ({
  type: GET_CATEGORIES_ERROR,
  payload: error,
});

export const getNewArrivalsPending = () => ({
  type: GET_NEW_ARRIVALS_PENDING,
});

export const getNewArrivalsSuccess = (newArrivals) => ({
  type: GET_NEW_ARRIVALS_SUCCESS,
  payload: newArrivals,
});

export const getNewArrivalsError = (error) => ({
  type: GET_NEW_ARRIVALS_ERROR,
  payload: error,
});

export const getTopDealsPending = () => ({
  type: GET_TOP_DEALS_PENDING,
});

export const getTopDealsSuccess = (deals) => ({
  type: GET_TOP_DEALS_SUCCESS,
  payload: deals,
});

export const getTopDealsError = (error) => ({
  type: GET_TOP_DEALS_ERROR,
  payload: error,
});

export const getRecommendedPending = () => ({
  type: GET_RECOMMENDED_PENDING,
});

export const getRecommendedSuccess = (recommended) => ({
  type: GET_RECOMMENDED_SUCCESS,
  payload: recommended,
});

export const getRecommendedError = (error) => ({
  type: GET_RECOMMENDED_ERROR,
  payload: error,
});

export const getMoreToLovePending = () => ({
  type: GET_MORE_TO_LOVE_PENDING,
});

export const getMoreToLoveSuccess = deals => ({
  type: GET_MORE_TO_LOVE_SUCCESS,
  payload: deals,
});

export const getMoreToLoveError = (error) => ({
  type: GET_MORE_TO_LOVE_ERROR,
  payload: error,
});


export const getSearchWord = (word) => ({
  type: GET_SEARCH_WORD,
  payload: word
})

export const getFilteredData = (filteredData) => ({
  type: GET_FILTERED_DATA,
  payload: filteredData
})
