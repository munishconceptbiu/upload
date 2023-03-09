import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DashboardIcon, AnalysisIcon, NotificationsMenuIcon, ArticleIcon, SocialIcon, LoginIcon, UsersIcon, ProfileIcon, EyeIcon, JounalistIcon, OrganizationInfoIcon, WidgetBuildingIcon, ListningIcon } from "../Icons/icons.component";
import { NavLink, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { logout } from '../store/actions/AuthActions';
import { store } from '../store/store';

import './sidebars.sass'
const AppSidebar = (props) => {
  const state = store.getState();

  const dispatch = useDispatch();
  const [showMaster, setShowMaster] = React.useState(false)
  let navigate = useNavigate();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
    function onLogout() {
      dispatch(logout(navigate));
   }
  return (
    <>
    <Toaster />
    <div className="d-flex flex-column flex-shrink-0 bg-light leftNavigationWrap" style={{width: "5.3rem" }}>
    <a href="/" className="d-block main-logo link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
      {/* <svg className="bi" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
      <span className="visually-hidden">Icon-only</span> */}
      <img src='https://www.conceptbiu.com/images/logo.svg'></img>
    </a>
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      {/*<li className="nav-item">
         <NavLink to="/dashboard" className="nav-link " aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
          <span className='menuIcon'><DashboardIcon /></span>
          <span className='menuTitle'>Dashboard</span>
        </NavLink>
      </li>
       <li>
        <NavLink to="/view-upload" className="nav-link" title="View Upload" data-bs-toggle="tooltip" data-bs-placement="right">
        <span className='menuIcon'><EyeIcon /></span>
        <span className='menuTitle'>Uploads</span>
        </NavLink>
      </li> */}
       <li>
        <NavLink to="/uploads" className="nav-link" title="Uploads" data-bs-toggle="tooltip" data-bs-placement="right">
        <span className='menuIcon'><EyeIcon /></span>
        <span className='menuTitle'>Uploads</span>
        </NavLink>
      </li>
      <li>
      <NavLink to="/view-setting" className="nav-link" title="Setting" data-bs-toggle="tooltip" data-bs-placement="right">
         <span className='menuIcon'><NotificationsMenuIcon /></span>
         <span className='menuTitle'>Settings</span>
        </NavLink>
      </li>
      {state?.auth?.auth?.role === 'admin' && 
         <li>
      <NavLink to="/view-users" className="nav-link" title="Users" data-bs-toggle="tooltip" data-bs-placement="right">
         <span className='menuIcon'><UsersIcon /></span>
         <span className='menuTitle'>Users</span>
        </NavLink>
      </li>
    }
      {/* <li>
      <NavLink to="/view-social" className="nav-link" title="Setting" data-bs-toggle="tooltip" data-bs-placement="right">
         <span className='menuIcon'><SocialIcon /></span>
         <span className='menuTitle'>Social</span>
        </NavLink>
      </li> */}
      <li>
      <NavLink to="/profile" className="nav-link" title="Setting" data-bs-toggle="tooltip" data-bs-placement="right">
         <span className='menuIcon'><ProfileIcon /></span>
         <span className='menuTitle'>Profile</span>
        </NavLink>
      </li>
      <li>
      <a  onClick={ e => setShowMaster(showMaster === true ? false : true)} className="nav-link" title="Master" data-bs-toggle="tooltip" data-bs-placement="right">
         <span className='menuIcon'><DashboardIcon /></span>
         <span className='menuTitle'>Master</span>
        </a>
      </li>
      {showMaster === true &&
      <ul style={{ marginLeft: "-34px" }}>
      <li style={{ padding: "1px 22px", fontSize: "14px" }}>
      <NavLink to="/publications" className="nav-link" title="Publication" data-bs-toggle="tooltip" data-bs-placement="right">
         <span className='menuIcon'><AnalysisIcon /></span>
         <span className='menuTitle'>Publication</span>
        </NavLink>
      </li>

      <li style={{ padding: "1px 22px", fontSize: "14px" }}>
      <NavLink to="/spokepersons" className="nav-link" title="SpokePerson" data-bs-toggle="tooltip" data-bs-placement="right">
         <span className='menuIcon'><SocialIcon /></span>
         <span className='menuTitle'>SpokePerson</span>
        </NavLink>
      </li>

      <li style={{ padding: "1px 22px", fontSize: "14px" }}>
      <NavLink to="/journalist" className="nav-link" title="Journalist" data-bs-toggle="tooltip" data-bs-placement="right">
         <span className='menuIcon'><JounalistIcon /></span>
         <span className='menuTitle'>Journalist</span>
        </NavLink>
      </li>
      <li style={{ padding: "1px 22px", fontSize: "14px" }}>
      <NavLink to="/themes" className="nav-link" title="Theme" data-bs-toggle="tooltip" data-bs-placement="right">
         <span className='menuIcon'><OrganizationInfoIcon /></span>
         <span className='menuTitle'>Theme</span>
        </NavLink>
      </li>
      <li style={{ padding: "1px 22px", fontSize: "14px" }}>
      <NavLink to="/keywords" className="nav-link" title="Keyword" data-bs-toggle="tooltip" data-bs-placement="right">
         <span className='menuIcon'><ListningIcon /></span>
         <span className='menuTitle'>Keyword</span>
        </NavLink>
      </li>
      <li style={{ padding: "1px 22px", fontSize: "14px" }}>
      <NavLink to="/topics" className="nav-link" title="Topic" data-bs-toggle="tooltip" data-bs-placement="right">
         <span className='menuIcon'><ArticleIcon /></span>
         <span className='menuTitle'>Topic</span>
        </NavLink>
      </li>
      </ul>
      }
     <li>
      <NavLink to={"/Articlelist"}  className="nav-link" title="Articlelist" data-bs-toggle="tooltip" data-bs-placement="right">
         <span className='menuIcon'><AnalysisIcon /></span>
         <span className='menuTitle'>Artical List</span>
        </NavLink>
      </li>
      <li>
     <NavLink to="/#" onClick={onLogout} className="nav-link" title="Logout" data-bs-toggle="tooltip" data-bs-placement="right">
        <span className='menuIcon'><LoginIcon /></span>
         <span className='menuTitle'>Logout</span>
        </NavLink>
      </li>
      
      {/* <li>
        <a href="#" className="nav-link py-3 " title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg className="bi" width="24" height="24" role="img" aria-label="Customers"><use xlinkHref="#people-circle"/></svg>
        </a>
      </li> */}
    </ul>
    
  </div>
  </>

  )
}

export default React.memo(AppSidebar)
