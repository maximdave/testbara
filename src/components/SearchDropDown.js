import categoriesIcon from '../assets/category.svg';

const SearchDropDown = ({onClickHandler}) => {
    onClickHandler && console.log(onClickHandler)

    
  return (
    <>
      <div className="bg-white w-searchd rounded shadow-lg absolute left-52 top-20">
        <div className='flex items-center p-2 cursor-pointer hover:bg-bogrey'>
            <img className='w-5 mr-3 ' src={categoriesIcon} alt='product-icon'/>
            <p>Products</p>
        </div>
        <div className='flex items-center p-2 cursor-pointer hover:bg-bogrey'>
            <img className='w-5 mr-3 ' src={categoriesIcon} alt='vendor-icon'/>
            <p>Vendor</p>
        </div>

        <div className='flex items-center p-2 cursor-pointer hover:bg-bogrey'>
            <img className='w-5 mr-3 ' src={categoriesIcon} alt='category-icon'/>
            <p>Category</p>
        </div>




      </div>
    </>
  );
};

export default SearchDropDown;
