import React from 'react';
import { PageText } from '../../constants/enums';
import WidgetsCard from '../WidgetsCard/WidgetsCard';
import './widgetsbar.scss';
import ArrowIcon from '../../assets/svg/arrow-icon.svg';

const Widgetsbar: React.FC = () => {
  return (
    <div className="widgets">
      <WidgetsCard cardTitle={PageText.WIDGETS_CARD_SAMPLER} />
      <WidgetsCard cardTitle={PageText.WIDGETS_CARD_PUMP} />
      <button className="widgets__close-btn">
        <svg className="widgets__close-btn-icon">
          <use href={`${ArrowIcon}#arrow`}></use>
        </svg>
      </button>
    </div>
  )
}

export default Widgetsbar;