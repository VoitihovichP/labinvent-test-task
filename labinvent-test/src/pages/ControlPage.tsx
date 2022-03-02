import React from 'react';
import './controlPage.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Widgetsbar from '../components/Widgetbar/Widgetsbar';

const ControlPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <Widgetsbar />
    </div>
  )
}

export default ControlPage;