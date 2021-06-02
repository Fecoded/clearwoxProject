import { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { updateSupplier } from '../../../redux/retail/retail.action'
import { selectLoading } from '../../../redux/retail/retail.selector'


const EditSupplier = ({ supplier, updateSupplier, loading }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [email, setEmail] = useState('')
    const [contactName, setContactName] = useState('')

    useEffect(() => {
        if(supplier) {
            setFirstName(supplier.firstName);
            setLastName(supplier.lastName);
            setAddress(supplier.address);
            setMobileNo(supplier.mobileNo);
            setEmail(supplier.email);
            setContactName(supplier.contactName);
        }
    }, [supplier])

    const hideModal = () => {}

    const onSubmit = (e) => {
        e.preventDefault();
        updateSupplier({
            id: supplier.id,
            firstName,
            lastName,
            address,
            mobileNo,
            email,
            contactName,
            hideModal
        })
       
    }

    return (
    <div className="modal fade" id="editsupplierModal" role="dialog" aria-hidden="true">
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
                        <label htmlFor="contactName">Contact Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Contact Name"
                            name='contactName'
                            value={contactName || ''}
                            onChange={(e) => setContactName(e.target.value)}
                            />
                            
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
    updateSupplier: (formData) => dispatch(updateSupplier(formData))
});

const mapStateToProps = createStructuredSelector({
    loading: selectLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(EditSupplier)