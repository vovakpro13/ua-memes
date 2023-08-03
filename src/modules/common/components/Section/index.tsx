import { FC, ReactNode } from 'react'
import * as classNames from 'classnames'

type Props = {
  className?: string
  children?: ReactNode
}

const Section: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={classNames(
        'px-[24px] py-[24px] pb-[16px]',
        'border-b-2 border-[#323436]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Section
