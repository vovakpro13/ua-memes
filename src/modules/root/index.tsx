import { Outlet } from 'react-router-dom'
import NavigationBar from '../common/components/NavigationBar'
import * as classNames from 'classnames'

const Root = () => {
  return (
    <div
      className={classNames(
        'h-[100dvh] overflow-y-auto no-scrollbar pb-[100px] max-w-md m-auto bg-black-800',
      )}
    >
      <div className='flex-1'>
        <Outlet />
      </div>

      <NavigationBar />
    </div>
  )
}

export default Root
