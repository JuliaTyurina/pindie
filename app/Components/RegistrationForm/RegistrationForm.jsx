import Styles from '@/app/Components/RegistrationForm/RegistrationForm.module.css';
import { authorize, isResponseOk } from '@/app/api/api-utils';
import { endpoints } from '@/app/api/config';
import { useEffect, useState } from 'react';
import { useStore } from '@/app/store/app-store';

export default function RegistrationForm (props) {
  const authContext = useStore()
  const [regData, setRegData] = useState({ username: '', email: '', password: '' })
  const [message, setMessage] = useState({ status: null, text: null })

  function handleInput (e) {
    setRegData({
      ...regData,
      [e.target.name]: e.target.value
    })
  }
  // console.log(regData);

  async function handleSubmit (e) {
    e.preventDefault()
    const userData = await authorize(endpoints.registration, regData)
    console.log(userData);
    if (isResponseOk(userData)) {
      authContext.login(userData.user, userData.jwt)
      setMessage({ status: 'success', text: "Вы зарегистрировались!" })
    } else {
      setMessage({ status: 'error', text: "Ошибка регистрации" })
    }
  }

  useEffect(() => {
    let timer;
    if (authContext.user) {
      timer = setTimeout(() => {
        props.close()
      }, 1000)
    }
    return () => clearTimeout(timer)
  }, [authContext.user])


  return (
    <form className={Styles['form']} onSubmit={handleSubmit}>
      <h2 className={Styles['form__title']}>Регистрация</h2>
      <div className={Styles['form__fields']}>
      <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Имя пользователя</span>
          <input className={Styles['form__field-input']} name="username" type="text" placeholder="Ju" onInput={handleInput}/>
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Email</span>
          <input className={Styles['form__field-input']} name="email" type="email" placeholder="hello@world.com" onInput={handleInput}/>
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Пароль</span>
          <input className={Styles['form__field-input']} name="password" type="password" placeholder='***********' onInput={handleInput}/>
        </label>
      </div>
      {
        message.status && (
          <p className={Styles['form__message']}>{message.text}</p>
        )
      }
      <div className={Styles['form__actions']}>
        <button className={Styles['form__reset']} type="reset">Очистить</button>
        <button className={Styles['form__submit']} type="submit">Регистрация</button>
      </div>
    </form>
  ) 
};