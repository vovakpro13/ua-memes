import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Routes } from './router-config.ts'
import Root from '../modules/root'
import Home from '../modules/home'
import Store from '../modules/store'

const router = createBrowserRouter([
  {
    path: Routes.Root,
    element: <Root />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: Routes.Store,
        element: <Store />,
      },
    ],
  },
])

const Router: FC = () => {
  return <RouterProvider router={router} />
}

export default Router
