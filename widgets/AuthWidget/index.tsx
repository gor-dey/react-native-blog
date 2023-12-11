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
      username: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    reset()
    store.AuthStore.login(data)
    router.replace('/list-rout/')
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
