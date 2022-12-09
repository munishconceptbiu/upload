import React from 'react'
const Dashboard = React.lazy(() => import('./views/pages/upload/Upload'))
const ViewUpload = React.lazy(() => import('./views/pages/upload/ViewUpload'))
const ViewSetting = React.lazy(() => import('./views/pages/settings/ViewSetting'))
const AddSetting = React.lazy(() => import('./views/pages/settings/AddSetting'))
const EditSetting = React.lazy(() => import('./views/pages/settings/EditSetting'))

const Social = React.lazy(() => import('./views/dashboard/Social'))

const Users = React.lazy(() => import('./views/pages/user/Users'))
const AddUser = React.lazy(() => import('./views/pages/user/AddUser'))
const EditUser = React.lazy(() => import('./views/pages/user/EditUser'))

const Profile = React.lazy(() => import('./views/pages/profile/Profile'))

const Articlelist = React.lazy(() => import('./views/pages/articles/Articlelist'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/view-upload', name: 'View Upload', element: ViewUpload },
  { path: '/view-setting', name: 'View Setting', element: ViewSetting },
  { path: '/view-social', name: 'View Social', element: Social },
  { path: '/add-setting', name: 'Add Setting', element: AddSetting },
  { path: '/edit-setting/:client_id', name: 'Edit Setting', element: EditSetting },
  { path: '/view-users', name: 'View Users', element: Users },
  { path: '/add-user', name: 'Add User', element: AddUser },
  { path: '/edit-user/:user_id', name: 'Edit User', element: EditUser },
  { path: '/profile', name: 'Profile', element: Profile },
  { path: '/article', name: 'articlelist', element: Articlelist }
]

export default routes
