
const SelectStore = ({ children }) => {

    return (
    <div className='hidden' id="selectStoreModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            {children}
        </div>
    </div> 
)}


export default SelectStore