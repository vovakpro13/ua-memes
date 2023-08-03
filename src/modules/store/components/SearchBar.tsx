import * as classNames from 'classnames'
import { ReactComponent as SearchIcon } from '../../../assets/icons/store/search.svg'

const SearchBar = () => {
  return (
    <div className={classNames('w-full rounded-full py-[12px] px-[16px] bg-[#323436]', 'flex ')}>
      <input
        type='text'
        className='appearance-none text-[14px] flex-1'
        placeholder='Знайти шаблони мемів...'
      />

      <div className='w-[20px] h-[20px]'>
        <SearchIcon />
      </div>
    </div>
  )
}

export default SearchBar
