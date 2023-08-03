import { FC } from 'react'
import * as classNames from 'classnames'

type Props = {
  name: string
  selected?: boolean
}

const Tag: FC<Props> = ({ name, selected }) => {
  return (
    <div
      className={classNames(
        'py-[6px] px-[14px] border-2 border-[#727477] rounded-full',
        'cursor-pointer text-[15px] font-bold',
        'flex items-center',
        {
          'bg-blue-500 !border-0': selected,
        },
      )}
    >
      {name}
    </div>
  )
}

export default Tag
