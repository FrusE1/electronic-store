import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../ui/input/input';
import { cn as bem, withNaming } from "@bem-react/classname";
import './style.css';
import Button from '../../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../store/async-actions/user";
import { useLocation, useNavigate } from 'react-router-dom';

export default function LoginForm() {

  const bem = withNaming({ e: '__' })
  const cn = bem('Login-form');

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const OPTION_REGISTER = {
    required: "Необходимо заполнить"
  }

  const select = useSelector(state => {
    return {
      error: state.user.error,
      auth: state.user.auth
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: 'onBlur'
  });

  useEffect(() => {
    if (select.auth) {
      const back = location.state?.back ? location.state.back : '/'
      navigate(back)
    }
  }, [select.auth])

  const onSubmit = (data) => {
    dispatch(login(data));
    reset();
  }

  return (
    <div className={cn()}>
      <h1 className={cn('title')}>Вход</h1>
      <form className={cn('form')} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Почта
          <Input register={register("email", {
            ...OPTION_REGISTER,
            pattern: {
              value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
              message: 'Введите почту'
            }
          })} />
          {errors?.email && <p className={cn('form', { type: 'error' })}>{errors.email.message}</p>}
        </label>
        <label>
          Пароль
          <Input register={register("password", {
            ...OPTION_REGISTER,
            minLength: {
              value: 4,
              message: 'Слишком короткий пароль'
            }
          })} />
          {errors?.password && <p className={cn('form', { type: 'error' })}>{errors.password.message}</p>}
        </label>
        {select.error && <div className={cn('error')}>{select.error}</div>}
        <div className={cn('submit')}>
          <Button type="submit" style="blue" disabled={!isValid}>Войти</Button>
        </div>
      </form>
    </div>
  )
}
