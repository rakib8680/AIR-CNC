import { createBrowserRouter } from 'react-router-dom'
import { getRoom } from '../api/rooms'
import DashboardLayout from '../layouts/DashboardLayout'
import Main from '../layouts/Main'
import AddRoom from '../pages/Dashboard/AddRoom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/room/:id',
        element:
          (<PrivateRoute>
            <RoomDetails />
          </PrivateRoute>),
        loader: ({params})=> getRoom(params.id)
      },
    ],
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'signUp',
    element: <SignUp></SignUp>
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'addRoom',
        element: <AddRoom />
      }
    ]
  }
])
