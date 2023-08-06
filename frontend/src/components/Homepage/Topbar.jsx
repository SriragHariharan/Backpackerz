import React, {useState, useEffect } from 'react'
import {
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutUser } from '../../redux-toolkit/reducers/UserReducer';
import { instance } from '../../axios/Instance';
import { setNotifications } from '../../redux-toolkit/reducers/NotifReducer';

export default function Topbar() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user?.user)
    
    //logout user
    const handleLogout = () => {
        console.log("UID :", user?.userID);
        instance.post('/auth/logout/'+user?.userID)
        .then(resp => {
            if(resp.data.success === true){
                dispatch(LogoutUser());
            }
        } )
    }
    
    //set notifications
    const [notificationss, setNotificationss] = useState([]);
    const notifications = notificationss?.filter(notif => notif.isSeen === false)
    // console.log("notifications :", notifications)
    useEffect(() =>{
        instance.get('/notifs/notifications')
        .then(resp => {
            setNotificationss(resp.data.data.notifications)
            dispatch(setNotifications(resp.data.data.notifications));
        })
    },[ notificationss, dispatch])

    let defaultImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    let profileImage = process.env.REACT_APP_SERVER_IMG_API+'/profile-pics/'+user?.userID+'-profile.jpg'
    
    return (
    <>
        <header className='topbar' >
            <div className="p-3 text-center bg-primary border-bottom">
                <div className="container">
                <div className="row gy-3">
                    
                    {/* logo starts */}
                    <Link to={'/'} className="col-lg-6 col-sm-6 col-6">
                        <div className="float-start topbar-branding">
                            <img height={'70px'} src="https://w7.pngwing.com/pngs/791/638/png-transparent-backpacking-backpacker-airbnb-logo-angle-microphone-photography.png" alt="" />
                            <h2 className="logo-text d-none d-sm-block mb-0 text-light ms-3">Backpackerz</h2>
                        </div>
                    </Link>
                    {/* logo ends */}

                    {/* icons start */}
                    <div className="topbarRight order-lg-last col-lg-6 col-sm-6 col-6">
                        <div className="topbarIcons">
                        {/* <div className="topbarIconItem">
                            <i className="fa-solid fa-user fa-lg"></i>
                            <span className="topbarIconBadge">1</span>
                        </div> */}
                        <Link to={'/chats'} className="text-light topbarIconItem">
                            <i className="fa-solid fa-envelope fa-xl"></i>
                            <span className="topbarIconBadge">2</span>
                        </Link>
                        <Link to={'/notifications'} className="text-light topbarIconItem me-4">
                            <i className="fa-solid fa-bell fa-xl"></i>
                            <span className="topbarIconBadge">{Number(notifications?.length) || 0}</span>
                        </Link>
                        </div>
                        
                        <div>
                            <MDBNavbarNav>
                                <MDBNavbarItem>
                                    <MDBDropdown>
                                    <MDBDropdownToggle tag="a" className="nav-link d-flex align-items-center" >
                                        <img
                                            src={profileImage }
                                            className="topbarImg"
                                            alt="Avatar"
                                            loading="lazy"
                                            onError={({ currentTarget }) => {
                                              currentTarget.onerror = null; // prevents looping
                                              currentTarget.src=defaultImg;
                                            }}
                                        />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem className='px-3 py-2'>
                                            <Link to={'/profile'}>Profile</Link>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem className='px-3 py-2'>
                                            <Link to={'/profile'}>Online</Link>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem className='px-3 py-2'>
                                            <Link onClick={handleLogout}>Logout</Link>
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </div>
                    </div>
                    {/* icons ends */}

                    {/* searchbar start */}
                    {/* <div className="col-lg-4 col-md-12 col-12">
                        <div className="input-group float-center">
                            <div className="form-outline searchbar">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input type="search" className="form-control w-100" placeholder={'Search for friends, posts & videos....'} />
                            </div>
                        </div>
                    </div> */}
                    {/* searchbar ends */}
                
                </div>
                </div>
            </div>
        </header>

    </>
  )
}
