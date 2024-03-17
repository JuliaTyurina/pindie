'use client'

import Styles from '@/app/Components/Header/Header.module.css'
import { useEffect, useState } from 'react'
import { Overlay } from '@/app/Components/Overlay/Overlay'
import { Popup } from '@/app/Components/Popup/Popup'
import { AuthForm } from '@/app/Components/AuthForm/AuthForm'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { getJWT, getMe, isResponseOk, removeJWT } from '@/app/api/api-utils'
import { endpoints } from '@/app/api/config'


export const Header = () => {

  const [popupIsOpened, setPopupIsOpened] = useState(false)
  const [isAuthorized, setIsAuthorized] = useState(false)

  const openPopup = () => {
    setPopupIsOpened(true)
  }

  const closePopup = () => {
    setPopupIsOpened(false)
  }

  const pathname = usePathname();

  useEffect(() => {
    const jwt = getJWT()
     if (jwt) {
       getMe(endpoints.me, jwt).then((userData) => {
        if (isResponseOk(userData)) {
          setIsAuthorized(true)
        } else {
          setIsAuthorized(false)
          removeJWT()
        }
      })
    }
  }, [])

  function logOut () {
    removeJWT()
    setIsAuthorized(false)
  }


  return (
    <header className={Styles['header']}>
      {pathname === '/' ? (
        <div className={Styles['logo']}>
          <img
            className={Styles['logo__image']}
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </div>
      ) : (
        <Link href="/">
          <div className={Styles['logo']}>
            <img
              className={Styles['logo__image']}
              src="/images/logo.svg"
              alt="Логотип Pindie"
            />
          </div>
        </Link>
      )}
      <nav className={Styles['menu']}>
        <ul className={Styles['menu__list']}>
          <li className={Styles['menu__item']}>
            <Link href="/new" className={`${Styles["menu__link"]} ${pathname === "/new" ? Styles["menu__link_active"] : ""
              }`}>
              Новинки
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/popular" className={`${Styles["menu__link"]} ${pathname === "/popular" ? Styles["menu__link_active"] : ""
              }`}>
              Популярные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/shooters" className={`${Styles["menu__link"]} ${pathname === "/shooters" ? Styles["menu__link_active"] : ""
              }`}>
              Шутеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/runners" className={`${Styles["menu__link"]} ${pathname === "/runners" ? Styles["menu__link_active"] : ""
              }`}>
              Ранеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/pixel-games" className={`${Styles["menu__link"]} ${pathname === "/pixel-games" ? Styles["menu__link_active"] : ""
              }`}>
              Пиксельные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/tds" className={`${Styles["menu__link"]} ${pathname === "/tds" ? Styles["menu__link_active"] : ""
              }`}>
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles['auth']}>
          {
            isAuthorized ? (
              <button onClick={logOut} className={Styles['auth__button']}>Выйти</button>
            ) : (
              <button onClick={openPopup} className={Styles['auth__button']}>Войти</button>
            )
          }
        </div>
      </nav>
      <Overlay close={closePopup} isOpened={popupIsOpened} />
      <Popup close={closePopup} isOpened={popupIsOpened}>
        <AuthForm close={closePopup} setAuth={setIsAuthorized} />
      </Popup>
    </header>
  )
}
