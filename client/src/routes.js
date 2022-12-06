import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const qualitative = React.lazy(() => import('./views/dashboard/QaulitativeReport1'))
const ViewUpload = React.lazy(() => import('./views/dashboard/ViewUpload'))
const ViewSetting = React.lazy(() => import('./views/dashboard/ViewSetting'))
const AddSetting = React.lazy(() => import('./views/dashboard/AddSetting'))
const Social = React.lazy(() => import('./views/dashboard/Social'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/qualitative', name: 'qualitative', element: qualitative },
  { path: '/view-upload', name: 'View Upload', element: ViewUpload },
  { path: '/view-setting', name: 'View Setting', element: ViewSetting },
  { path: '/view-social', name: 'View Social', element: Social },
  { path: '/add-setting', name: 'Add Setting', element: AddSetting },

]

export default routes
