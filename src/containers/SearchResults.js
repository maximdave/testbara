import React from 'react';
import Data from "../searchData/index.json"

const SearchResults = () => {
  
  return (
    <section className=" search-results fixed z-10 shadow-2xl overflow-hidden overflow-y-auto h-72 bg-white mt-1 py-10  w-sr top-16 left-80  rounded-lg">
     
     {Data.map((val, index) => (
        <p className='pb-3 px-10' key={index}>{val.title}</p>
    ))}
      
    </section>
  )
}

export default SearchResults;
