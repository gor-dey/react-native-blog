import { useForm, Controller } from 'react-hook-form'
import { ButtonSubmit, ButtonText, Input, Wrapper } from './style'
import { observer } from 'mobx-react-lite'
import { Store } from '@shared/store'

export const AddCommentForm = observer(() => {
  const store = Store

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      comment: ''
    }
  })
  const onSubmit = (data: { comment: string }): void => {
    store.addComment(data)
    reset()
  }

  return (
    <Wrapper>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            multiline={true}
            numberOfLines={3}
            placeholder="Оставьте комментарий..."
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            maxLength={250}
          />
        )}
        name="comment"
      />

      <ButtonSubmit onPress={handleSubmit(onSubmit)}>
        <ButtonText>Добавить комментарий</ButtonText>
      </ButtonSubmit>
    </Wrapper>
  )
})
