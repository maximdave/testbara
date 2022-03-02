import React from "react";
import { connect } from "react-redux";
import SearchIcon from "../assets/search.svg";
import SearchFilterIcon from "../assets/drop.svg";
import { getFilteredData, getSearchWord } from "../redux/actions";

const SearchBar = ({ placeholder, data, getFilteredData, getSearchWord }) => {
  const handleSearchFilter = () => {
    getSearchWord();
    getFilteredData();
  }
  return (
    <>
    <form className="flex  border border-bgray rounded-lg px-2 py-1 ">
      <img src={SearchIcon} className="w-5" alt="search-icon" />
      <img src={SearchFilterIcon} className="w-3 ml-3" alt="search-icon" />
      <input
        className="text-xs xl:text-base focus:outline-none px-3 py-px xl:px-4 xl:py-0.5 w-96 "
        placeholder={placeholder}
      />
      <button onClick={handleSearchFilter} className="bg-bred rounded-md px-1 py-1 text-xs xl:text-base text-white">
        Search
      </button>
    </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getFilteredData: () => dispatch(getFilteredData()),
  getSearchWord: () => dispatch(getSearchWord()),
});

export default connect(null, mapDispatchToProps)(SearchBar);
