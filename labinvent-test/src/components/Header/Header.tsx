import React from 'react';
import { PageText } from '../../constants/enums';
import './header.scss';
import UserIcon from '../../assets/svg/user-icon.svg';
import LockIcon from '../../assets/svg/unlock-icon.svg';

const Header: React.FC = () => {

  const openMenu = (): void => {
    document.querySelector('.header__menu-btn')?.classList.toggle('header__menu-btn_active');
  }

  return (
    <header className="header">
      <a href="#" className="header__logo">
        {PageText.LOGO_TITLE}
      </a>
      <div className="header__panel">
        <div className="header__menu">
          <button onClick={() => openMenu()} className="header__menu-btn">
            <div className="header__menu-btn-bar header__menu-btn-bar_first"></div>
            <div className="header__menu-btn-bar header__menu-btn-bar_second"></div>
            <div className="header__menu-btn-bar header__menu-btn-bar_third"></div>
          </button>
          <nav className='header__navigation'>
            <ul className="header__navigation-list">
              <li className="header__navigation-item" key={PageText.NAVIGATION_INSTRUMENTS}>{PageText.NAVIGATION_INSTRUMENTS}</li>
              <li className="header__navigation-item" key={PageText.NAVIGATION_WIDGETS}>{PageText.NAVIGATION_WIDGETS}</li>
              <li className="header__navigation-item" key={PageText.NAVIGATION_VIEW}>{PageText.NAVIGATION_VIEW}</li>
              <li className="header__navigation-item" key={PageText.NAVIGATION_ADMINISTRATION}>{PageText.NAVIGATION_ADMINISTRATION}</li>
            </ul>
          </nav>
        </div>
        <div className="header__user">
          <button className="header__user-profile header__user-btn_default">
            <img src={UserIcon} alt="userIcon" className="header__user-profile-icon" />
            <p className="header__user-profile-text header__user-text_default">{PageText.userName}</p>
          </button>
          <button className="header__user-lang header__user-btn_default">
            <p className="header__user-lang-text header__user-text_default">{PageText.USER_LANG}</p>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;