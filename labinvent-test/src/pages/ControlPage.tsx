import React from 'react';
import './controlPage.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Widgetsbar from '../components/Widgetbar/Widgetsbar';
import Method from '../components/Method/Method';

const ControlPage: React.FC = () => {
  return (
    <div className="page__wrapper">
      <Sidebar />
      <Widgetsbar />
      <div className="page__content">
        <Method />
      </div>
    </div>
  )
}

export default ControlPage;