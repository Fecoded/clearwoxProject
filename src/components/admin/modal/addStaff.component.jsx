import { useState, Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { createStaff, getQualification, getDesignation } from '../../../redux/retail/retail.action'
import { selectLoading, selectQualifications, selectDesignation } from '../../../redux/retail/retail.selector'
import Alert from '../../../redux/retail/retail.utils'


const AddStaff = ({ createStaff, loading, qualifications, getQualification, getDesignation, designations }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [resumptionDate, setResumptionDate] = useState('')
    const [qualificationId, setQualificationId] = useState('')
    const [designationId, setDesignationId] = useState('')
    const [suspended, setSuspended] = useState(true)
    const [disengaged, setDisengaged] = useState(false)

    useEffect(() => {
        if(!loading){
            setFirstName('')
            setLastName('')
            setEmail('')
            setAddress('')
            setMobileNo('')
            setDateOfBirth('')
            setResumptionDate('')
            setQualificationId('')
            setDesignationId('')
            setSuspended('')
            setDisengaged('')
        }
        getQualification()
        getDesignation()
    },[loading, getQualification, getDesignation])
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(qualificationId !== '' && designationId !== ''){
            createStaff({
                firstName,
                lastName,
                address,
                mobileNo,
                email,
                dateOfBirth,
                resumptionDate,
                qualificationId: +qualificationId,
                designationId: +designationId,
                suspended: suspended ? suspended : false,
                disengaged: disengaged ? disengaged : false,
                hideModal
            })
        }else {
            if(qualificationId === ''){
                Alert('Please select a qualification from the list')
            } else if(designationId === ''){
                Alert('Please select a designation from the list')
            }
        }
    }

    const hideModal = () => {}

    return (
    <div className="modal fade" id="addstaffModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={onSubmit}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Staff Dialog</h5>
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
                <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="contactName">Date of Birth</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            placeholder="Contact Name"
                            name="dateOfBirth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                         
                            />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="contactName">Resumption Date</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            placeholder="Contact Name"
                            name="resumptionDate"
                            value={resumptionDate}
                            onChange={(e) => setResumptionDate(e.target.value)}
                         
                            />
                    </div>

                </div>
                <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="qualification">Qualification</label>
                        <select 
                            className="form-control" 
                            name="qualificationId"
                            value={qualificationId}
                            onChange={(e) => setQualificationId(e.target.value)}
                         
                        >
                           
                            {qualifications.map(qualification => 
                                <option key={qualification.id} value={qualification.id}>{qualification.description}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="designation">Designation</label>
                        <select
                            className="form-control" 
                            name="designationId"
                            value={designationId}
                            onChange={(e) => setDesignationId(e.target.value)} 
                        >
                            {designations.map(designation => 
                              <option key={designation.id} value={designation.id}>{designation.description}</option>
                                )}
                        </select>
                    </div>

                </div>
                <div className="form-row">
               
                    {/* <div className="custom-control custom-switch custom-control-inline">
                        <input 
                            type="checkbox" 
                            className="custom-control-input" 
                            id="customSwitchInline1"   
                            name='suspended'
                            value={suspended}
        
                            onChange={() => setSuspended(!suspended)}/>
                        <label className="custom-control-label" htmlFor="customSwitchInline1">Suspended</label>
                    </div> */}
                    <div className="form-group col">
                        <div className="custom-control custom-switch custom-control-inline">
                        <input 
                            type="checkbox" 
                            className="custom-control-input" 
                            id="customSwitchInline6" 
                            name='suspended'
                            value={suspended}
                            onChange={() => setSuspended(!suspended)}
                            />
                        <label className="custom-control-label" htmlFor="customSwitchInline6">Suspended</label>
                    </div>

                    </div>
           
           
                <div className="form-group col">
                    <div className="custom-control custom-switch custom-control-inline">
                        <input 
                            type="checkbox" 
                            className="custom-control-input" 
                            id="customSwitch7"  
                            name='disengaged'
                            value={disengaged}
                            onChange={() => setDisengaged(!disengaged)}/>
                        <label className="custom-control-label" htmlFor="customSwitch7">Disengaged</label>
                    </div>
                </div>       
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
    loading: selectLoading,
    qualifications: selectQualifications,
    designations: selectDesignation
})


export default connect(mapStateToProps, { createStaff, getQualification, getDesignation })(AddStaff)