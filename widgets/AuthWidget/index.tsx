import React from 'react'
import { Text } from 'react-native'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import {
  ButtonSubmit,
  ButtonText,
  InputWrapper,
  StyledTextInput,
  Wrapper
} from './style'
import { router } from 'expo-router'
import { observer } from 'mobx-react-lite'
import { Store } from '@shared/store'

interface FormData {
  username: string
  password: string
}

export const AuthWidget = observer(() => {
  const store = Store

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      username: 'mockUser',
      password: 'mockPassword'
    }
  })

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      await store.AuthStore.login(data)

      // Check if authentication was successful
      if (store.AuthStore.isAuthenticated) {
        router.replace('/list-rout/')
      } else {
        console.log('Login failed')
        alert(
          'Неверные логин или пароль. Попробуйте в этот раз ничего не вводить и довериться defaultValue =)'
        )
      }
    } catch (error) {
      console.log(error)
      alert('An error occurred during login.')
    } finally {
      reset()
    }
  }

  return (
    <Wrapper>
      <InputWrapper>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledTextInput
              placeholder="Логин"
              placeholderTextColor="#fff"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledTextInput
              placeholder="Пароль"
              placeholderTextColor="#fff"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
      </InputWrapper>

      {(errors.username || errors.password) && (
        <Text>Введите имя и пароль!</Text>
      )}
      <ButtonSubmit onPress={handleSubmit(onSubmit)}>
        <ButtonText>Войти</ButtonText>
      </ButtonSubmit>
    </Wrapper>
  )
})
