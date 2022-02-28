import React from 'react';
import './controlPage.scss';
import Sidebar from '../components/Sidebar/Sidebar';

const ControlPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Sidebar />
    </div>
  )
}

export default ControlPage;