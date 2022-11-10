import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../ui/input/input';
import LayoutModal from '../../wrappers/layout-modal';
import { cn as bem } from "@bem-react/classname";
import './style.css';
import Button from '../../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../store/async-actions/user";
import modal from '../../store/modal/actions';

export default function Login() {

  const cn = bem('Login');

  const dispatch = useDispatch();

  const OPTION_REGISTER = {
    required: "Необходимо заполнить"
  }

  const error = useSelector(state => state.user.error)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: 'onBlur'
  });

  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch(modal.close())
    }
  }, [localStorage.getItem('user')])

  const onSubmit = (data) => {
    dispatch(login(data));
    reset();
  }

  return (
    <LayoutModal>
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
          {error && <div className={cn('error')}>{error}</div>}
          <div className={cn('submit')}>
            <Button type="submit" style="blue" disabled={!isValid}>Войти</Button>
          </div>
        </form>
      </div>
    </LayoutModal>
  )
}
