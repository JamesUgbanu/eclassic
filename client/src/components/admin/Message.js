import React from 'react';
import { connect } from 'react-redux';
import { removeAlert } from '../../actions/index'

const Alert = ({ alerts, onRemove }) => alerts !== null
&& alerts.length > 0
&& alerts.map(alert => (
  <div key={alert.id} className={`message__display ${alert.alertType}`}>
    <span>{alert.msg}</span>
    <button onClick={() => onRemove(alert.id)}>X</button>
  </div>

));

const mapStateToProps = ({ alert }) => ({
  alerts: alert
});
const mapDispatchToProps = dispatch => ({
  onRemove: (id) => {
    dispatch(removeAlert(id));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Alert);
