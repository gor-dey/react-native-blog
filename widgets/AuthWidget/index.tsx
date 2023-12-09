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

interface FormData {
  login: string
  password: string
}

export const AuthWidget = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      login: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
    reset()
    // navigation.navigate('ListPage')
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
          name="login"
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

      {(errors.login || errors.password) && <Text>Введите имя и пароль!</Text>}
      <ButtonSubmit onPress={handleSubmit(onSubmit)}>
        <ButtonText>Войти</ButtonText>
      </ButtonSubmit>
    </Wrapper>
  )
}
