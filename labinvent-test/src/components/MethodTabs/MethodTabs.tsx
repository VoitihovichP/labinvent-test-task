import React from 'react';
import './methodTabs.scss';
import MethodStatusIcon from '../../assets/svg/work-list-icon.svg';

const MethodTabs: React.FC = () => {
  return (
    <div className="method__tabs">
      <div className="method__tabs-worklist">
        <div className="method__tabs-worklist-head">
          <h3 className="method__tabs-worklist-title">worklist</h3>
          <div className="method__tabs-worklist-status">
            <img src={MethodStatusIcon} alt="method_icon" className="method__tabs-worklist-status-icon" />
            <p className="method__tabs-worklist-status-text">RUN</p>
          </div>
        </div>
        <div className="method__tabs-worklist-todo">
          <p className="method__tabs-worklist-todo-subtitle">TO DO:</p>
          <p className="method__tabs-worklist-todo-injections">
            <span className="method__tabs-worklist-todo-injections-count">23</span> injections
          </p>
        </div>
        <p className="method__tabs-worklist-timer">02:15:00</p>
      </div>
      <div className="method__tabs-method">
        <p className="method__tabs-method-title">method:</p>
        <p className="method__tabs-method-descr">Method1.amx (00:00/04:30)</p>
      </div>
      <p className="method__tabs-single-run">
        single run
      </p>
    </div>
  )
}

export default MethodTabs;