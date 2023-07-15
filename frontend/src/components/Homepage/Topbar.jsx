import React from 'react'
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

export default function Topbar() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user?.user)
    
    //logout user
    const handleLogout = () => dispatch(LogoutUser() )
    
    let defaultImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    let profileImage = process.env.REACT_APP_SERVER_IMG_API+'/profile-pics/'+user?.userID+'-profile.jpg'
    
    console.log(profileImage);

    return (
    <>
        <header className='topbar' >
            <div className="p-3 text-center bg-dark border-bottom">
                <div className="container">
                <div className="row gy-3">
                    
                    {/* logo starts */}
                    <Link to={'/'} className="col-lg-3 col-sm-4 col-4">
                        <div href="https://mdbootstrap.com/" className="float-start" >
                            <div className='text-light d-lg-none' style={{fontSize:'15px'}}><b>Tech🌎Talk</b></div>
                            <h2 className="d-none d-sm-block mb-0 text-light">TECH 🌎 TALK</h2>
                        </div>
                    </Link>
                    {/* logo ends */}

                    {/* icons start */}
                    <div className="topbarRight order-lg-last col-lg-5 col-sm-8 col-8">
                        <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <i className="fa-solid fa-user fa-lg"></i>
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <i className="fa-solid fa-envelope fa-lg"></i>
                            <span className="topbarIconBadge">2</span>
                        </div>
                        <div className="topbarIconItem me-4">
                            <i className="fa-solid fa-bell fa-lg"></i>
                            <span className="topbarIconBadge">1</span>
                        </div>
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
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="input-group float-center">
                            <div className="form-outline searchbar w-100">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input type="search" className="form-control w-100" placeholder='Search for friends, posts & videos....' />
                            </div>
                        </div>
                    </div>
                    {/* searchbar ends */}
                
                </div>
                </div>
            </div>
        </header>

    </>
  )
}
