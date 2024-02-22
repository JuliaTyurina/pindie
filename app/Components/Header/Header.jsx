'use client'

import Styles from '@/app/Components/Header/Header.module.css'
import { useState } from 'react'
import { Overlay } from '../Overlay/Overlay'
import { Popup } from '../Popup/Popup'
import { AuthForm } from '../AuthForm/AuthForm'

export const Header = () => {

  const [popupIsOpened, setPopupIsOpened] = useState(false)

  const openPopup = () => {
    setPopupIsOpened (true)
  }

  const closePopup = () => {
    setPopupIsOpened (false)
  }

    return (
      <header className={Styles['header']}>
        <a href="./index.html" className={Styles['logo']}>
          <img
            className={Styles['logo__image']}
            src="./images/logo.svg"
            alt="Логотип Pindie"
          />
        </a>
        <nav className={Styles['menu']}>
          <ul className={Styles['menu__list']}>
            <li className={Styles['menu__item']}>
              <a href="" className={Styles['menu__link']}>
                Новинки
              </a>
            </li>
            <li className={Styles['menu__item']}>
              <a href="" className={Styles['menu__link']}>
                Популярные
              </a>
            </li>
            <li className={Styles['menu__item']}>
              <a href="" className={Styles['menu__link']}>
                Шутеры
              </a>
            </li>
            <li className={Styles['menu__item']}>
              <a href="" className={Styles['menu__link']}>
                Ранеры
              </a>
            </li>
            <li className={Styles['menu__item']}>
              <a href="" className={Styles['menu__link']}>
                Пиксельные
              </a>
            </li>
            <li className={Styles['menu__item']}>
              <a href="" className={Styles['menu__link']}>
                TDS
              </a>
            </li>
          </ul>
          <div className={Styles['auth']}>
            <button onClick={openPopup} className={Styles['auth__button']}>Войти</button>
          </div>
        </nav>
        <Overlay close={closePopup} isOpened={popupIsOpened}/>
      <Popup close={closePopup} isOpened={popupIsOpened}>
          <AuthForm />
      </Popup>
      </header>
    )
  }
  