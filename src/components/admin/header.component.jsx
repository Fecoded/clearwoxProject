import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    
<div className="header">

    <div>
        <ul className="navbar-nav">

            <li className="nav-item navigation-toggler">
                <Link to="#!" className="nav-link" title="Hide navigation">
                <span className="iconify" data-icon="bi:arrow-left" data-inline="false"></span>
                </Link>
            </li>
            <li className="nav-item navigation-toggler mobile-toggler">
                <Link to="#!" className="nav-link" title="Show navigation">
                <span className="iconify" data-icon="clarity:menu-line" data-inline="false"></span>
                </Link>
            </li>
         

            <li className="nav-item">
                <Link to="#!" className="nav-link dropdown-toggle" data-toggle="dropdown">Create</Link>
                <div className="dropdown-menu">
                    <Link to="#!" className="dropdown-item">User</Link>
                    <Link to="#!" className="dropdown-item">Category</Link>
                    <Link to="#!" className="dropdown-item">Product</Link>
                    <Link to="#!" className="dropdown-item">Report</Link>
                </div>
            </li>
            <li className="nav-item dropdown">
                <Link to="#!" className="nav-link dropdown-toggle" data-toggle="dropdown">Apps</Link>
                <div className="dropdown-menu dropdown-menu-big">
                    <div className="p-3">
                        <div className="row row-xs">
                            <div className="col-6">
                                <Link to="chat.html">
                                    <div className="p-3 border-radius-1 border text-center mb-3">
                                        <i className="width-23 height-23" data-feather="message-circle"></i>
                                        <div className="mt-2">Chat</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link to="inbox.html">
                                    <div className="p-3 border-radius-1 border text-center mb-3">
                                        <i className="width-23 height-23" data-feather="mail"></i>
                                        <div className="mt-2">Mail</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link to="app-todo.html">
                                    <div className="p-3 border-radius-1 border text-center">
                                        <i className="width-23 height-23" data-feather="check-circle"></i>
                                        <div className="mt-2">Todo</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link to="file-manager.html">
                                    <div className="p-3 border-radius-1 border text-center">
                                        <i className="width-23 height-23" data-feather="file"></i>
                                        <div className="mt-2">File Manager</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <div>
        <ul className="navbar-nav">
        <li className="nav-item">
                <Link to="#!" className="nav-link dropdown-toggle" data-toggle="dropdown">Retail</Link>
                <div className="dropdown-menu">
                    {/* <Link to="#!" className="dropdown-item">Retail</Link> */}
                    <Link to="#!" className="dropdown-item">Hotel</Link>
                    <Link to="#!" className="dropdown-item">Restaurant</Link>
                    <Link to="#!" className="dropdown-item">Saloon</Link>
                </div>
            </li>
           

       
            <li className="nav-item">
                <Link to="#!" className="nav-link" title="Search" data-toggle="dropdown">
                <span className="iconify" data-icon="bi:search" data-inline="false"></span>
                </Link>
                <div className="dropdown-menu p-2 dropdown-menu-right">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                            <div className="input-group-prepend">
                                <button className="btn" type="button">
                                <span className="iconify" data-icon="bi:search" data-inline="false"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </li>
           
            <li className="nav-item dropdown">
                <Link to="#!" className="nav-link" title="Fullscreen" data-toggle="fullscreen">
                <span className="iconify maximize" data-icon="feather:maximize" data-inline="false"></span>
                <span className="iconify minimize" data-icon="feather:minimize" data-inline="false"></span>
                   
                </Link>
            </li>
          
            <li className="nav-item dropdown">
                <Link to="#!" className="nav-link nav-link-notify" title="Chats" data-toggle="dropdown">
                <span className="iconify" data-icon="feather:message-circle" data-inline="false"></span>
                </Link>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                    <div className="p-4 text-center d-flex justify-content-between"
                         data-backround-image="https://via.placeholder.com/1000X563">
                        <h6 className="mb-0">Chats</h6>
                        <small className="font-size-11 opacity-7">2 unread chats</small>
                    </div>
                    <div>
                        <ul className="list-group list-group-flush">
                            <li>
                                <Link to="#!" className="list-group-item d-flex hide-show-toggler">
                                    <div>
                                        <figure className="avatar avatar-sm m-r-15">
                                            <img src="https://via.placeholder.com/128X128"
                                                 className="rounded-circle" alt="user"/>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                            Herbie Pallatina
                                            <i title="Mark as read" data-toggle="tooltip"
                                               className="hide-show-toggler-item fa fa-circle-o font-size-11"></i>
                                        </p>
                                        <div className="small text-muted">
                                            <span className="mr-2">02:30 PM</span>
                                            <span>Have you madimage</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#!"
                                   className="list-group-item d-flex align-items-center hide-show-toggler">
                                    <div>
                                        <figure className="avatar avatar-sm m-r-15">
                                            <img src="https://via.placeholder.com/128X128"
                                                 className="rounded-circle" alt="user"/>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                            Andrei Miners
                                            <i title="Mark as read" data-toggle="tooltip"
                                               className="hide-show-toggler-item fa fa-circle-o font-size-11"></i>
                                        </p>
                                        <div className="small text-muted">
                                            <span className="mr-2">08:36 PM</span>
                                            <span>I have a meetinimage</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="text-divider small pb-2 pl-3 pt-3">
                                <span>Old chats</span>
                            </li>
                            <li>
                                <Link to="#!"
                                   className="list-group-item d-flex align-items-center hide-show-toggler">
                                    <div>
                                        <figure className="avatar avatar-sm m-r-15">
                                            <img src="https://via.placeholder.com/128X128"
                                                 className="rounded-circle" alt="user"/>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                            Kevin added
                                            <i title="Mark as unread" data-toggle="tooltip"
                                               className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                        </p>
                                        <div className="small text-muted">
                                            <span className="mr-2">11:09 PM</span>
                                            <span>Have you madimage</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#!" className="list-group-item d-flex hide-show-toggler">
                                    <div>
                                        <figure className="avatar avatar-sm m-r-15">
                                            <img src="https://via.placeholder.com/128X128"
                                                 className="rounded-circle" alt="user"/>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                            Eugenio Carnelley
                                            <i title="Mark as unread" data-toggle="tooltip"
                                               className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                        </p>
                                        <div className="small text-muted">
                                            <span className="mr-2">Yesterday</span>
                                            <span>I have a meetinimage</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#!"
                                   className="list-group-item d-flex align-items-center hide-show-toggler">
                                    <div>
                                        <figure className="avatar avatar-sm m-r-15">
                                            <img src="https://via.placeholder.com/128X128"
                                                 className="rounded-circle" alt="user"/>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                            Neely Ferdinand
                                            <i title="Mark as unread" data-toggle="tooltip"
                                               className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                        </p>
                                        <div className="small text-muted">
                                            <span className="mr-2">Yesterday</span>
                                            <span>I have a meetinimage</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="p-2 text-right">
                        <ul className="list-inline small">
                            <li className="list-inline-item">
                                <Link to="#!">Mark All Read</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
       
            <li className="nav-item dropdown">
                <Link to="#!" className="nav-link nav-link-notify" title="Notifications" data-toggle="dropdown">
                <span className="iconify" data-icon="ant-design:bell-outlined" data-inline="false"></span>
                </Link>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                    <div className="p-4 text-center d-flex justify-content-between"
                         data-backround-image="https://via.placeholder.com/1000X563">
                        <h6 className="mb-0">Notifications</h6>
                        <small className="font-size-11 opacity-7">1 unread notifications</small>
                    </div>
                    <div>
                        <ul className="list-group list-group-flush">
                            <li>
                                <Link to="#!" className="list-group-item d-flex hide-show-toggler">
                                    <div>
                                        <figure className="avatar avatar-sm m-r-15">
                                                <span className="avatar-title bg-success-bright text-success rounded-circle">
                                                    <i className="ti-user"></i>
                                                </span>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                            New customer registered
                                            <i title="Mark as read" data-toggle="tooltip"
                                               className="hide-show-toggler-item fa fa-circle-o font-size-11"></i>
                                        </p>
                                        <span className="text-muted small">20 min ago</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="text-divider small pb-2 pl-3 pt-3">
                                <span>Old notifications</span>
                            </li>
                            <li>
                                <Link to="#!" className="list-group-item d-flex hide-show-toggler">
                                    <div>
                                        <figure className="avatar avatar-sm m-r-15">
                                                <span className="avatar-title bg-warning-bright text-warning rounded-circle">
                                                    <i className="ti-package"></i>
                                                </span>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                            New Order Recieved
                                            <i title="Mark as unread" data-toggle="tooltip"
                                               className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                        </p>
                                        <span className="text-muted small">45 sec ago</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#!"
                                   className="list-group-item d-flex align-items-center hide-show-toggler">
                                    <div>
                                        <figure className="avatar avatar-sm m-r-15">
                                                <span className="avatar-title bg-danger-bright text-danger rounded-circle">
                                                    <i className="ti-server"></i>
                                                </span>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                            Server Limit Reached!
                                            <i title="Mark as unread" data-toggle="tooltip"
                                               className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                        </p>
                                        <span className="text-muted small">55 sec ago</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#!"
                                   className="list-group-item d-flex align-items-center hide-show-toggler">
                                    <div>
                                        <figure className="avatar avatar-sm m-r-15">
                                                <span className="avatar-title bg-info-bright text-info rounded-circle">
                                                    <i className="ti-layers"></i>
                                                </span>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                            Apps are ready for update
                                            <i title="Mark as unread" data-toggle="tooltip"
                                               className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                        </p>
                                        <span className="text-muted small">Yesterday</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="p-2 text-right">
                        <ul className="list-inline small">
                            <li className="list-inline-item">
                                <Link to="#!">Mark All Read</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
          
            <li className="nav-item dropdown">
                <Link to="#!" className="nav-link" title="User menu" data-toggle="dropdown">
                <span className="iconify" data-icon="ant-design:setting-outlined" data-inline="false"></span>
                </Link>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                    <div className="p-4 text-center d-flex justify-content-between"
                         data-backround-image="https://via.placeholder.com/1000X563">
                        <h6 className="mb-0">Settings</h6>
                    </div>
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked/>
                                    <label className="custom-control-label" htmlFor="customSwitch1">Allow notifications.</label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch2"/>
                                    <label className="custom-control-label" htmlFor="customSwitch2">Hide user requests</label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch3" defaultChecked/>
                                    <label className="custom-control-label" htmlFor="customSwitch3">Speed up demands</label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch4" defaultChecked/>
                                    <label className="custom-control-label" htmlFor="customSwitch4">Hide menus</label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch5"/>
                                    <label className="custom-control-label" htmlFor="customSwitch5">Remember next visits</label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch6"/>
                                    <label className="custom-control-label" htmlFor="customSwitch6">Enable report generation.</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
       
        </ul>

       
        <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item header-toggler">
                <Link to="#!" className="nav-link">
                    <i data-feather="arrow-down"></i>
                </Link>
            </li>
        </ul>
       
    </div>

</div>
)

export default Header