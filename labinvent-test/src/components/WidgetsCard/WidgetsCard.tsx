import React from 'react';
import './widgetsCard.scss';
import SamplerIcon from '../../assets/svg/sampler-icon.svg';
import ThermostatIcon from '../../assets/svg/thermostat-icon.svg';
import { WidgetsCardPropsType } from '../../types/types';
import { PageText } from '../../constants/enums';
import BottleAIcon from '../../assets/svg/first-bottle.svg';
import BottleBIcon from '../../assets/svg/second-bottle.svg';
import ValveIcon from '../../assets/svg/valve-icon.svg';

const WidgetsCard: React.FC<WidgetsCardPropsType> = (props: WidgetsCardPropsType) => {
  return (
    <div className="widgets__card">
      <div className="widgets__card-title">
        <div className={
          `widgets__card-title-indicator 
          ${props.cardTitle === PageText.WIDGETS_CARD_SAMPLER 
          ? 
          'widgets__card-title-indicator_first' 
          : 
          'widgets__card-title-indicator_second'}`
          }></div>
        <h3 className="widgets__card-title-text">{props.cardTitle}</h3>
      </div>
      <div className="widgets__card-wrapper">
        {
          props.cardTitle === PageText.WIDGETS_CARD_SAMPLER
          ?
          <div className="widgets__card-pictures">
            <svg className="widgets__card-pictures-sampler">
            <use href={`${SamplerIcon}#by_pass`}></use>
            </svg>
            <div className="widgets__card-pictures-wrapper">
              <svg className="widgets__card-pictures-thermostat">
                <use href={`${ThermostatIcon}#thermostat`}></use>
              </svg>
              <button className="widgets__card-pictures-vial"></button>
            </div>
          </div>
          :
          <div className="widgets__card-pump">
            <div className="widgets__card-pictures widgets__card-pictures_default">
              <div className="widgets__card-bottles">
                <div className="widgets__card-bottles-icon widgets__card-bottles-icon_first">
                  <svg className="widgets__card-bottles-svg">
                    <use href={`${BottleAIcon}#first-bottle`}></use>
                  </svg>
                  <p className="widgets__card-bottles-index widgets__card-bottles-index_a">{PageText.WIDGETS_CARD_INDEX_A}</p>
                  <p className="widgets__card-bottles-descr widgets__card-bottles-descr_a">{PageText.WIDGETS_CARD_MIN_DESCR}</p>
                </div>
                <div className="widgets__card-bottles-icon widgets__card-bottles-icon_second">
                  <svg className="widgets__card-bottles-svg">
                    <use href={`${BottleBIcon}#second-bottle`}></use>
                  </svg>
                  <p className="widgets__card-bottles-index widgets__card-bottles-index_b">{PageText.WIDGETS_CARD_INDEX_B}</p>
                  <p className="widgets__card-bottles-descr widgets__card-bottles-descr_b">{PageText.WIDGETS_CARD_MAX_DESCR}</p>
                </div>
              </div>
              <svg className="widgets__card-valve">
                <use href={`${ValveIcon}#valve-icon`}></use>
              </svg>
            </div>
            <p className="widgets__card-bottles-descr widgets__card-ml-speed">{PageText.WIDGETS_CARD_DESCR_SPEED}</p>
          </div>
        }
      </div>
    </div>
  )
} 

export default WidgetsCard;