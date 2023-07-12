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
import { useDispatch } from 'react-redux';
import { LogoutUser } from '../../redux-toolkit/reducers/UserReducer';

export default function Topbar() {
    const dispatch = useDispatch()
    //logout user
    const handleLogout = () => {
        dispatch(LogoutUser());
    }

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
                                        src="data:image/jpeg;base64,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"
                                        className="topbarImg"
                                        alt="Avatar"
                                        loading="lazy"
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
