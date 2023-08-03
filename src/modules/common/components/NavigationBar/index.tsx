import { FC, ReactNode } from 'react'
import * as classNames from 'classnames'
import { ReactComponent as HomeIcon } from '../../../../assets/icons/nav-bar/home.svg'
import { ReactComponent as StoreIcon } from '../../../../assets/icons/nav-bar/store.svg'
import { ReactComponent as BellIcon } from '../../../../assets/icons/nav-bar/bell.svg'
import { ReactComponent as ProfileIcon } from '../../../../assets/icons/nav-bar/profile.svg'
import { ReactComponent as CreatePlusIcon } from '../../../../assets/icons/nav-bar/create-plus.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { Routes } from '../../../../router/router-config.ts'

const NavigationBar: FC = () => {
  return (
    <div
      className={classNames(
        'fixed bottom-0 w-full max-w-[448px] px-[24px] pt-[16px] pb-[32px]',
        'shadow-navbar bg-black-800',
      )}
    >
      <div className='flex items-center justify-between'>
        <NavButton path={Routes.Root}>
          <HomeIcon />
        </NavButton>

        <NavButton path={Routes.Store}>
          <StoreIcon />
        </NavButton>

        <CreateButton />

        <NavButton path={Routes.N} disabled>
          <BellIcon />
        </NavButton>

        <NavButton path={Routes.Profile} disabled>
          <ProfileIcon />
        </NavButton>
      </div>
    </div>
  )
}

const CreateButton = () => {
  return (
    <button
      className='rounded-[100px] p-[8px]'
      style={{ background: 'linear-gradient(90deg, #F62E8E 0%, #AC1AF0 100%)' }}
    >
      <div className='h-[24px] w-[24px]'>
        <CreatePlusIcon />
      </div>
    </button>
  )
}

const NavButton: FC<{ children: ReactNode; path: string } & any> = ({
  children,
  path,
  ...props
}) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isActive = pathname === path

  const onClick = () => navigate(path)

  return (
    <button className={classNames('p-[8px] cursor-pointer ')} onClick={onClick} {...props}>
      <div className={classNames('h-[24px] w-[24px]', { 'opacity-50': !isActive })}>{children}</div>
    </button>
  )
}

export default NavigationBar
