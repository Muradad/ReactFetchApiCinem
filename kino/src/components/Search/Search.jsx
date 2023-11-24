import { FaSearch } from "react-icons/fa";
const Search = ({value,onChange,onSubmit}) => {
  return (
    <form className='w-full max-w-lg absolute bottom-0 ' onSubmit={onSubmit}>
      <input 
      onChange={onChange}
       value={value}
        type="text"
        className='w-full px-4 py-4 rounded-md pr-16 outline-none'placeholder='Yaz' />
      <FaSearch className=' absolute right-4 top-5 text-xl cursor-pointer '/>
     </form>
  )
}

export default Search