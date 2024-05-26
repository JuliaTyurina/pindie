'use client'

import Styles from '@/app/Components/Header/Header.module.css'
import { useState } from 'react'
import { Overlay } from '@/app/Components/Overlay/Overlay'
import { Popup } from '@/app/Components/Popup/Popup'
import { AuthForm } from '@/app/Components/AuthForm/AuthForm'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { useStore } from "@/app/store/app-store";
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname();
  const authContext = useStore()
  const [popupIsOpened, setPopupIsOpened] = useState(false)
  const [regPopupIsOpened, setRegPopupIsOpened] = useState(false)
  const router = useRouter()

  const openPopup = () => {
    setPopupIsOpened(true)
  }

  const openRegPopup = () => {
    setRegPopupIsOpened(true)
  }

  const closePopup = () => {
    setPopupIsOpened(false)
    setRegPopupIsOpened(false)
  }

  function handleLogOut() {
    authContext.logout()
    router.push('/')
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
            authContext.isAuth ? (
              <>
              <button onClick={() => router.push('/accaunt-info')} className={Styles['auth__button']}>Мой профиль</button>
              <button onClick={handleLogOut} className={Styles['auth__button']}>Выйти</button>
              </>
            ) : (<>
              <button onClick={openPopup} className={Styles['auth__button']}>Войти</button>
              <button onClick={openRegPopup} className={Styles['auth__button']}>Начать</button>
            </>
            )
          }
        </div>
      </nav>
      <Overlay close={closePopup} isOpened={popupIsOpened || regPopupIsOpened} />
      <Popup close={closePopup} isOpened={popupIsOpened}>
        <AuthForm close={closePopup} />
      </Popup>
      <Popup close={closePopup} isOpened={regPopupIsOpened}>
        <RegistrationForm close={closePopup} />
      </Popup>
    </header>
  )
}