import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentAlert } from '../../redux/alert/alert.selector';


const index = ({ alerts }) => 
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
    <div  key={alert.id} className={`alert alert-${alert.alertType} d-flex align-items-center`} role="alert">
        <i className="ti-check mr-2"></i> {alert.msg}
    </div>   
    ));

    

const mapStateToProps = createStructuredSelector({
  alerts: selectCurrentAlert,
});

export default connect(mapStateToProps)(index);