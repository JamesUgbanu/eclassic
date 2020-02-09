import React from 'react';
import { connect } from 'react-redux';
import { removeAlert } from '../../actions/index';

const Alert = ({ alerts, onRemove }) => alerts !== null
&& alerts.length > 0
&& alerts.map((alert, index) => (
  <div key={index} className={`message__display ${alert.alertType}`}>
    <span>{alert.msg}</span>
<button onClick={() => onRemove(alert.alertId)}>{index === 0 ? 'X' : ''}</button>
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
