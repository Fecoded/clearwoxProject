import { useState, Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { createCustomer } from '../../../redux/retail/retail.action'
import { selectLoading } from '../../../redux/retail/retail.selector'


const AddCustomer = ({ createCustomer, loading }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [email, setEmail] = useState('')
    const [birthday, setBirthday] = useState('')
    const [creditLimt, setCreditLimt] = useState('')
    const [validity, setValidity] = useState('')
    const [enableLoyalty, setEnableLoyalty] = useState(false)

    useEffect(() => {
        if(!loading){
            setFirstName('')
            setLastName('')
            setAddress('')
            setMobileNo('')
            setEmail('')
            setBirthday('')
            setBirthday('')
            setCreditLimt('')
        }
    },[loading])

    const hideModal = () => {}

    const onSubmit = e => {
        e.preventDefault()
        createCustomer({
            firstName,
            lastName,
            address,
            mobileNo,
            email,
            birthday,
            creditLimt: +creditLimt,
            validity: +validity,
            enableLoyalty,
            hideModal
        })
    }


    return (
    <div className="modal fade" id="addcustomerModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={onSubmit}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Customer Dialog</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
           
                <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="firstname">Firstname</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Firstname"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="lastname">Lastname</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Lastname"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        />
               </div>
               <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="mobile no">Mobile No</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Mobile No"
                            name="mobileNo"
                            value={mobileNo}
                            onChange={(e) => setMobileNo(e.target.value)}
                            required
                            />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="eg. example@clearwox.com"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="date of birth">Date of Birth</label>
                    <input 
                        type="date" 
                        className="form-control"
                        name="birthday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        required
                        />
               </div>
               <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="creditLimt">Credit Limit</label>
                        <input 
                            type="number" 
                            className="form-control"
                            placeholder="Credit Limit"
                            name="creditLimit"
                            value={creditLimt}
                            onChange={(e) => setCreditLimt(e.target.value)}
                            required
                            />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="validity">Validity</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Validity"
                            name="validity"
                            value={validity}
                            onChange={(e) => setValidity(e.target.value)}
                            required
                            />
                    </div>
                </div>
               
                <div className="custom-control custom-switch custom-control-inline">
                    <input 
                        type="checkbox" 
                        className="custom-control-input" 
                        id="customSwitchInline3" 
                        defaultChecked
                        name="enableLoyalty"
                        value={enableLoyalty}
                        onChange={() => setEnableLoyalty(!enableLoyalty)}
                        />
                    <label className="custom-control-label" htmlFor="customSwitchInline3">Enable Loyalty</label>
                </div>
           
            </div>
            <div className="modal-footer">
                {loading ? (
                    <button type="button" className="btn btn-primary" disabled>
                        <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                            Loading...
                </button>
                ) : (
                    <Fragment>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Fragment>
                    )}
            </div>
            </form>
        </div>
    </div> 
)}

const mapStateToProps = createStructuredSelector({
    loading: selectLoading
})


export default connect(mapStateToProps, { createCustomer})(AddCustomer)