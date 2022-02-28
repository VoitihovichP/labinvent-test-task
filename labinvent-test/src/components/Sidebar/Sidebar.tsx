import React from 'react';
import './sidebar.scss';
import SearchIcon from '../../assets/svg/search-icon.svg';
import { PageText } from '../../constants/enums';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__search">
        <input type="text" name="search" id="search" className="sidebar__search-input" placeholder='Search' />
        <svg className="sidebar__search-icon">
          <use href={`${SearchIcon}#search-icon`}></use>
        </svg>
      </div>
      <div className="sidebar__system">
        <div className="sidebar__system-timer">
          <div className="sidebar__system-timer-descr sidebar__system-timer_default">
            <p className="sidebar__system-timer-status sidebar__system-timer_default">{PageText.STATUS_RUN}</p>
            <p className="sidebar__system-timer-time sidebar__system-timer_default">
              <span className="sidebar__system-timer-curr">00:23</span>
              /
              <span className="sidebar__system-timer-durration">01:00</span>
            </p>
          </div>
          <p className="sidebar__system-timer-rest sidebar__system-timer_default">-00:47</p>
        </div>
        <div className="sidebar__system-status">
          <p className="sidebar__system-status-descr">{PageText.STATUS_RUN}</p>
          <div className="sidebar__system-status-wrapper">
            <button className="sidebar__system-status-btn sidebar__system-status-btn_on">{PageText.STATUS_BTN_ON}</button>
            <button className="sidebar__system-status-btn">{PageText.STATUS_BTN_OFF}</button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;