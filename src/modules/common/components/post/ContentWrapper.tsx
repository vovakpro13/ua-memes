import { FC, ReactNode } from 'react'

const ContentWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className='rounded-[16px] w-full max-h-[600px] overflow-hidden'>{children}</div>
}

export default ContentWrapper
