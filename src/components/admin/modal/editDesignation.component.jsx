import { useState,Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { updateDesignation } from '../../../redux/retail/retail.action'
import { selectLoading } from '../../../redux/retail/retail.selector'

const EditDesignation = ({ updateDesignation, loading, designation }) => {
    const [description, setDescription] = useState('')

    const hideModal = () => {}

    const onSubmit = (e) => {
        e.preventDefault()
        updateDesignation({
            id: designation.id,
            description,
            hideModal,
            setDescription
        })
    }

    useEffect(() => {
        if(designation){
            setDescription(designation.description)
        }
      
    }, [designation])


    return (
    <div className="modal fade" id="editdesignationModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={onSubmit}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Designation Dialog</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
             
    
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Description"
                        name='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
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

const mapStateToProps = createStructuredSelector({
    loading: selectLoading
})


export default connect(mapStateToProps, { updateDesignation })(EditDesignation)