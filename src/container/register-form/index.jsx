import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../ui/input/input';
import { cn as bem, withNaming } from "@bem-react/classname";
import './style.css';
import Button from '../../ui/button';
import { userRegister } from "../../store/async-actions/user";
import { useDispatch, useSelector } from 'react-redux';

export default function RegisterForm() {

  const bem = withNaming({ e: '__' })
  const cn = bem('Register-form');

  const dispatch = useDispatch();

  const OPTION_REGISTER = {
    required: "Необходимо заполнить"
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    dispatch(userRegister(data));
    reset();
  }

  return (
    <div className={cn()}>
      <h1 className={cn('title')}>Регистрация</h1>
      <form className={cn('form')} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Имя пользователя
          <Input register={register("username", {
            ...OPTION_REGISTER,
            minLength: {
              value: 3,
              message: "Слишком короткое имя"
            }
          })} />
          {errors?.username ? <p className={cn('form-error')}>{errors.username.message}</p> : null}
        </label>
        <label>
          Почта
          <Input register={register("email", {
            ...OPTION_REGISTER,
            pattern: {
              value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
              message: 'Введите почту'
            }
          })} />
          {errors?.email && <p className={cn('form-error')}>{errors.email.message}</p>}
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
          {errors?.password && <p className={cn('form-error')}>{errors.password.message}</p>}
        </label>
        <div className={cn('submit')}>
          <Button type="submit" style="blue" disabled={!isValid}>Зарегистрироваться</Button>
        </div>
      </form>
    </div>
  )
}
