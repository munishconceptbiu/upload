import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const qualitative = React.lazy(() => import('./views/dashboard/QaulitativeReport1'))
const ViewUpload = React.lazy(() => import('./views/dashboard/ViewUpload'))
const ViewSetting = React.lazy(() => import('./views/dashboard/ViewSetting'))
const AddSetting = React.lazy(() => import('./views/dashboard/AddSetting'))
const Social = React.lazy(() => import('./views/dashboard/Social'))

const Users = React.lazy(() => import('./views/pages/user/Users'))
const AddUser = React.lazy(() => import('./views/pages/user/AddUser'))
const EditUser = React.lazy(() => import('./views/pages/user/EditUser'))

const Profile = React.lazy(() => import('./views/pages/profile/Profile'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/qualitative', name: 'qualitative', element: qualitative },
  { path: '/view-upload', name: 'View Upload', element: ViewUpload },
  { path: '/view-setting', name: 'View Setting', element: ViewSetting },
  { path: '/view-social', name: 'View Social', element: Social },
  { path: '/add-setting', name: 'Add Setting', element: AddSetting },
  { path: '/edit-setting/:client_id', name: 'Edit Setting', element: EditSetting },
  { path: '/view-users', name: 'View Users', element: Users },
  { path: '/add-user', name: 'Add User', element: AddUser },
  { path: '/edit-user/:user_id', name: 'Edit User', element: EditUser },
  { path: '/profile', name: 'Profile', element: Profile }
]

export default routes
