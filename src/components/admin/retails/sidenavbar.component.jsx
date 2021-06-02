import { connect } from 'react-redux'
import { logout } from '../../../redux/user/user.action'
import { Link } from 'react-router-dom'


const Navigation = ({ logout }) => (
    <div className="navigation">

    <div className="navigation-menu-tab">
        <div>
            <div className="navigation-menu-tab-header" data-toggle="tooltip" title="StoreApp" data-placement="right">
                <Link to="https://themeforest.net/licenses/standard" className="nav-link" data-toggle="dropdown" aria-expanded="false">
                    <figure className="avatar avatar-sm">
                        <img src="/assets/media/image/favicon.png" className="rounded-circle" alt="avatar"/>
                    </figure>
                </Link>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                    <div className="p-3 text-center" data-backround-image="https://via.placeholder.com/1000X563">
                        <figure className="avatar mb-3">
                            <img src='https://via.placeholder.com/1000X563' className="rounded-circle" alt="img"/>
                        </figure>
                        <h6 className="d-flex align-items-center justify-content-center">
                            Roxana Roussell
                            <Link to="https://themeforest.net/licenses/standard" className="btn btn-primary btn-sm ml-2" data-toggle="tooltip" title="Edit profile">
                                <i data-feather="edit-2"></i>
                            </Link>
                        </h6>
                        <small>Balance: <strong>$105</strong></small>
                    </div>
                    <div className="dropdown-menu-body">
                        <div className="border-bottom p-4">
                            <h6 className="text-uppercase font-size-11 d-flex justify-content-between">
                                Storage
                                <span>%25</span>
                            </h6>
                            <div className="progress h-8">
                                <div className="progress-bar bg-primary w-35" role="progressbar"
                                     aria-valuenow="35"
                                     aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="list-group list-group-flush">
                            <Link to="#!" className="list-group-item">Profile</Link>
                            <Link to="https://themeforest.net/licenses/standard" className="list-group-item d-flex">
                                Followers <span className="text-muted ml-auto">214</span>
                            </Link>
                            <Link to="https://themeforest.net/licenses/standard" className="list-group-item d-flex">
                                Inbox <span className="text-muted ml-auto">18</span>
                            </Link>
                            <Link to="#!" className="list-group-item" data-sidebar-target="#settings">Billing</Link>
                            <Link to="#!" className="list-group-item" data-sidebar-target="#settings">Need help?</Link>
                            <Link to="#!" className="list-group-item text-danger" data-sidebar-target="#settings">Sign Out!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-grow-1">
            <ul>
          
                <li>
                    {/* eslint-disable-next-line  */}
                    <a className="active" data-toggle="tooltip" data-placement="right" title="Sales"
                       data-nav-target="#dashboards">
                        <span className="iconify" data-icon="mdi-light:cart" data-inline="false"></span>
                    </a>
                </li>
                <li>
                      {/* eslint-disable-next-line  */}
                    <a data-toggle="tooltip" data-placement="right" title="Operations"
                       data-nav-target="#elements">
                        <span className="iconify" data-icon="clarity:layers-line" data-inline="false"></span>
                    </a>
                </li>
                <li>
                      {/* eslint-disable-next-line  */}
                    <a data-toggle="tooltip" data-placement="right" title="Admin" data-nav-target="#apps">
                    <span className="iconify" data-icon="feather:tool" data-inline="false"></span>
                    </a>
                </li>
                <li>
                      {/* eslint-disable-next-line  */}
                    <a data-toggle="tooltip" data-placement="right" title="Report" data-nav-target="#pages">
                    <span className="iconify" data-icon="feather:bar-chart-2" data-inline="false"></span>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li>
                      {/* eslint-disable-next-line  */}
                    <a data-toggle="tooltip" data-placement="right" title="Settings">
                    <span className="iconify" data-icon="clarity:settings-line" data-inline="false"></span>
                    </a>
                </li>
                <li>
                      {/* eslint-disable-next-line  */}
                    <a data-toggle="tooltip" data-placement="right" title="Logout" onClick={logout}>
                    <span className="iconify" data-icon="feather:log-out" data-inline="false"></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div className="navigation-menu-body">

      
        <div>
            <div id="navigation-logo">
                <Link to="index.html">
                    <img className="logo h-38" src="/assets/media/image/logo.png" alt="logo"/>
                    {/* <img className="logo-light" src="/assets/media/image/logo-light.png" alt="light logo"/> */}
                </Link>
            </div>
        </div>
        

        <div className="navigation-menu-group">

            <div className="open" id="dashboards">
                <ul>
                    <li className="navigation-divider">Shop</li>
                    <li>
                        <Link to="/">
                            <span>Sales</span>
                            {/* <span className="badge badge-danger">5</span> */}
                        </Link>
                    </li>
                    <li>
                        <Link to="/retail/salesitems">
                            <span>Sales Items</span>
                            {/* <span className="badge badge-danger">5</span> */}
                        </Link>
                    </li>
                       
                    {/* <li className="navigation-divider">Followers</li> */}
                    
                </ul>
            </div>
            <div id="apps">
                <ul>
                    <li className="navigation-divider">ITEMS</li>
                    <li>
                        <Link to="/retail/sales-items">
                            <span>Product & Services</span>
                            {/* <span className="badge badge-danger">5</span> */}
                        </Link>
                    </li>
                    <li>
                        <Link to="/retail/manufacturers">
                            <span>Product Manufacturers</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/retail/departments">
                            <span>Product Department</span>
                            {/* <span className="badge badge-warning">2</span> */}
                        </Link>
                    </li>
                    <li>
                        <Link to="/retail/categories">
                            <span>Item Categories</span>
                        </Link>
                    </li>
                
                    <li className="navigation-divider">INVENTORY</li>
                    <li>
                        <Link to="/retail/outlets">
                            <span>Outlets</span>
                            {/* <span className="badge badge-danger">5</span> */}
                        </Link>
                    </li>
                    <li>
                        <Link to="/retail/stores">
                            <span>Stores</span>
                            {/* <span className="badge badge-danger">5</span> */}
                        </Link>
                    </li>
                    <li>
                        <Link to="/retail/adjustment-type">
                            <span>Adjustment Type</span>
                        </Link>
                    </li>
                  

                    <li className="navigation-divider">ACCOUNTS</li>
                    <li><Link to="/retail/manage-expenses">Expense Items</Link></li>
                    <li><Link to="/retail/manage-expenses">Manage Accounts</Link></li>
                    <li><Link to="/retail/manage-expenses">Cash Balances</Link></li>


                    <li className="navigation-divider">TRANSACTORS</li>
                    <li>
                        <Link to="/retail/customers">
                            <span>Customer Management</span>
                            {/* <span className="badge badge-danger">5</span> */}
                        </Link>
                    </li>
                    <li>
                        <Link to="/retail/suppliers">
                            <span>Supplier Management</span>
                        </Link>
                    </li>
                    <li>
                        
                        <Link to="/retail/staffs">Staff Management</Link>     
                            <ul>
                                <li><Link to="/retail/staffs">Staffs</Link></li>
                                <li><Link to="/retail/designations">Designation</Link></li>
                            </ul>                 
                    </li>
                    {/* <li>
                        <Link to="/retail/designation">
                            <span>Add Designation</span>
                        </Link>
                    </li> */}
                </ul>
            </div>
            <div id="elements">
                <ul>
                    <li className="navigation-divider">Accounts</li>
                    
                        <li><Link to="/retail/evaculation">Evacuation</Link></li>
                    
                    <li className="navigation-divider">Inventory</li>
                    
                        <li><Link to="/retail/purchase-stock">Purchase Stock</Link></li>
                        <li><Link to="/retail/adjust-stock">Adjust Stock </Link></li>
                        <li><Link to="/retail/stocks">Stock </Link></li>
                    
                    <li className="navigation-divider">Expenses</li>
                    
                        <li><Link to="/retail/expenses">Manage Expenses</Link></li>
                    
                    {/* <li><Link to="avatar.html">Avatar</Link></li>
                    <li><Link to="icons.html">Icons</Link></li>
                    <li><Link to="colors.html">Colors</Link></li>
                    <li>
                        <Link to="#!">Plugins</Link>
                        <ul>
                            <li><Link to="sweet-alert.html">Sweet Alert</Link></li>
                            <li><Link to="lightbox.html">Lightbox</Link></li>
                            <li><Link to="toast.html">Toast</Link></li>
                            <li><Link to="tour.html">Tour</Link></li>
                            <li><Link to="slick-slide.html">Slick Slide</Link></li>
                            <li><Link to="nestable.html">Nestable</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#!">Forms</Link>
                        <ul>
                            <li><Link to="basic-form.html">Form Layouts</Link></li>
                            <li><Link to="custom-form.html">Custom Forms</Link></li>
                            <li><Link to="advanced-form.html">Advanced Form</Link></li>
                            <li><Link to="form-validation.html">Validation</Link></li>
                            <li><Link to="form-wizard.html">Wizard</Link></li>
                            <li><Link to="file-upload.html">File Upload</Link></li>
                            <li><Link to="datepicker.html">Datepicker</Link></li>
                            <li><Link to="timepicker.html">Timepicker</Link></li>
                            <li><Link to="colorpicker.html">Colorpicker</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#!">Tables</Link>
                        <ul>
                            <li><Link to="tables.html">Basic Tables</Link></li>
                            <li><Link to="data-table.html">Datatable</Link></li>
                            <li><Link to="responsive-table.html">Responsive Tables</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#!">Charts</Link>
                        <ul>
                            <li><Link to="apexchart.html">Apex</Link></li>
                            <li><Link to="chartjs.html">Chartjs</Link></li>
                            <li><Link to="justgage.html">Justgage</Link></li>
                            <li><Link to="morsis.html">Morsis</Link></li>
                            <li><Link to="peity.html">Peity</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#!">Maps</Link>
                        <ul>
                            <li><Link to="google-map.html">Google</Link></li>
                            <li><Link to="vector-map.html">Vector</Link></li>
                        </ul>
                    </li> */}
                </ul>
            </div>
            <div id="pages">
                <ul>
                    <li className="navigation-divider">Pages</li>
                    <li><Link to="login.html">Login</Link></li>
                    <li><Link to="register.html">Register</Link></li>
                    <li><Link to="recover-password.html">Recovery Password</Link></li>
                    <li><Link to="lock-screen.html">Lock Screen</Link></li>
                    <li><Link to="profile.html">Profile</Link></li>
                    <li><Link to="timeline.html">Timeline</Link></li>
                    <li><Link to="invoice.html">Invoice</Link></li>

                    <li><Link to="pricing-table.html">Pricing Table</Link></li>
                    <li><Link to="search-result.html">Search Result</Link></li>
                    <li>
                        <Link to="#!">Error Pages</Link>
                        <ul>
                            <li><Link to="404.html">404</Link></li>
                            <li><Link to="404-2.html">404 V2</Link></li>
                            <li><Link to="503.html">503</Link></li>
                            <li><Link to="mean-at-work.html">Mean at Work</Link></li>
                        </ul>
                    </li>
                    <li><Link to="blank-page.html">Starter Page</Link></li>
                    <li>
                        <Link to="#!">Email Templates</Link>
                        <ul>
                            <li><Link to="email-template-basic.html">Basic</Link></li>
                            <li><Link to="email-template-alert.html">Alert</Link></li>
                            <li><Link to="email-template-billing.html">Billing</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#!">Menu Level</Link>
                        <ul>
                            <li>
                                <Link to="#!">Menu Level</Link>
                                <ul>
                                    <li>
                                        <Link to="#!">Menu Level </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
 

</div>
);

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(null, mapDispatchToProps)(Navigation);
