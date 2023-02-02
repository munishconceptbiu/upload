import React from 'react'
import AddKeyword from './views/pages/keyword/Add'
import Keyword from './views/pages/keyword/Keyword'
import AddSpokePerson from './views/pages/spokesperson/Add'
import Spokeperson from './views/pages/spokesperson/Spokesperson'
import AddTheme from './views/pages/theme/Add'
import Theme from './views/pages/theme/Theme'
import AddTopic from './views/pages/topic/Add'
import Topic from './views/pages/topic/Topic'
const Dashboard = React.lazy(() => import('./views/pages/upload/Upload'))
const ViewUpload = React.lazy(() => import('./views/pages/upload/ViewUpload'))
const Uploads = React.lazy(() => import('./views/pages/upload/Uploads'))
const ViewSetting = React.lazy(() => import('./views/pages/settings/ViewSetting'))
const AddSetting = React.lazy(() => import('./views/pages/settings/AddSetting'))
const EditSetting = React.lazy(() => import('./views/pages/settings/EditSetting'))

const Social = React.lazy(() => import('./views/dashboard/Social'))

const Users = React.lazy(() => import('./views/pages/user/Users'))
const AddUser = React.lazy(() => import('./views/pages/user/AddUser'))
const EditUser = React.lazy(() => import('./views/pages/user/EditUser'))

const Profile = React.lazy(() => import('./views/pages/profile/Profile'))

const Articlelist = React.lazy(() => import('./views/pages/articles/Articlelist'))


const Journalist = React.lazy(() => import('./views/pages/journalist/Journalist'))

const AddJournalist = React.lazy(() => import('./views/pages/journalist/Add'))



const Publication = React.lazy(() => import('./views/pages/publication/Publication'))

const AddPublication = React.lazy(() => import('./views/pages/publication/Add'))



const routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  // { path: '/view-upload', name: 'View Upload', element: ViewUpload },
  { path: '/uploads', name: 'Uploads', element: Uploads },
  { path: '/view-setting', name: 'View Setting', element: ViewSetting },
  { path: '/view-social', name: 'View Social', element: Social },
  { path: '/add-setting', name: 'Add Setting', element: AddSetting },
  { path: '/edit-setting/:client_id', name: 'Edit Setting', element: EditSetting },
  { path: '/view-users', name: 'View Users', element: Users },
  { path: '/add-user', name: 'Add User', element: AddUser },
  { path: '/edit-user/:user_id', name: 'Edit User', element: EditUser },
  { path: '/profile', name: 'Profile', element: Profile },
  { path: '/Articlelist', name: 'Articlelist', element: Articlelist },

  { path: '/journalist', name: 'list', element: Journalist },
  { path: '/add-journalist', name: 'add', element: AddJournalist },

  { path: '/publications', name: 'list', element: Publication },
  { path: '/add-publication', name: 'add', element: AddPublication },
  { path: '/edit-publication/:pid', name: 'edit', element: AddPublication },

  { path: '/spokepersons', name: 'list', element: Spokeperson },
  { path: '/add-spokeperson', name: 'add', element: AddSpokePerson },
  { path: '/edit-spokeperson/:sid', name: 'edit', element: AddSpokePerson },
  
  { path: '/themes', name: 'list', element: Theme },
  { path: '/add-theme', name: 'add', element: AddTheme },
  { path: '/edit-theme/:tid', name: 'edit', element: AddTheme },
  
  { path: '/keywords', name: 'list', element: Keyword },
  { path: '/add-keyword', name: 'add', element: AddKeyword },
  { path: '/edit-keyword/:kid', name: 'edit', element: AddKeyword },
  
  { path: '/topics', name: 'list', element: Topic },
  { path: '/add-topic', name: 'add', element: AddTopic },
  { path: '/edit-topic/:tid', name: 'edit', element: AddTopic }
]

export default routes
