 import { setTitleFilter,
          setAuthorFilter,
          selectAuthorFilter,
          resetFilters,
          setOnlyFavoriteFilter,
          // selectOnlyFavoriteFilter,
          selectTitleFilter } from "../../redux/slices/filterSlice";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";


 const Filter = () =>{
const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const stateOfTitle  = useSelector( selectTitleFilter); 
 const stateOfAuthor = useSelector(selectAuthorFilter);
 const stateOfOnlyFavorite = useSelector(setOnlyFavoriteFilter);

 const handleByTitle = (e) => dispatch( setTitleFilter(e.target.value))
 const handleByAuthor = (e) => dispatch(setAuthorFilter(e.target.value))
 const handleResetFilters = () => dispatch(resetFilters()) 
  const handleOnlyFavorite = (e) => {
    setChecked(prev => !prev)
    dispatch(setOnlyFavoriteFilter(e.target.checked));}
 

  return (
    <div className=" flex flex-col p-4 m-4 bg-[#f2f2f2] rounded-lg shadow-lg " >
       <div className="flex mb-2 gap-2 flex-wrap items-center ml-17 max-md:flex-wrap">


        <input
        onChange={ handleByTitle}
        value={stateOfTitle}
        type="text"
        placeholder="Filter by title"
        className="w-full px-4 py-2 border-1 border-color-gray-400  rounded-lg"
        />
       </div> 
       <div className="flex mb-2 gap-2 flex-wrap items-center ml-17 max-md:flex-wrap">
        <input
        onChange={ handleByAuthor}
        value={stateOfAuthor }
        type="text"
        placeholder="Filter by Author"
        className="w-full px-4 py-2 border-1 border-color-gray-400  rounded-lg"
        />
       </div>
       <div className="flex gap-2 flex-wrap justify-between items-center ml-17 max-md:flex-wrap">

        <label className="flex items-center cursor-pointer gap-2">
  <input
    type="checkbox"
    checked={stateOfOnlyFavorite}
    onChange={handleOnlyFavorite}
    className="hidden peer"
  />
  <div className="w-5 h-5 border-2 border-gray-400 rounded peer-checked:bg-red-500 peer-checked:border-red-500 flex items-center justify-center">
    {checked && (
      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    )}
  </div>
  <span>Only favorite</span>
</label>
        <button 
        className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
        onClick={handleResetFilters}>
          Reset Filters
        </button>
       </div>
    </div>
  )
 }
 
 export default Filter;