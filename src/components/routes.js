import { Fragment } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'

import { selectCurrentUser } from '../redux/user/user.selector'

// Error Handling
// import ErrorHandler from '../components/error-boundary/error-boundary.component';
// Spinner Component
// import Spinner from './spinner/spinner.component'
// Protected Route
import PrivateRouteUser from './routing/PrivateRouteUser'

import Navigation from '../components/admin/navigation'

// Retail Component
// const Login = lazy(() => import('./admin/auth/login.component'));
// const Sales = lazy(() => import('./admin/retails/sales/sales.component'));
// const Products = lazy(() => import('./admin/retails/admin/product.component'));
// const Manufacturers = lazy(() => import('./admin/retails/admin/manufacturer.component'))
// const Departments = lazy(() => import('./admin/retails/admin/department.component'))
// const Categories = lazy(() => import('./admin/retails/admin/categories.component'))
// const Customers = lazy(() => import('./admin/retails/admin/customers.component'))
// const Suppliers = lazy(() => import('./admin/retails/admin/suppliers.component'))
// const PurchaseStock = lazy(() => import('./admin/retails/admin/purchase-stock.component'))
// const Stores = lazy(() => import('./admin/retails/admin/store.component'))
// const Outlets = lazy(() => import('./admin/retails/admin/outlet.component'))
// const AdjustStock = lazy(() => import('./admin/retails/admin/adjustStock.component'))
  import Login from './admin/auth/login.component';
  import Sales from './admin/retails/sales/sales.component';
  import Products from './admin/retails/admin/product.component';
  import Manufacturers from './admin/retails/admin/manufacturer.component';
  import Departments from './admin/retails/admin/department.component';
  import Categories from './admin/retails/admin/categories.component';
  import Customers from './admin/retails/admin/customers.component'
  import Staff from './admin/retails/admin/staff.component'
  import Suppliers from './admin/retails/admin/suppliers.component';
  import PurchaseStock from './admin/retails/operation/purchase-stock.component';
  import Stores from './admin/retails/admin/store.component';
  import Outlets from './admin/retails/admin/outlet.component';
  import AdjustmentType from './admin/retails/admin/adjustStock.component';
  import Designations from './admin/retails/admin/designation.component';
  import AdjustStock from './admin/retails/operation/adjustStock.component';
  import ExpenseItems from "./admin/retails/operation/expense.component";
  import Expenses from './admin/retails/operation/expenses.component'
  import Stocks from "./admin/retails/operation/stocks.component"
  import PurchaseStockDetail from './admin/retails/operation/purchaseStock.component'

const Routes = ({ user: { token }}) => 
  (
    <Fragment>
          {token !== null && <Navigation />}
      <Switch>  
          <PrivateRouteUser exact path="/" component={Sales} />
          <PrivateRouteUser exact path="/retail/sales-items" component={Products} />
          <PrivateRouteUser exact path="/retail/manufacturers" component={Manufacturers} />
          <PrivateRouteUser exact path="/retail/departments" component={Departments} />
          <PrivateRouteUser exact path="/retail/categories" component={Categories} />
          <PrivateRouteUser exact path="/retail/customers" component={Customers} />
          <PrivateRouteUser exact path="/retail/staffs" component={Staff} />
          <PrivateRouteUser exact path="/retail/suppliers" component={Suppliers} />
          <PrivateRouteUser exact path="/retail/purchase-stock" component={PurchaseStock} />
          <PrivateRouteUser exact path="/retail/stores" component={Stores} />
          <PrivateRouteUser exact path="/retail/outlets" component={Outlets} />
          <PrivateRouteUser exact path="/retail/adjustment-type" component={AdjustmentType} />
          <PrivateRouteUser exact path="/retail/adjust-stock" component={AdjustStock} />
          <PrivateRouteUser exact path="/retail/manage-expenses" component={ExpenseItems} />
          <PrivateRouteUser exact path="/retail/expenses" component={Expenses} />
          <PrivateRouteUser exact path="/retail/stocks" component={Stocks} />
          <PrivateRouteUser exact path="/retail/designations" component={Designations} />
          <PrivateRouteUser exact path="/retail/purchase-stock-details" component={PurchaseStockDetail} />
          <Route exact path="/login" render={() => token !== null ? <Redirect to="/" /> : <Login />}/>
      </Switch>
    </Fragment>
  );

Routes.propTypes = {
  user: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

export default connect(mapStateToProps)(Routes);
