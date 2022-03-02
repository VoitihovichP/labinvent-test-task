import React from 'react';
import { PageText } from '../../constants/enums';
import WidgetsCard from '../WidgetsCard/WidgetsCard';
import './widgetsbar.scss';

const Widgetsbar: React.FC = () => {
  return (
    <div className="widgets">
      <WidgetsCard cardTitle={PageText.WIDGETS_CARD_SAMPLER} />
      <WidgetsCard cardTitle={PageText.WIDGETS_CARD_PUMP} />
    </div>
  )
}

export default Widgetsbar;