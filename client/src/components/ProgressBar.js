import React from 'react';
import { connect } from 'react-redux';
import ProgressBarLoading from 'react-progress-bar-plus';

const ProgressBar = ({ ajaxLoading }) => (
  <div>
    { ajaxLoading
      ? (
        <ProgressBarLoading
          percent={0}
          autoIncrement
          onTop
          intervalTime={(Math.random() * 1000)}
          className="progress__bar"
        />
      )
      : <span />
        }
  </div>
);


const mapStateToProps = ({ ajaxLoading }) => ({
  ajaxLoading
});

export default connect(mapStateToProps, null)(ProgressBar);
