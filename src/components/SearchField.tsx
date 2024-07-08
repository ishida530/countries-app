import { FaSearch } from 'react-icons/fa'
import { ISearchField } from '../types/types'





const SearchField = ({ onChange }: ISearchField) => {

    return (
        <div className="flex border-2 border-none shadow-full-border items-center gap-6 pl-6 bg-white dark:bg-black-200 w-full md:w-[30%] rounded-xl" >
            <FaSearch className="text-gray-500 dark:text-white bg-opacity-0'" size={24} />
            <input placeholder='Search for a country' type="text" onChange={onChange} className='flex h-[50px] w-[100%] border-none rounded-xl dark:bg-black-200 dark:text-white focus:outline-none' />
        </div>
    )
}

export default SearchField