import { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { updateCustomer } from '../../../redux/retail/retail.action'
import { selectLoading } from '../../../redux/retail/retail.selector'

const EditCustomer = ({ customer, updateCustomer, loading }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [email, setEmail] = useState('')
    const [birthday, setBirthday] = useState('')
    const [creditLimit, setCreditLimit] = useState('')
    const [validity, setValidity] = useState('')
    const [enableLoyalty, setEnableLoyalty] = useState(false)

    useEffect(() => {
        if(customer) {
            setFirstName(customer.firstName);
            setLastName(customer.lastName);
            setAddress(customer.address);
            setMobileNo(customer.mobileNo);
            setEmail(customer.email);
            setBirthday(customer.birthday);
            setCreditLimit(customer.creditLimit);
            setValidity(customer.validity);
            setEnableLoyalty(customer.enableLoyalty)
        }
    }, [customer])
    
    const hideModal = () => {}

    const onSubmit = (e) => {
        e.preventDefault()
        updateCustomer({
            id: customer.id,
            firstName,
            lastName,
            address,
            email,
            mobileNo,
            birthday,
            creditLimit: +creditLimit,
            validity: +validity,
            enableLoyalty,
            hideModal
        })
        
    }


    return (
    <div className="modal fade" id="editcustomerModal" role="dialog" aria-hidden="true">
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
                            name='firstname'
                            value={firstName || ''}
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="lastname">Lastname</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Lastname"
                            name='lastname'
                            value={lastName || ''}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Address"
                        name='address'
                        value={address || ''}
                        onChange={(e) => setAddress(e.target.value)}
                        />
               </div>
               <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="mobile no">Mobile No</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Mobile No"
                            name='mobileNo'
                            value={mobileNo || ''}
                            onChange={(e) => setMobileNo(e.target.value)}
                            />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="eg. example@clearwox.com"
                            name='email'
                            value={email || ''}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="date of birth">Date of Birth</label>
                    <input 
                        type="date" 
                        className="form-control"
                        name='birthday'
                        value={birthday || ''}
                        onChange={(e) => setBirthday(e.target.value)}
                        />
               </div>
               <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="creditLimt">Credit Limit</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Credit Limit"
                            name='creditLimit'
                            value={creditLimit}
                            onChange={(e) => setCreditLimit(e.target.value)}
                            />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="validity">Validity</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Validity"
                            name='validity'
                            value={validity}
                            onChange={(e) => setValidity(e.target.value)}
                            />
                    </div>
                </div>
        
                <div className="custom-control custom-switch custom-control-inline">
                        <input 
                            type="checkbox" 
                            className="custom-control-input"
                             id="customSwitchInline2"
                             name='enableLoyalty'
                             value={enableLoyalty}
                             onChange={() => setEnableLoyalty(!enableLoyalty)}
                             checked={enableLoyalty}
                             />
                        <label className="custom-control-label" htmlFor="customSwitchInline2">Enable Loyalty</label>
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

const mapDispatchToProps = dispatch => ({
    updateCustomer: (formData) => dispatch(updateCustomer(formData))
});

const mapStateToProps = createStructuredSelector({
    loading: selectLoading
})


export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer)