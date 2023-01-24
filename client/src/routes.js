import React from 'react'
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

const Qualitative = React.lazy(() => import('./views/pages/articles/Qualitative'))
const Journalist = React.lazy(() => import('./views/pages/articles/Journalist'))
const PublicationList = React.lazy(() => import('./views/pages/articles/PublicationList'))
const EditPublication = React.lazy(() => import('./views/pages/create-edit/EditPublication'))
const EditJournalist = React.lazy(() => import('./views/pages/create-edit/EditJournalist'))
const EditSpokePerson = React.lazy(() => import('./views/pages/create-edit/EditSpokePerson'))
const EditKeyword = React.lazy(() => import('./views/pages/create-edit/EditKeyword'))
const Keyword = React.lazy(() => import('./views/pages/articles/Keyword'))
const Spokeperson = React.lazy(() => import('./views/pages/articles/Spokeperson'))
const EditProduct = React.lazy(() => import('./views/pages/create-edit/EditProduct'))
const EditEdition = React.lazy(() => import('./views/pages/create-edit/EditEdition'))
const Edition = React.lazy(() => import('./views/pages/articles/Edition'))
const WtgMaster = React.lazy(() => import('./views/pages/articles/WtgMaster'))
const EditWtgMaster = React.lazy(() => import('./views/pages/create-edit/EditWtgMaster'))
const EditClient = React.lazy(() => import('./views/pages/create-edit/EditClient'))
const Client = React.lazy(() => import('./views/pages/articles/Client'))
const Product = React.lazy(() => import('./views/pages/articles/Product'))



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
  { path: '/Qualitative', name: 'Qualitative', element: Qualitative },
  { path: '/Journalist', name: 'Journalist', element: Journalist },
  { path: '/PublicationList', name: 'Publication List', element: PublicationList },
  { path: '/EditPublication', name: 'Edit Publication', element: EditPublication },
  { path: '/EditJournalist', name: 'Edit Jounalist', element: EditJournalist },
  { path: '/EditSpokePerson', name: 'Edit Spoke Person', element: EditSpokePerson },
  { path: '/EditKeyword', name: 'Edit Keyword', element: EditKeyword },
  { path: '/Spokeperson', name: 'Edit Keyword', element: Spokeperson },
  { path: '/EditProduct', name: 'Spoke Person', element: EditProduct },
  { path: '/Keyword', name: 'Spoke Person', element: Keyword },
  { path: '/EditEdition', name: 'Spoke Person', element: EditEdition },
  { path: '/Edition', name: 'Spoke Person', element: Edition },
  { path: '/WtgMaster', name: 'Spoke Person', element: WtgMaster },
  { path: '/EditWtgMaster', name: 'Spoke Person', element: EditWtgMaster },
  { path: '/EditClient', name: 'Spoke Person', element: EditClient },
  { path: '/Client', name: 'Spoke Person', element: Client },
  { path: '/Product', name: 'Spoke Person', element: Product }
  


]

export default routes